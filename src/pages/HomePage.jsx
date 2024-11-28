import Header from "../components/Header";
import Hero from "../components/Hero";
import ViewJobs from "../components/ViewJobs";
import RecentJobs from "../components/RecentJobs";

const HomePage = () => {
  return (
    <>
      <Header bg="bg-indigo-600" />
      <Hero />
      <RecentJobs isHome={true} />
      <ViewJobs />
    </>
  );
};

export default HomePage;
