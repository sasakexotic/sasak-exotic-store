import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Artisans from './pages/Artisans';
import Heritage from './pages/Heritage';
import Category from './pages/Category';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="artisans" element={<Artisans />} />
          <Route path="heritage" element={<Heritage />} />
          <Route path="category/:slug" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
