import { useState } from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Header from "./components/Layout/header/Header"
import Home from "./components/Layout/pages/Home"
import Checklist from "./components/Layout/pages/Checklist"
import Calendar from "./components/Layout/pages/Calendar"
import Location from "./components/Layout/pages/Location"
import ReadingChallenge from "./components/Layout/pages/ReadingChallenge"
import Clothing from "./components/Layout/pages/Clothing"
import ImportantInfo from "./components/Layout/pages/ImportantInfo"
import FAQ from "./components/Layout/pages/Faqs"
import Footer from "./components/Layout/footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen w-screen flex-col overflow-x-hidden scroll-smooth">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checklist" element={<Checklist />} />
          <Route exact path="/calendar" element={<Calendar />} />
          <Route exact path="/location" element={<Location />} />
          <Route exact path="/reading-challenge" element={<ReadingChallenge />} />
          <Route exact path="/clothing" element={<Clothing />} />
          <Route exact path="/important-info" element={<ImportantInfo />} />
          <Route exact path="/faqs" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
