"use client";

import { activities } from "@/data";
import HomeContent from "./home-content";

const HomePage = () => {
  return <HomeContent activities={activities} />;
};

export default HomePage;
