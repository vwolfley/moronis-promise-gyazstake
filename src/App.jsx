import { useState } from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Header from "./components/Layout/header/Header"
import About from "./components/Layout/pages/About"
import Checklist from "./components/Layout/pages/Checklist"
import Registration from "./components/Layout/pages/Registration"
import ReadingChallenge from "./components/Layout/pages/ReadingChallenge"
import Clothing from "./components/Layout/pages/Clothing"
import FAQ from "./components/Layout/pages/Faqs"
import Footer from "./components/Layout/footer/Footer"
import EventPhotos from "./components/Layout/pages/EventPhotos"

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen w-screen flex-col overflow-x-hidden scroll-smooth">
        <Header />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/reading-challenge" element={<ReadingChallenge />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/checklist" element={<Checklist />} />
          <Route exact path="/clothing" element={<Clothing />} />
          <Route exact path="/faqs" element={<FAQ />} />
          <Route exact path="/event-photos" element={<EventPhotos />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
