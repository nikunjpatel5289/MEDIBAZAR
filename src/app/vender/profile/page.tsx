import NavBar from '@/components/vender-layout/NavBar'
import SideBar from '@/components/vender-layout/SideBar'
import Profile from '@/components/vender-layout/profileComponent/Profile'
import React from 'react'

const page = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-2 mt-14">
          <div className="text-start text-gray-600 font-sans text-4xl mb-4">
            <span className="font-semibold">Profile</span>
          </div>
        </div>
        <Profile />
      </div>
    </>
  )
}

export default page