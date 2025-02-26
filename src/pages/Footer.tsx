import React from "react";

function Footer() {
  return (
    <footer className="mt-0 p-5 shadow-sm">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className=" sm:items-center sm:justify-between">
          <a href="https://GiacomoLorenzon.github.io/nextGen" className="no-underline flex items-center mb-4 space-x-3 rtl:space-x-reverse">
            <h1 className="mb-2 text-5xl font-extralight text-gray-900 dark:text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Ng</span>
              <span className="dark:text-white">C</span>
            </h1>
          </a>
          <h6 className="mb-10 text-lg font-normal whitespace-nowrap dark:text-white">Next-generation Consulting</h6>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="https://GiacomoLorenzon.github.io/nextGen" className="text-gray-500 hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="https://GiacomoLorenzon.github.io/nextGen" className="text-gray-500 hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="https://GiacomoLorenzon.github.io/nextGen" className="text-gray-500 hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="https://GiacomoLorenzon.github.io/nextGen" className="text-gray-500 hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://GiacomoLorenzon.github.io/nextGen" className="text-gray-500 hover:underline">Next-generation Consulting™</a>. All Rights Reserved.</span>
        </div>
    </footer>
  );
}

export default Footer;