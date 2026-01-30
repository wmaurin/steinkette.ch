import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallerie from './pages/Gallerie';
import Kontakt from './pages/Kontakt';

function NotFound() {
  return (
    <section className="text-center max-w-3xl mx-auto">
      <h1>404</h1>
      <p>Page not found</p>
    </section>
  );
}

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto p-6">
        <Navbar />
        <div className="mt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallerie" element={<Gallerie />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <footer className="py-8 text-center">
        © Alle Rechte vorbehalten
      </footer>
    </>
  );
}

export default App;
