import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

import { NavBar } from "./components/NavBar"
import { Toaster } from "react-hot-toast";
import { BlogForm } from "./pages/BlogForm";

import MonedaPage from "./pages/MonedaPage";


import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto ">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/blogs/" />} />
          <Route path="/blogs/" element={<BlogPage />} />
          <Route path="/blogs-create/" element={<BlogForm />} />
          <Route path="/blogs/:id" element={<BlogForm />} />


          <Route path="/crea/" element={<MonedaPage />} />


        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App