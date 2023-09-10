import React from 'react'
import Nav from '../nav/nav'
import { Outlet } from 'react-router-dom'
import NavComponent from '../nav/nav'
import FooterComponent from '../footer/footer'

export default function Home() {
  return (
    <>
      <NavComponent/>
      <Outlet/>
      <FooterComponent/>
    </>
  )
}