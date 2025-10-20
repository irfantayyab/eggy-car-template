"use client";

import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { arrayUnion, doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
import { useTranslations } from "next-intl";

type RatingData = {
 totalVotes: number;
 sumRatings: number;
 voters: string[];
};

// Generate a simple browser fingerprint
const generateFingerprint = (): string => {
 const canvas = document.createElement("canvas");
 const ctx = canvas.getContext("2d");
 if (ctx) {
  ctx.textBaseline = "top";
  ctx.font = "14px Arial";
  ctx.fillText("fingerprint", 2, 2);
 }

 const fingerprint = [
  navigator.userAgent,
  navigator.language,
  screen.colorDepth,
  screen.width + "x" + screen.height,
  new Date().getTimezoneOffset(),
  canvas.toDataURL(),
 ].join("|");

 // Simple hash function
 let hash = 0;
 for (let i = 0; i < fingerprint.length; i++) {
  const char = fingerprint.charCodeAt(i);
  hash = (hash << 5) - hash + char;
  hash = hash & hash;
 }
 return "fp_" + Math.abs(hash).toString(36);
};

function RatingClient({ postId, initialData }: { postId: string; initialData: RatingData }) {
 const [rating, setRating] = useState(0);
 const [hoverRating, setHoverRating] = useState(0);
 const [totalVotes, setTotalVotes] = useState(initialData.totalVotes);
 const [sumRatings, setSumRatings] = useState(initialData.sumRatings);
 const [hasVoted, setHasVoted] = useState(false);
 const [userFingerprint, setUserFingerprint] = useState<string>("");
 const [isSubmitting, setIsSubmitting] = useState(false);

 const t = useTranslations("Rating");

 // Generate fingerprint on mount and check if user has voted
 useEffect(() => {
  const fp = generateFingerprint();
  setUserFingerprint(fp);

  // Check if user has voted using fingerprint from server
  if (initialData.voters.includes(fp)) {
   setHasVoted(true);
   // Try to get rating from memory (could enhance this)
   const storedRating = getStoredRating(postId);
   if (storedRating) {
    setRating(storedRating);
   }
  }
 }, [initialData.voters, postId]);

 const getStoredRating = (postId: string): number | null => {
  try {
   const stored = localStorage.getItem(`voted-${postId}`);
   return stored ? parseFloat(stored) : null;
  } catch {
   return null;
  }
 };

 const handleStarClick = async (value: number) => {
  if (hasVoted || isSubmitting) return;

  setIsSubmitting(true);
  setRating(value);
  setHasVoted(true);

  // Store vote in localStorage
  try {
   localStorage.setItem(`voted-${postId}`, value.toString());
  } catch (error) {
   console.warn("Failed to store rating in localStorage:", error);
  }

  try {
   const ratingDoc = doc(db, "ratings", postId);

   // Check one more time if user has voted (race condition protection)
   const docSnap = await getDoc(ratingDoc);

   if (docSnap.exists()) {
    const voters = docSnap.data().voters || [];
    if (voters.includes(userFingerprint)) {
     alert(t("alreadyVoted"));
     return;
    }

    // Update existing document
    await updateDoc(ratingDoc, {
     totalVotes: increment(1),
     sumRatings: increment(value),
     voters: arrayUnion(userFingerprint),
     lastUpdated: new Date().toISOString(),
    });
   } else {
    // Create new document
    await setDoc(ratingDoc, {
     totalVotes: 1,
     sumRatings: value,
     voters: [userFingerprint],
     createdAt: new Date().toISOString(),
    });
   }

   // Update local state
   setSumRatings(sumRatings + value);
   setTotalVotes(totalVotes + 1);
  } catch (error) {
   console.error("Error saving rating:", error);
   // Revert local changes on error
   setRating(0);
   setHasVoted(false);
   try {
    localStorage.removeItem(`voted-${postId}`);
   } catch {}
   alert(t("voteFailed"));
  } finally {
   setIsSubmitting(false);
  }
 };

 const handleStarHover = (value: number) => {
  if (rating === 0 && !hasVoted) {
   setHoverRating(value);
  }
 };

 const handleMouseLeave = () => {
  if (rating === 0 && !hasVoted) {
   setHoverRating(0);
  }
 };

 const averageRating = totalVotes > 0 ? (sumRatings / totalVotes).toFixed(1) : "0";
 const displayRating = rating > 0 ? rating : hoverRating;

 const StarIcon = ({ fillPercentage, index }: { fillPercentage: number; index: number }) => {
  const isHovering = rating === 0 && hoverRating > 0;
  const fill = fillPercentage > 0 ? (isHovering ? "#ffcc36" : "#ffe699") : "#D1D5DB";
  const isDisabled = hasVoted || isSubmitting;

  return (
   <div
    className={`relative inline-block h-12 w-12 ${
     !isDisabled ? "cursor-pointer" : "cursor-not-allowed opacity-75"
    } ${isSubmitting ? "animate-pulse" : ""}`}
   >
    <svg className="absolute top-0 left-0 h-full w-full" viewBox="0 0 24 24" fill="#D1D5DB">
     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
    <svg
     className="absolute top-0 left-0 h-full w-full"
     viewBox="0 0 24 24"
     fill={fill}
     style={{
      clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`,
     }}
    >
     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
    {!isDisabled && (
     <>
      <div
       className="absolute top-0 left-0 z-10 h-full w-1/2"
       onMouseEnter={() => handleStarHover(index + 0.5)}
       onClick={() => handleStarClick(index + 0.5)}
      />
      <div
       className="absolute top-0 right-0 z-10 h-full w-1/2"
       onMouseEnter={() => handleStarHover(index + 1)}
       onClick={() => handleStarClick(index + 1)}
      />
     </>
    )}
   </div>
  );
 };

 const getStarFillPercentage = (starIndex: number) => {
  const diff = displayRating - starIndex;
  if (diff >= 1) return 100;
  if (diff >= 0.5) return 50;
  return 0;
 };

 return (
  <footer className="text-center">
   <h3 className="mb-1.5 text-[26px] font-normal">{t("p1")}</h3>
   <p className="mb-1.5">{hasVoted ? t("p2b") : t("p2a")}</p>
   <div className="mx-auto flex w-fit" onMouseLeave={handleMouseLeave}>
    {[0, 1, 2, 3, 4].map(index => (
     <StarIcon key={index} fillPercentage={getStarFillPercentage(index)} index={index} />
    ))}
   </div>
   <p className="mt-3 mb-1.5">
    {t("p3")} {averageRating} / 5. {t("p4")} {totalVotes}
   </p>
   {rating > 0 && <p className="mb-1.5">{t("p5")}</p>}
   {isSubmitting && <p className="text-sm text-gray-500">{t("saving")}</p>}
  </footer>
 );
}

export default RatingClient;
