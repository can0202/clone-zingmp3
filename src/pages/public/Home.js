import React from "react";
import {
  Banner,
  Chill,
  LoveLife,
  Mood,
  NewRelease,
  ReleaseChart,
  RemixDancer,
  Top100,
  TrendingArtists,
  WeekChartBanner,
} from "../../components";

const Home = () => {
  return (
    <div className="content-inner">
      <Banner />
      <NewRelease />
      <RemixDancer />
      <Chill />
      <LoveLife />
      <Mood />
      <TrendingArtists />
      <ReleaseChart />
      <WeekChartBanner />
      <Top100 />
    </div>
  );
};

export default Home;
