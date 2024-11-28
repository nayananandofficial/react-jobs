import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import react from "./../assets/react.svg";


import React from 'react'

const Options = () => {
  return (
    
        <Menu as="div" className="sm:hidden xs:block relative text-center ">
          <div className=' bg-indigo-600 flex justify-between px-3'>
            <Link to="/" className='flex'>
            <img src={react} alt="react_logo" className="px-2 " /> 
            </Link>
            <span className="font-bold m-auto text-md text-white">React Jobs</span>

            <MenuButton className='bg-indigo-600 gap-x-1.5 rounded-md m-2 px-3 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-500'>
            <FaBars />
            </MenuButton>
          </div>
    
          <MenuItems
            transition
            className="right-0 z-8 origin-top-right divide-y divide-gray-100 rounded-md bg-blue-200 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div>
              <MenuItem>
                <Link
                  to="/"
                  className="bg-indigo-900 block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Home
                </Link>
              </MenuItem>
            </div>
            <div>
              <MenuItem>
                <Link
                  to="/jobs"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Jobs
                </Link>
              </MenuItem>
            </div>
            <div>
              <MenuItem>
                <Link
                  to="*"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Add Job
                </Link>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      )
  
}

export default Options
  

