
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from './HomePage';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default Index;
