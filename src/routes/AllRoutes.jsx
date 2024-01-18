import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import LoginPage from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/HomePage' element={<HomePage/>}/>
            </Routes>
        </div>
    )
}

export {AllRoutes}