import React, { useState, useEffect } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { useSelector } from "react-redux";

const Header = () => {
  const theme = useSelector((store) => store.theme.theme);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["skills", "experience", "projects", "mini-projects", "education", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.mobile-menu')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#mini-projects", label: "Vanilla JS" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const headerClass = scrolled
    ? theme === "dark"
      ? "bg-gray-900/80 backdrop-blur-md shadow-lg shadow-gray-900/50 border-b border-gray-800"
      : "bg-white/80 backdrop-blur-md shadow-lg shadow-gray-200/50 border-b border-gray-200"
    : "bg-transparent";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-row items-center h-16 md:h-20">
          <a href="#skills" className="group" onClick={handleNavClick}>
            <div className="text-xl md:text-3xl font-display font-bold gradient-text">
              &lt;Amritesh Verma /&gt;
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="lg:flex flex-row gap-2 ml-auto hidden">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? theme === "dark"
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50"
                        : "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                      : theme === "dark"
                      ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          
          <div className="flex items-center gap-4 sm:ml-4 ml-auto lg:ml-6">
            <ThemeSwitch />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                theme === "dark" 
                  ? "text-gray-300 hover:bg-gray-800" 
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div
          className={`lg:hidden mobile-menu transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className={`py-4 space-y-2 ${
            theme === "dark" ? "bg-gray-900/95" : "bg-white/95"
          } rounded-lg mt-2 backdrop-blur-md`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActive
                      ? theme === "dark"
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50"
                        : "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                      : theme === "dark"
                      ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
