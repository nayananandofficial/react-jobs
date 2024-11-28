import { Link } from "react-router-dom";


const ViewJobs = () => {
  return (
    <>
    {/* View All Jobs Button */}
    <section className='m-auto max-w-lg my-10 px-6'>
      <Link to="/jobs" className='bg-black text-white px-4 py-3 rounded-lg text-center hover:bg-slate-800 block'>
        View All Jobs
      </Link>
    </section>
    </>
    
  )
}

export default ViewJobs