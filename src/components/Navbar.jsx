import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-surface-container-high/50 h-16 md:h-20 flex items-center shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 w-full">
          {/* Branding */}
          <Link 
            to="/" 
            className="text-lg md:text-[22px] font-bold font-headline text-brand-navy tracking-tight whitespace-nowrap"
            onClick={() => setIsMenuOpen(false)}
          >
            Abhishek Enterprise
          </Link>
          
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center p-2 text-brand-navy hover:bg-surface-container-low rounded-md transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`material-symbols-outlined text-2xl transition-transform duration-500 ease-in-out ${isMenuOpen ? 'rotate-180' : ''}`}>
            menu
          </span>
        </button>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <div key={link.name} className="relative group">
                  <Link 
                    to={link.path}
                    className={`${
                      isActive 
                      ? 'text-brand-gold' 
                      : 'text-brand-navy/60 hover:text-brand-navy transition-colors'
                    } font-headline font-bold text-[13px] uppercase tracking-[0.15em] py-2`}
                  >
                    {link.name}
                  </Link>
                  {/* Active Underline */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-gold"></div>
                  )}
                  {/* Hover Underline effect (optional, matching image behavior) */}
                  <div className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-navy group-hover:w-full transition-all duration-300 ${isActive ? 'hidden' : ''}`}></div>
                </div>
              )
            })}
          </div>
          
          {/* Action Button - Hidden on mobile, added to mobile menu */}
          <Link 
            to="/contact" 
            className="hidden md:flex bg-brand-gold text-white px-8 py-3.5 rounded-md font-headline font-bold text-[12px] uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_15px_rgba(201,168,76,0.25)]"
          >
            Get Free Estimate
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Backdrop Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-[60] bg-[#0B1437]/60 backdrop-blur-md transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu Drawer - High Fidelity Restoration */}
      <div 
        className={`md:hidden fixed inset-0 z-[999999] bg-white transition-all duration-500 ease-in-out overflow-y-auto ${isMenuOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible pointer-events-none'}`}
      >
        {/* Solid Opaque Backplate */}
        <div className="absolute inset-0 bg-white" style={{ backgroundColor: '#ffffff', opacity: 1, zIndex: -1 }}></div>

        <div className="flex flex-col min-h-full p-8 pt-10 bg-white">
          {/* Header Block */}
          <div className="flex justify-between items-start mb-12 bg-white" style={{ backgroundColor: '#ffffff' }}>
            <div>
              <h2 className="text-[26px] font-extrabold font-headline text-[#0B1437] leading-tight mb-1">
                Abhishek Enterprise
              </h2>
              <span className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] block">
                ARCHITECTURAL EXCELLENCE
              </span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="bg-black/5 p-2 rounded-lg text-[#0B1437]"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Nav List - divide-y matches the screenshot */}
          <div className="flex flex-col flex-1 divide-y divide-black/[0.05] bg-white" style={{ backgroundColor: '#ffffff' }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link 
                  key={link.name}
                  to={link.path}
                  className="flex justify-between items-center py-6 group bg-white"
                  style={{ backgroundColor: '#ffffff' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className={`text-[32px] font-extrabold font-headline leading-none transition-colors ${isActive ? 'text-[#0B1437]' : 'text-black/40'}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <span className="material-symbols-outlined text-xl text-[#0B1437] transition-all">
                      chevron_right
                    </span>
                  )}
                </Link>
              )
            })}
          </div>

          {/* Bottom Controls */}
          <div className="mt-8 bg-white" style={{ backgroundColor: '#ffffff' }}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <a 
                href="tel:0000000000" 
                className="flex items-center justify-center gap-3 bg-white py-5 rounded-lg border border-black/[0.05] text-[#0B1437] font-headline font-bold text-[11px] uppercase tracking-widest shadow-sm hover:brightness-95 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-lg">call</span>
                CALL US
              </a>
              <a 
                href="https://wa.me/0000000000" 
                className="flex items-center justify-center gap-3 bg-white py-5 rounded-lg border border-black/[0.05] text-[#0B1437] font-headline font-bold text-[11px] uppercase tracking-widest shadow-sm hover:brightness-95 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-lg text-[#25D366]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                WHATSAPP
              </a>
            </div>
            <Link 
              to="/contact" 
              className="w-full bg-[#0B1437] text-white py-5 rounded-lg font-headline font-extrabold text-center uppercase tracking-widest text-[13px] shadow-xl hover:brightness-110 active:scale-95 transition-all block"
              onClick={() => setIsMenuOpen(false)}
            >
              GET ESTIMATE
            </Link>

            {/* Sub-footer inside menu */}
            <div className="flex flex-col items-center gap-6 mt-12 pb-4 bg-white" style={{ backgroundColor: '#ffffff' }}>
              <div className="flex items-center gap-8 text-black/40">
                <span className="material-symbols-outlined text-xl hover:text-[#C9A84C] transition-colors cursor-pointer">share</span>
                <span className="material-symbols-outlined text-xl hover:text-[#C9A84C] transition-colors cursor-pointer">location_on</span>
                <span className="material-symbols-outlined text-xl hover:text-[#C9A84C] transition-colors cursor-pointer" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
              </div>
              <p className="text-[10px] text-black/25 font-bold uppercase tracking-[0.1em] text-center">
                ©2024 ABHISHEK ENTERPRISE. PRECISION IN EVERY SLAB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
