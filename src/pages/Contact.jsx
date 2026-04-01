import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <main className="bg-surface selection:bg-brand-gold selection:text-white">
      {/* 1. Page Hero */}
      <section className="relative h-[480px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 text-white">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuARKHwm_JEpUabNqrau86nwQkEG18iRX6wr0KcDorFUc8MJMKwA2GNmchlJi62L5_U4dzaI1NV9Feoi_49n_wEk6fRmA6cDjEus14S6qoVCWCHqAWO6gOv9ew8KtLZOILjJsfZmPwTlrjUKdAQcAS3dUHHdNYwEXk_MRXPqUFAKiwS_mT4-hMqXLOooy-ZNXYJFTeSGv0TPcIN4cpklU7euuhXYIG7As_qTHVzu8z_G-EZ_8bX9ZlEh25eLODjNtt6S8XjQy6v6ZsE" 
            alt="Contact Hero"
          />
          <div className="absolute inset-0 bg-brand-navy/65 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-white">
          <div className="max-w-2xl">
            <span className="font-headline font-bold uppercase tracking-[0.3em] text-xs text-brand-gold mb-6 block">CONNECT</span>
            <h1 className="font-headline font-extrabold text-5xl md:text-8xl leading-[1.05] tracking-tighter mb-8">
              Start Your <br/>Masterpiece
            </h1>
            <p className="text-white/80 text-xl font-body max-w-lg leading-relaxed">
              Our site assessment team is available across Pune for professional measurements and stone consulting.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Form & Info */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Form Column */}
            <div className="w-full lg:w-3/5 bg-surface-container-low p-12 md:p-16 rounded-md shadow-2xl border border-surface-container-high/30 relative overflow-hidden">
              <div className="absolute top-0 right-10 w-24 h-1 bg-brand-gold"></div>
              <h2 className="font-headline font-extrabold text-3xl text-brand-navy mb-4 tracking-tight uppercase">Request Free Site Visit</h2>
              <p className="text-on-surface-variant mb-12 font-body max-w-md">Complete the form below and our lead surveyor will contact you within 24 hours.</p>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block font-label font-bold text-[10px] uppercase tracking-[0.25em] text-brand-gold">Full Name</label>
                    <input className="w-full bg-white border border-surface-container-high/50 p-4 rounded-sm font-body outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all" placeholder="Enter name" type="text" />
                  </div>
                  <div className="space-y-3">
                    <label className="block font-label font-bold text-[10px] uppercase tracking-[0.25em] text-brand-gold">Phone Number</label>
                    <input className="w-full bg-white border border-surface-container-high/50 p-4 rounded-sm font-body outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all" placeholder="+91" type="tel" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="block font-label font-bold text-[10px] uppercase tracking-[0.25em] text-brand-gold">Project Location</label>
                  <input className="w-full bg-white border border-surface-container-high/50 p-4 rounded-sm font-body outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all" placeholder="e.g. Baner, Pune" type="text" />
                </div>
                <div className="space-y-3">
                  <label className="block font-label font-bold text-[10px] uppercase tracking-[0.25em] text-brand-gold">Service Required</label>
                  <select className="w-full bg-white border border-surface-container-high/50 p-4 rounded-sm font-body outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all appearance-none">
                    <option>Vitrified Tiling</option>
                    <option>Marble Polishing</option>
                    <option>Granite Kitchen Platforms</option>
                    <option>Full Home Remodel</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="block font-label font-bold text-[10px] uppercase tracking-[0.25em] text-brand-gold">Project Brief</label>
                  <textarea className="w-full bg-white border border-surface-container-high/50 p-4 rounded-sm font-body outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all resize-none" placeholder="Describe your requirement..." rows="4"></textarea>
                </div>
                <button className="w-full bg-brand-gold text-white font-headline font-bold text-sm uppercase tracking-widest py-5 rounded-md hover:brightness-110 transition-all shadow-xl">
                  Send Site Visit Request
                </button>
              </form>
            </div>

            {/* Info Column */}
            <div className="w-full lg:w-2/5 space-y-12">
              <div className="space-y-4">
                <span className="font-headline font-bold text-brand-gold uppercase text-xs tracking-widest">OFFICE HEADQUARTERS</span>
                <h3 className="font-headline font-extrabold text-3xl text-brand-navy tracking-tight">Visit Our Showroom</h3>
                <p className="text-on-surface-variant font-body leading-relaxed">View our premium material library and sample book in person. We are located in the heart of Pune's construction hub.</p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-brand-navy p-4 rounded-sm rotate-3 shadow-lg">
                    <span className="material-symbols-outlined text-white text-2xl">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-brand-navy uppercase tracking-widest text-sm mb-1 text-on-surface">Registered Office</h4>
                    <p className="text-on-surface-variant font-body text-sm leading-relaxed max-w-[240px]">Katraj-Kondhwa Road, Near Market Yard, Pune, MH 411037</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-brand-gold p-4 rounded-sm -rotate-3 shadow-lg">
                    <span className="material-symbols-outlined text-white text-2xl">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-brand-navy uppercase tracking-widest text-sm mb-1 text-on-surface">Business Hours</h4>
                    <p className="text-on-surface-variant font-body text-sm">Mon - Sat: 09:00 AM - 07:00 PM</p>
                    <p className="text-on-surface-variant font-body text-sm">Sunday: By Appointment Only</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-brand-navy/10 p-4 rounded-sm rotate-6 shadow-md border border-brand-navy/10">
                    <span className="material-symbols-outlined text-brand-navy text-2xl">contact_support</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-brand-navy uppercase tracking-widest text-sm mb-1 text-on-surface">Direct Lines</h4>
                    <p className="text-brand-gold font-headline font-bold text-lg">+91 98765 43210</p>
                    <p className="text-on-surface-variant font-body text-sm">contact@abhishekenterprise.in</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-surface-container-high/50">
                <h4 className="font-headline font-bold text-brand-navy uppercase text-xs tracking-widest mb-6">Social Portfolios</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-white border border-surface-container-high flex items-center justify-center rounded-sm hover:bg-brand-gold hover:text-white transition-all shadow-sm">
                    <span className="material-symbols-outlined text-lg">public</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-white border border-surface-container-high flex items-center justify-center rounded-sm hover:bg-brand-gold hover:text-white transition-all shadow-sm">
                    <span className="material-symbols-outlined text-lg">camera</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Integrated Map Section */}
      <section className="h-[500px] relative w-full bg-surface-container-high">
        <div className="absolute inset-0 grayscale contrast-125 opacity-70">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9-FCir5P2qTbh4JszCIwHxY2A24p77ow_m7ARyKrnUlL4G61gspztwXkoYJV-x7JJvxnvXaA-RQhehKPXQYoPRufH9HAmPls_h-F4Oa8EDi2qL8enw1D1YIdpxziaoNjkTqFM80-noAiwGYYKnudv2OAxsc-Q3pcqg_PQWx27TwOjkRedPEVONOxMgEdy0ZZw7TQzlQ8NC1KEuMN7UTxKaB3Uh-JQkzswsFgACespF3CFe6w_JpnieTeuMMx27Kaaod6GxtpH3Co" alt="Pune Office Map" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-brand-gold p-6 rounded-full shadow-[0_0_50px_rgba(201,168,76,0.6)] animate-pulse border-4 border-white">
            <span className="material-symbols-outlined text-white text-3xl">location_on</span>
          </div>
        </div>
        <div className="absolute bottom-10 left-10 bg-brand-navy text-white px-8 py-5 rounded-sm shadow-2xl border-l-4 border-brand-gold max-w-sm hidden md:block">
          <p className="font-headline font-bold text-sm tracking-widest uppercase mb-1">Pune Headquarters</p>
          <p className="text-white/60 text-xs font-body">Katraj-Kondhwa Road, Market Yard, Pune, MH 411037</p>
        </div>
      </section>
    </main>
  )
}
