import React from 'react'
import Sidemenu from './SideMenu/Sidemenu'
import Dashboard from './DashBoard/Dashboard'

function Home() {
    return (
        <React.Fragment>
            <div className='home-wrapper'>
                <Sidemenu />
                <Dashboard />
            </div>
        </React.Fragment>
    )
}

export default Home