import React from 'react';
import { AppProvider } from './context/AppProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
};

export default App;