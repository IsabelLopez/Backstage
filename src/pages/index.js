import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from "../components/Navbar"
import Homepage from "../pages/home"
import "../pages/index.css"

const IndexPage = () => {
  return (
    <>
      <main>
        <title>Backstage - Home</title>
      </main>
      <Homepage />
    </>
  )
}

export default IndexPage
