import { Link } from 'react-router-dom'

export default function MobileNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] pointer-events-none">
      <div className="bg-white flex overflow-hidden border-t border-black/10 pointer-events-auto w-full pb-[env(safe-area-inset-bottom,12px)] shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        {/* Contact Wing - Navy */}
        <div className="flex-[5] flex bg-[#0B1437]">
          {/* Call */}
          <a 
            href="tel:+919876543210" 
            className="flex-1 py-4 flex flex-col items-center justify-center gap-1.5 text-white/90 hover:bg-white/5 active:bg-white/10 transition-all border-r border-white/5"
          >
            <span className="material-symbols-outlined text-[22px]">call</span>
            <span className="text-[10px] font-headline font-black uppercase tracking-[0.18em] leading-none">Call</span>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/919876543210" 
            className="flex-1 py-4 flex flex-col items-center justify-center gap-1.5 text-[#25D366] hover:bg-white/5 active:bg-white/10 transition-all"
          >
            <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            <span className="text-[10px] font-headline font-black uppercase tracking-[0.18em] leading-none">WhatsApp</span>
          </a>
        </div>

        {/* Primary Wing - Gold */}
        <Link 
          to="/contact" 
          className="flex-[6] bg-[#C9A84C] flex flex-col items-center justify-center gap-1.5 font-headline font-black transition-all hover:brightness-110 active:scale-[0.98]"
        >
          <div className="flex items-center gap-2.5 text-[#0B1437]">
            <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>calculate</span>
            <span className="text-[12px] uppercase tracking-[0.15em] leading-none font-black text-[#0B1437]">Get Estimate</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
