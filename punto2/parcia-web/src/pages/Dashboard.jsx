import React from 'react'
import Navbar from '../components/NavbarDashboard'
import ListUsers from '../components/ListUsers'

const Dashboard = () => {
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <div>

        <ListUsers />
      </div>
    </div>
  )
}

export default Dashboard
