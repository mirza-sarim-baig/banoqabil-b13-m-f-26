import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./home";
import Contact from "./Contact";
import Aboutus from "./Aboutus";
import Header from "./Header";
import Students from "./Students";
import Admins from "./Admins";
import ProductCard from "./ProductCard";
import Modal from "./Modal";

function App() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <>
      {/* <Header />
      <ProductCard />
      <button
        className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
        onClick={() => setShowDeleteModal(!showDeleteModal)}
      >
        Delete Modal
      </button>
      <button className="" onClick={() => setShowSuccessModal(true)}>
        Confirmation Modal
      </button>

      {showDeleteModal ? (
        <Modal>
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Delete Product</h2>

              <button className="text-gray-500 hover:text-black text-xl">
                ✕
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this product? This action cannot
              be undone.
            </p>

            <div className="flex justify-end gap-3">
              <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
                Cancel
              </button>

              <button className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
        </Modal>
      ) : showSuccessModal ? (
        <Modal>
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <button onClick={() => setShowSuccessModal(false)}>X</button>
            <div className="flex justify-center mb-4">
              <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-4xl">✅</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center mb-2">
              Product Added Successfully
            </h2>

            <p className="text-gray-500 text-center mb-6">
              Your new product has been added to the inventory and is now
              available.
            </p>

            <div className="flex items-center gap-4 rounded-2xl border border-gray-200 p-4 mb-6">
              <div className="h-20 w-20 rounded-xl bg-gray-100 flex items-center justify-center">
                <img
                  src="https://png.pngtree.com/png-clipart/20240901/original/pngtree-sports-shoes-png-image_15910407.png"
                  alt=""
                  className="h-16 w-16 object-contain"
                />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Nike Air Max</h3>
                <p className="text-sm text-gray-500">Category: Shoes</p>
                <p className="text-sm font-medium text-green-600">$120</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="w-full rounded-xl border border-gray-300 py-3 font-medium hover:bg-gray-100 transition">
                Add Another
              </button>

              <button className="w-full rounded-xl bg-blue-600 text-white py-3 font-medium hover:bg-blue-700 transition">
                View Products
              </button>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )} */}
      {/* <Modal>
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Delete Product</h2>

            <button className="text-gray-500 hover:text-black text-xl">
              ✕
            </button>
          </div>

          <p className="text-gray-600 mb-6">
            Are you sure you want to delete this product? This action cannot be
            undone.
          </p>

          <div className="flex justify-end gap-3">
            <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
              Cancel
            </button>

            <button className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">
              Delete
            </button>
          </div>
        </div>
      </Modal>
      <Modal>
        <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
          <div className="flex justify-center mb-4">
            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-4xl">✅</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-2">
            Product Added Successfully
          </h2>

          <p className="text-gray-500 text-center mb-6">
            Your new product has been added to the inventory and is now
            available.
          </p>

          <div className="flex items-center gap-4 rounded-2xl border border-gray-200 p-4 mb-6">
            <div className="h-20 w-20 rounded-xl bg-gray-100 flex items-center justify-center">
              <img
                src="https://png.pngtree.com/png-clipart/20240901/original/pngtree-sports-shoes-png-image_15910407.png"
                alt=""
                className="h-16 w-16 object-contain"
              />
            </div>

            <div>
              <h3 className="font-semibold text-lg">Nike Air Max</h3>
              <p className="text-sm text-gray-500">Category: Shoes</p>
              <p className="text-sm font-medium text-green-600">$120</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="w-full rounded-xl border border-gray-300 py-3 font-medium hover:bg-gray-100 transition">
              Add Another
            </button>

            <button className="w-full rounded-xl bg-blue-600 text-white py-3 font-medium hover:bg-blue-700 transition">
              View Products
            </button>
          </div>
        </div>
      </Modal> */}
      {/* <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="students" element={<Students />} />
          <Route path="admins" element={<Admins />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes> */}

      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />}>
            <Route path="students" element={<Students />} />
            <Route path="admins" element={<Admins />} />
          </Route>
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
