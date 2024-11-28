import { useState } from 'react'
import { HiLocationMarker } from "react-icons/hi";
import { Link } from 'react-router-dom';


const Jobs = ({jobTime, jobTitle, description, salary, jobLocation, jobId}) => {

  const [showFullDescription, setShowFullDescription] = useState(false);

  
  return (
    <>

      <div className="bg-white p-6 rounded shadow">
            <span className="text-gray-500 text-sm">{jobTime}</span>
            <h3 className="mt-2 text-lg font-bold">{jobTitle}</h3>
            <p className={`mt-2 text-sm ${showFullDescription ? '' : 'truncate'}`}>{description}</p>
            <button onClick={() => {setShowFullDescription((preState) => !preState)}} className="text-sm text-indigo-500 mt-2 inline-block">{showFullDescription? 'less' : 'more'}</button>
            <p className="mt-4 text-indigo-400 text-lg font-bold">{salary} / year</p>
           <hr className='mt-2' />
           <p className="inline-flex items-center mt-2"><HiLocationMarker className='text-red-500 text-xl'/><span className="text-red-500 font-bold mx-2 my-3">
              {jobLocation}</span></p>
              <Link to={jobId} className="justify-center flex mt-4 px-4 py-2 bg-indigo-500 text-white rounded text-sm md:float-right md:w-auto">Read More </Link>
          </div>
          {/* job card  */}
          
  </>
  )
}

export default Jobs