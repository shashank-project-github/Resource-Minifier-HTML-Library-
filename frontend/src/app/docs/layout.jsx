import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-2'>
                <Sidebar />
            </div>
            <div className='col-span-10'>
                {children}
            </div>
        </div>
    )
}

export default Layout
