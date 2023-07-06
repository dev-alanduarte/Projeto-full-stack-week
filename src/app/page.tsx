'use client'

import React from "react";
import RecommendTrips from "./components/RecommendTrips";
import QuickSearch from "./components/QuickSearch";
import TripSearch from "./components/TripSearch";

export default function Home() {
  return (
    <div>
      <TripSearch />
      <QuickSearch />
      <RecommendTrips />
    </div>
  );
}
