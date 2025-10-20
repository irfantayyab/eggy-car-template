import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import RatingClient from "./rating-client";

type RatingData = {
 totalVotes: number;
 sumRatings: number;
 voters: string[];
};

async function Rating({ postId = "default-post" }: { postId?: string }) {
 let initialData: RatingData = {
  totalVotes: 0,
  sumRatings: 0,
  voters: [],
 };

 try {
  const ratingDoc = doc(db, "ratings", postId);
  const docSnap = await getDoc(ratingDoc);

  if (docSnap.exists()) {
   const data = docSnap.data();
   initialData = {
    totalVotes: data.totalVotes || 0,
    sumRatings: data.sumRatings || 0,
    voters: data.voters || [],
   };
  }
 } catch (error) {
  console.error("Error loading rating data:", error);
 }

 return <RatingClient postId={postId} initialData={initialData} />;
}

export default Rating;
