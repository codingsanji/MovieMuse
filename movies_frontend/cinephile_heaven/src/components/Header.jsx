import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">MovieApp</Link>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/popular" className="hover:text-gray-400">Popular</Link>
          <Link to="/trending" className="hover:text-gray-400">Trending</Link>
          <Link to="/new" className="hover:text-gray-400">New</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
