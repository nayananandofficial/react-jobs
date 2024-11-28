import react from "./../assets/react.svg"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({isActive}) => isActive ? 'bg-black hover:bg-gray-800 px-4 py-2 rounded-md' : ' hover:bg-gray-800 px-4 py-2 rounded-md'
  return (
    <>{/* navbar section */}
    
    <nav className="bg-indigo-600 text-white py-4 px-4 max-w-50 hidden sm:flex w-full">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <img src={react} alt="react_logo" className="h-8 mr-2" />
        <span className="font-bold text-lg">React Jobs</span>
      </Link>
      <div className="space-x-4">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/jobs" className={linkClass} >Jobs</NavLink>
        <NavLink to="/add-job" className={linkClass} >Add Job</NavLink>
      </div>
    </div>
  </nav>
    
    </>
    
  )
}

export default Navbar;