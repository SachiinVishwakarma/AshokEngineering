import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Products from './components/Products';
import Rates from './components/Rates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
        <main>
          <Home />
          <Services />
          <Products />
          <Rates />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;