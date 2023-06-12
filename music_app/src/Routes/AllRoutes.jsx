import React from 'react'
import {Route, Routes} from "react-router-dom"

import RequiresAuth from '../Components/RequiresAuth'
import MusicRecords from '../Pages/MusicRecords'
import SingleMusicRecord from '../Pages/SingleMusicRecord'
import EditMusicRecord from '../Pages/EditMusicRecord'
import Login from '../Pages/Login'
import HomePage from '../Pages/HomePage'


const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/music/:id" element={
      <RequiresAuth>
    <SingleMusicRecord />
    </RequiresAuth>
    } />
    <Route path="/music/:id/edit" element={<EditMusicRecord />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  )
}

export default AllRoutes