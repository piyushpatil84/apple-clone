import React, { useState } from 'react'

const menus = [
  'Store',
  'Mac',
  'Iphone',
  'Ipad',
  'Watch',
  'AirPods',
  'Tv',
  'Entertainment',
  'Accessories',
  'Support',
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-black bg-opacity-95 fixed top-0 left-0 z-10  w-full">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center md:justify-center justify-between">
          <div />

          <button className="text-white md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          <div className="hidden md:flex md:space-x-6 lg:space-x-10 line pb-3 px-4">
            {menus.map((menu, i) => (
              <a
                href="#"
                className="text-white font-normal text-sm md:text-md lg:text-base capitalize hover:opacity-60"
                key={i}
              >
                {menu}
              </a>
            ))}
          </div>
        </div>

        <div
          className={`absolute top-full left-0 w-full bg-black bg-opacity-95 ${
            isMenuOpen ? 'block h-screen' : 'hidden'
          } md:hidden`}
        >
          <ul className="flex flex-col items-center space-y-2 py-2">
            {menus.map((menu, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-white font-normal text-sm md:text-md lg:text-base capitalize hover:opacity-60"
                >
                  {menu}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
