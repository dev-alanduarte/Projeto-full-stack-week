"use client";

import QuickSearch from "./components/QuickSearch";
import RecommendedTrips from "./components/RecommendTrips";
import TripSearch from "./components/TripSearch";

export default function Home() {
  return (
    <div>
      <TripSearch />
      <QuickSearch />
      <RecommendedTrips />
    </div>
  );
}
