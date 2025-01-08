import React, { useState } from 'react';
import { Gamepad2, Trophy, Target, Flame, Github, Instagram, Menu, X } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'gallery':
        return <GalleryPage />;
      case 'achievements':
        return <AchievementsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#1a1c2e] to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black bg-opacity-90 px-4 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src='photo.png' className="w-8 h-8 text-orange-500" />
            <span className="text-xl font-bold text-orange-500">SHANKAR</span>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink active={currentPage === 'home'} onClick={() => setCurrentPage('home')}>Home</NavLink>
            <NavLink active={currentPage === 'gallery'} onClick={() => setCurrentPage('gallery')}>Gallery</NavLink>
            <NavLink active={currentPage === 'achievements'} onClick={() => setCurrentPage('achievements')}>Achievements</NavLink>
            <NavLink active={currentPage === 'contact'} onClick={() => setCurrentPage('contact')}>Contact</NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 border-t border-gray-800">
            <div className="flex flex-col p-4 space-y-4">
              <NavLink active={currentPage === 'home'} onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}>Home</NavLink>
              <NavLink active={currentPage === 'gallery'} onClick={() => { setCurrentPage('gallery'); setIsMenuOpen(false); }}>Gallery</NavLink>
              <NavLink active={currentPage === 'achievements'} onClick={() => { setCurrentPage('achievements'); setIsMenuOpen(false); }}>Achievements</NavLink>
              <NavLink active={currentPage === 'contact'} onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }}>Contact</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {renderPage()}
      </div>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/jaiswal_shankar5410/" className="text-gray-400 hover:text-orange-500 transition duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <p className="text-center text-gray-500 mt-4">
            © 2024 Shankar Chaudhary. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const NavLink = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`${
      active ? 'text-orange-500' : 'text-gray-300'
    } hover:text-orange-500 transition duration-300`}
  >
    {children}
  </button>
);

const HomePage = () => (
  <div>
    {/* Hero Section */}
    <div 
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <img src='photo.png' className="w-40 h-30 text-orange-500 mb-6 animate-pulse" />
        <h1 className="text-5xl md:text-7xl font-bold text-orange-500 mb-4 text-center">
          SHANKAR CHAUDHARY
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center">
          Free Fire Enthusiast | Class 10 Student
        </p>
      </div>
    </div>

    {/* About Section */}
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-500">
          ABOUT ME
        </h2>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-300 text-lg leading-relaxed">
            Hey there! I'm Shankar, a passionate Free Fire player and Class 10 student. 
            When I'm not studying, you'll find me grinding ranked matches or practicing 
            my headshots. I've been playing Free Fire since 2020 and have achieved 
            multiple milestones in local tournaments.
          </p>
        </div>

        {/* Game Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-orange-500">250+</h3>
            <p className="text-gray-400">Booyahs</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-orange-500">Diamond I</h3>
            <p className="text-gray-400">Current Rank</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-orange-500">3.5</h3>
            <p className="text-gray-400">K/D Ratio</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-orange-500">45%</h3>
            <p className="text-gray-400">Headshot Rate</p>
          </div>
        </div>

        {/* Favorite Loadout */}
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">
          FAVORITE LOADOUT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center text-orange-500">Primary Weapon</h3>
            <div className="space-y-2 text-center">
              <p className="text-white font-bold">M14</p>
              <p className="text-gray-400">Attachments:</p>
              <ul className="text-gray-300">
              <li>Silencer</li>
              <li>Extended Magazine</li>
                <li>With 4x scope</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center text-orange-500">Secondary Weapon</h3>
            <div className="space-y-2 text-center">
              <p className="text-white font-bold">MP40</p>
              <p className="text-gray-400">Attachments:</p>
              <ul className="text-gray-300">
              <li>Red Dot</li>
              <li>Foregrip</li>
                <li>Mini Wings</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center text-orange-500">Character Setup</h3>
            <div className="space-y-2 text-center">
              <p className="text-white font-bold">Alok</p>
              <p className="text-gray-400">Skills:</p>
              <ul className="text-gray-300">
                <li>Drop the Beat</li>
                <li>Sustained Raids</li>
                <li>Master of All</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Gaming Setup */}
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">
          GAMING SETUP
        </h2>
        <div className="bg-gray-800 p-8 rounded-lg max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">Device</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Redmi note 10s</li>
                <li>• 64GB Storage</li>
                <li>• 60FPS Enabled</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">Accessories</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Gaming Triggers</li>
                <li>• Gaming Earbuds</li>
                <li>• Phone Cooling Fan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const GalleryPage = () => (
  <div className="container mx-auto px-4 py-20">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-500">
      GAMING GALLERY
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        
      ].map((url, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg">
          <img 
            src={url} 
            alt={`Gaming moment ${index + 1}`}
            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <p className="text-white text-lg font-bold">Gaming Moment {index + 1}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AchievementsPage = () => (
  <div className="container mx-auto px-4 py-20">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-500">
      GAMING ACHIEVEMENTS
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gray-800 p-6 rounded-lg text-center hover:transform hover:scale-105 transition duration-300">
        <Trophy className="w-12 h-12 text-orange-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Tournament Wins</h3>
        <p className="text-gray-400">15+ Local Tournaments</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg text-center hover:transform hover:scale-105 transition duration-300">
        <Target className="w-12 h-12 text-orange-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Headshot Rate</h3>
        <p className="text-gray-400">45% Accuracy</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg text-center hover:transform hover:scale-105 transition duration-300">
        <Gamepad2 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Hours Played</h3>
        <p className="text-gray-400">2000+ Hours</p>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="container mx-auto px-4 py-20">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-500">
      CONTACT ME
    </h2>
    <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg">
      <form className="space-y-6">
        <div>
          <label className="block text-gray-300 mb-2">Name</label>
          <input 
            type="text" 
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea 
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 h-32"
          ></textarea>
        </div>
        <button 
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export default App;