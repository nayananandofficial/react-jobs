import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>{/* For develpers/employers section */}
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-12 sm:px-12 lg:px-36 ">
      <div className="bg-gray-100 p-6 rounded-md shadow">
        <h2 className="font-bold text-xl">For Developers</h2>
        <p className="mt-2">Browse our React jobs and start your career today</p>
        <Link to="/jobs" className="bg-black text-white inline-block mt-4 rounded px-4 py-2">Browse Jobs</Link>
      </div>
      <div className="bg-blue-100 p-6 rounded-md shadow">
        <h2 className="font-bold text-xl">For Employers</h2>
        <p className="mt-2">List your job to find the perfect developer for the role</p>
        <Link to="/add-job" className="bg-indigo-500 text-white inline-block mt-4 rounded px-4 py-2">Add Job</Link>
      </div>
    </section></>
  )
}

export default Hero