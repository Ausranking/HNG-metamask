import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Places from "./components/Places";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Navbar showModal={showModal} />
      <Modal open={isModalOpen} close={closeModal} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
      </Routes>
    </div>
  );
}

export default App;
