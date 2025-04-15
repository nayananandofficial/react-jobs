import { useState, useEffect } from "react";
import Jobs from "./Jobs";
import Spinner from "./Spinner";
import axios from "axios";

const RecentJobs = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_API_URL}/api/jobs`; // Always fetch all jobs
        const res = await axios.get(apiUrl);
        console.log(res.data);
        let data = res.data; // Assuming jobs are returned directly
        
        

        // If isHome is true, limit the results to the first 3 jobs
        if (isHome) {
          data = data.slice(0, 3); // Use slice to get only the first 3 jobs
        }

        
        setJobs(data); // Set the jobs state with the limited data
      } catch (error) {
        console.log("error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);

  return (
    <>
      {/* Recent Jobs Section */}

      <section className="bg-blue-50 py-10">
        <div className="lg:container m-auto container-xl ">
          <h2 className=" text-center xs:text-2xl sm:text-3xl sm:my-12 font-bold text-indigo-500">
            {isHome ? "Active Job Posts" : "Browse Top Jobs For You"}
          </h2>

          {loading ? (
            <Spinner />
          ) : (
            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-10">
              {jobs.map((job) => (
                <Jobs
                  key={job.id}
                  jobTime={job.type}
                  jobTitle={job.title}
                  description={job.description}
                  salary={job.salary}
                  jobLocation={job.location}
                  jobId={`/jobs/${job.id}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default RecentJobs;
