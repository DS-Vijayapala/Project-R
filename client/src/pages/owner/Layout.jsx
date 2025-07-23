import React, { useEffect } from 'react'
import NavBarOwner from '../../components/owner/NavBarOwner'
import SideBar from '../../components/owner/SideBar'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {

    const { isOwner, navigate } = useAppContext()

    useEffect(() => {


        if (!isOwner) {

            navigate('/')

        }

    }, [isOwner])

    return (

        <div className='flex flex-col'>

            <NavBarOwner />

            <div className='flex'>

                <SideBar />

                <Outlet />

            </div>


        </div>

    )

}

export default Layout