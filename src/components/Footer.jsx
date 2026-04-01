import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#A1A1A1] pt-24 pb-12 font-body">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        
        {/* Column 1: Branding */}
        <div className="space-y-8">
          <Link to="/" className="text-[22px] font-bold font-headline text-brand-gold uppercase tracking-tight block">
            Abhishek Enterprise
          </Link>
          <p className="text-[13px] leading-relaxed max-w-[320px] font-medium text-white/40">
            Mastering the art of masonry and precision tiling in Pune for over 15 years. Quality that lasts generations.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-lg">camera</span>
            </a>
          </div>
        </div>
        
        {/* Column 2: Services */}
        <div>
          <h4 className="text-brand-gold font-headline font-bold mb-10 text-[13px] uppercase tracking-[0.2em]">Services</h4>
          <ul className="space-y-5 text-[13px] font-bold uppercase tracking-widest">
            <li><Link to="/services" className="hover:text-brand-gold transition-colors block">Vitrified Tiling</Link></li>
            <li><Link to="/services" className="hover:text-brand-gold transition-colors block">Marble Polishing</Link></li>
            <li><Link to="/services" className="hover:text-brand-gold transition-colors block">Granite Platforms</Link></li>
            <li><Link to="/services" className="hover:text-brand-gold transition-colors block">Stone Cladding</Link></li>
          </ul>
        </div>
        
        {/* Column 3: Quick Links */}
        <div>
          <h4 className="text-brand-gold font-headline font-bold mb-10 text-[13px] uppercase tracking-[0.2em]">Quick Links</h4>
          <ul className="space-y-5 text-[13px] font-bold uppercase tracking-widest">
            <li><Link to="/services" className="hover:text-brand-gold transition-colors block">About Our Craft</Link></li>
            <li><Link to="/projects" className="hover:text-brand-gold transition-colors block">Recent Projects</Link></li>
            <li><Link to="/contact" className="hover:text-brand-gold transition-colors block">Cost Estimator</Link></li>
            <li><Link to="/contact" className="hover:text-brand-gold transition-colors block">Careers</Link></li>
          </ul>
        </div>
        
        {/* Column 4: Contact */}
        <div>
          <h4 className="text-brand-gold font-headline font-bold mb-10 text-[13px] uppercase tracking-[0.2em]">Contact</h4>
          <div className="space-y-6 text-[13px] font-bold text-white/60">
            <p className="flex items-center gap-4">
              <span className="material-symbols-outlined text-brand-gold text-lg">call</span>
              +91 98765 43210
            </p>
            <p className="flex items-center gap-4">
              <span className="material-symbols-outlined text-brand-gold text-lg">mail</span>
              contact@abhishekenterprise.in
            </p>
            <p className="flex items-center gap-4">
              <span className="material-symbols-outlined text-brand-gold text-lg">schedule</span>
              Mon - Sat: 9AM - 7PM
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto px-8 mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/30 uppercase tracking-[0.25em] font-bold">
        <p>© 2024 ABHISHEK ENTERPRISE. MASTER MASONRY & PRECISION TILING.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}
