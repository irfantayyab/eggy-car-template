"use client";

import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

type RatingData = {
 totalVotes: number;
 sumRatings: number;
};

function RatingViewClient({ postId, initialData }: { postId: string; initialData: RatingData }) {
 const [totalVotes, setTotalVotes] = useState(initialData.totalVotes);
 const [sumRatings, setSumRatings] = useState(initialData.sumRatings);

 useEffect(() => {
  const ratingDoc = doc(db, "ratings", postId);

  // Real-time listener - updates automatically when Firestore data changes
  const unsubscribe = onSnapshot(
   ratingDoc,
   docSnap => {
    if (docSnap.exists()) {
     const data = docSnap.data();
     setTotalVotes(data.totalVotes || 0);
     setSumRatings(data.sumRatings || 0);
    }
   },
   error => {
    console.error("Error loading rating data:", error);
   },
  );

  // Cleanup listener on unmount
  return () => unsubscribe();
 }, [postId]);

 const averageRating = totalVotes > 0 ? sumRatings / totalVotes : 0;

 const StarIcon = ({ fillPercentage }: { fillPercentage: number }) => {
  const fill = fillPercentage > 0 ? "#fbbf24" : "#D1D5DB";
  return (
   <div className="relative inline-block h-5 w-5">
    {/* Background star (gray) */}
    <svg className="absolute top-0 left-0 h-full w-full" viewBox="0 0 24 24" fill="#D1D5DB">
     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
    {/* Foreground star (colored) with clip path */}
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
   </div>
  );
 };

 const getStarFillPercentage = (starIndex: number) => {
  const diff = averageRating - starIndex;
  if (diff >= 1) return 100;
  if (diff > 0) return diff * 100;
  return 0;
 };

 return (
  <div className="flex items-center gap-2.5">
   <div className="flex items-center">
    {[0, 1, 2, 3, 4].map(index => (
     <StarIcon key={index} fillPercentage={getStarFillPercentage(index)} />
    ))}
   </div>
   <span>
    {averageRating.toFixed(1)}/5 ({totalVotes})
   </span>
  </div>
 );
}

export default RatingViewClient;
