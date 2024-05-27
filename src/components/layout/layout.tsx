import React from 'react'
import Sidebar from './sidebar'
import Navbar from './navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex gap-7'>
            <Sidebar />
            <div className='w-full'>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layout