import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import { Home } from './components/Home/Home'
import Sidebar from './components/Sidebar/Sidebar';
import { About } from './components/About';
import { Dashboard } from './components/Dashboard';
import { Blogs } from './components/Blogs';
import { Analytics } from './components/Analytics';
import { ProductList } from './components/ProductList';
import { Product } from './components/Product'
import SampleRegister from './components/SampleRegister';
import { SidebarLayout } from './components/SidebarLayout/SidebarLayout';
import Registeration from './components/Registeration';
const App = () => {
  function NoMatch() {
    return (
      <div style={{ padding: 20 }}>
        <h2>404: Page Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <ToastContainer theme='colored'></ToastContainer>
      {/*  <Sidebar> */}
      <Routes>
        {/* <Route element={<SidebarLayout />}> */}
        <Route path="/productList" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
        {/*  </Route> */}

        <Route path="/" element={<Login />} />
        {/*  <Route path="/register" element={<SampleRegister />} />
 */}        <Route path="/register" element={<Registeration />} />
      </Routes>
      {/* </Sidebar> */}
    </>
  )
}

export default App;