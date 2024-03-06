import React from 'react'
import Sidebar from '../../components/shared/SideBar'
import MobileNav from '@/components/shared/MobileNav'
function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className='root'>
      <Sidebar />
      <MobileNav />
        <div className='root-contanier'>
            <div className='wrapper'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout