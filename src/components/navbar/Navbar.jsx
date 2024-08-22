import React from 'react'
import SearchWidget from '../searchWidget/SearchWidget'


const Navbar = () => {
  return (
    <div className="fixed w-full flex gap-[400px] bg-white py-2 px-8">
    <h1 className="text-lg font-medium mt-1">Dashboard</h1>
    <SearchWidget />
  </div>
  )
}

export default Navbar