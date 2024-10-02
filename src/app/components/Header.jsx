"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'


function Header({}) {
 
  const router = useRouter();
  const goToAuthLayout = () => {
    router.push('./login');
  };
    return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">Next Js</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
      <Link href={"/portfolio"} className="mr-5 hover:text-gray-900">PortFolio</Link>
      <Link href={"/blogs"} className="mr-5 hover:text-gray-900">Blogs</Link>
      <Link href={"/aboutus"} className="mr-5 hover:text-gray-900">About Us</Link>
      <Link href={"/contactus"} className="mr-5 hover:text-gray-900">Contact Us</Link>
    </nav>
    <button onClick={goToAuthLayout} className="inline-flex items-center bg-blue-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Login         
    </button>
  </div>
</header>

  )
}

export default Header