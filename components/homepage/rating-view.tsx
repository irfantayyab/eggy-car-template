import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import RatingViewClient from "./rating-view-client";

async function RatingView({ postId = "default-post" }: { postId?: string }) {
 let initialData = {
  totalVotes: 0,
  sumRatings: 0,
 };

 try {
  const ratingDoc = doc(db, "ratings", postId);
  const docSnap = await getDoc(ratingDoc);

  if (docSnap.exists()) {
   const data = docSnap.data();
   initialData = {
    totalVotes: data.totalVotes || 0,
    sumRatings: data.sumRatings || 0,
   };
  }
 } catch (error) {
  console.error("Error loading rating data:", error);
 }

 return <RatingViewClient postId={postId} initialData={initialData} />;
}

export default RatingView;
