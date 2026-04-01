import { Link } from 'react-router-dom'

export default function Services() {
  const serviceItems = [
    {
      num: '01',
      title: 'Tile Fitting',
      desc: 'Our master installers specialize in large-format porcelain and ceramic installations. We ensure perfectly leveled surfaces, consistent grout lines, and zero hollow spaces using premium grade adhesives.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3qN55vNFw47KP1ZEDvJdYL5JmxSc_rWEmP_pK2yHWaJim6p6G8lhO9CFosYxY2ozm64K73Cie0nFihQJSjTb89s0UV-2UlD4hOWZHPF_in2ddwILgA3piDCTPmBFFXX7GVL6W15FJv4iDJ7eWwHxkOoJAvf4r3r8ZgFWbPlB2-zpHFoaDlV-A04AMN-U1qpiHQx7qkw_tOtgOGKmj5XOQj3EQHDTK5cNCGqALu1l_kD6qAtRdcuwh_O_4QcJMSuF6h0E2NgkaUC8',
      features: ['Large Format Porcelain Experts', 'Zero-Level Lippage Guarantee', 'Epoxy Grouting Specialists']
    },
    {
      num: '02',
      title: 'Marble & Granite Work',
      desc: 'From book-matched Italian marble flooring to monolithic granite countertops, we handle natural stones with the reverence they deserve. Our multi-stage polishing process brings out a mirror-like shine.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlhB9JtMU9xxnU3F5q_LHiBmcBsdx93GCsfYJURvmwWNXWTDnsF594IrmqC47SyNG1yWSYI8mGjei0MJ08irqB9h9tlwlGAKJSMLAW6r7ojZbg4U8hyuJv-VX9IZfNioEKOdrPWWKi2oxCCCRpRu40UNzAe7xy7UAxJilIs9simZxIRLaiMstKUp-iX37Ye7gj4r6onaTbhnkmbrSZg9SdOWrTrkMfWFvSuT3axuzzdt3R7939SoOapvtqL3eOeiZUynPanc2JZx0',
      features: ['Diamond Mirror Polishing', 'Stone Sealing & Protection', 'Edge Profiling (Bullnose/Chamfer)']
    },
    {
      num: '03',
      title: 'Bathroom & Kitchen Tiling',
      desc: 'Wet areas require technical precision. We integrate advanced waterproofing membranes with aesthetic tile layouts to create luxurious spaces that are built to last a lifetime without leaks.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMO5H94ShDRM6T6QsO4-F-waffvBqG-YUuUtHVsdwUeKlt1JQe54KIrrcMuSBltJHoYhwT8XEdvpc4Udq3wvG7VCE3w3DcabfQlgtT0T9kEVW9ncX9r_sfE3QC19CZLluLrTtBfNEDsUjRQYVsDLyInK2N66_4OM_gzbRDSHMGxV75YqyytTmP8eeo_bMnFbyZGTQ4QBIbx5op-1G05jhOYT1tlk5bt7ZysMhslytuyg5TlHZwE7aYjKX6HtlLOkuAN-1m2Amv82Q',
      features: ['3-Layer Waterproofing System', 'Hidden Drain Integration', 'Anti-Skid Surface Treatment']
    },
    {
      num: '04',
      title: 'Interior Tile Design',
      desc: "Don't just install tiles—create art. Our design consultancy helps you select patterns and colors that harmonize with your interior vision, including custom water-jet medallions.",
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCoMpJpnqExmqxwGgbwyUmgcrpXDIh7sAFsUePm8WZzNp5kTNIlEzyDRmpbXCigmBl39J7eMUbUGaJrATKLGLFzHq_GFGHEnX3vDupICQgetjhNlYgfYkHHQ2AypOiwK2BIscYjtrPrfXKGx-5cdiPqtTakWAUNkTQTUmPygYffoTOhFyqaMX6neW1gnr6qQoCL6RYcFc9PcFLqHixLjmDzPm35JlesCsA3PeXRn5wwZMr01-QYrYpgOygclm2JOofshy_Fetyyts',
      extra: (
        <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-8 font-headline w-full">
          <div className="bg-surface-container-low p-3 sm:p-4 rounded-xl flex flex-col gap-2 sm:gap-3 h-full border border-black/5">
            <span className="material-symbols-outlined text-brand-gold" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>architecture</span>
            <div>
              <h4 className="font-bold text-[11px] sm:text-sm text-brand-navy leading-tight mb-1">Bespoke Inlays</h4>
              <p className="text-[10px] sm:text-[11px] text-on-surface-variant font-body leading-snug">Custom CNC and water-jet cut patterns.</p>
            </div>
          </div>
          <div className="bg-surface-container-low p-3 sm:p-4 rounded-xl flex flex-col gap-2 sm:gap-3 h-full border border-black/5">
            <span className="material-symbols-outlined text-brand-gold" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>palette</span>
            <div>
              <h4 className="font-bold text-[11px] sm:text-sm text-brand-navy leading-tight mb-1">Color Expert</h4>
              <p className="text-[10px] sm:text-[11px] text-on-surface-variant font-body leading-snug">Professional palette matching services.</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <main className="bg-surface">
      {/* 1. Page Hero - FIXED to 819px height and exact text */}
      <section className="relative h-[819px] min-h-[600px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-VaHWWYf140jBQ_rUxbiTLdnGbz5xHAz7mLcOzaS_3waxPSpB596V6CMqtsAO5f9650iKibdyTiPI6dDqXan9XsBicx_11W7X4lFhy2wccUAqNmICUuJ7VANutzcacIx6WpIupmKWNodW96RqjSjZKwnfx7pPyMyh9bvb2GnN7c8wrM3o0mYXOAmfqo0JqlLIUdYp13lt1mp1T1zyxba2_Snv_g-Q2oSZESD4fHA4fLuI4aI3OA73dU7xzyZNnZzWRBrpRYJ_Uww" 
            alt="Services Hero"
          />
          <div className="absolute inset-0 bg-brand-navy/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full text-white">
          <div className="max-w-2xl">
            <span className="font-label font-medium uppercase tracking-[0.2em] text-sm text-brand-gold mb-4 block text-left">WHAT WE DO</span>
            <h1 className="font-headline font-extrabold text-5xl md:text-7xl leading-tight tracking-tighter mb-6 text-left">
              Expert Stone & <br/>Tile Services
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-body text-left">
              Precision installation for Pune's most prestigious residences. We transform raw materials into architectural masterpieces with artisanal care.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <Link to="/contact" className="bg-brand-gold text-white px-8 py-4 font-headline font-bold tracking-tight hover:brightness-110 transition-all rounded uppercase text-sm tracking-widest">
                Get Free Estimate
              </Link>
              <a href="tel:0000000000" className="border border-white text-white px-8 py-4 font-headline font-bold tracking-tight hover:bg-white hover:text-brand-navy transition-all rounded uppercase text-sm tracking-widest">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services List - Guaranteed Layout Stacking */}
      <section className="py-24 space-y-32 bg-surface">
        {serviceItems.map((service, i) => (
          <div key={i} className="max-w-7xl mx-auto px-4 md:px-8 xl:flex xl:items-start xl:gap-20 service-row">
            {/* Image on TOP on mobile, Side on Desktop */}
            <div className="w-full xl:w-1/2 mb-12 xl:mb-0">
              <div className="relative group">
                <div className="absolute -top-8 -left-4 md:-top-12 md:-left-6 text-8xl md:text-[12rem] font-headline font-extrabold text-brand-navy/5 select-none pointer-events-none">{service.num}</div>
                <div className="bg-surface-container-low p-2 shadow-2xl overflow-hidden">
                  <img 
                    className="w-full aspect-[16/10] xl:aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                    src={service.img} 
                    alt={service.title}
                  />
                </div>
              </div>
            </div>

            {/* Content BELOW image on mobile, Side on Desktop */}
            <div className="w-full xl:w-1/2">
              <h2 className="font-headline font-bold text-3xl md:text-6xl text-brand-navy mb-6 md:mb-10 tracking-tight uppercase leading-[0.9]">{service.title}</h2>
              <p className="text-on-surface-variant text-base md:text-xl leading-relaxed mb-10 md:mb-16 font-body w-full">{service.desc}</p>
              
              {service.features ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
                  {service.features.map(f => (
                    <li key={f} className="flex items-center gap-4 bg-white p-5 border border-black/5 shadow-sm">
                      <span className="material-symbols-outlined text-brand-gold shrink-0 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="font-label text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-brand-navy/80">{f}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="grid grid-cols-2 gap-3 md:gap-8 mt-4 font-headline w-full">
                  <div className="bg-white p-5 md:p-10 flex flex-col gap-6 shadow-sm border border-black/5 hover:shadow-xl transition-all h-full min-h-[200px]">
                    <div className="w-14 h-14 bg-brand-gold/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-brand-gold text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg md:text-2xl text-brand-navy leading-tight mb-3">Bespoke Inlays</h4>
                      <p className="text-xs md:text-base text-on-surface-variant font-body leading-relaxed">Custom CNC and water-jet cut patterns for unique, breathtaking flooring designs.</p>
                    </div>
                  </div>
                  <div className="bg-white p-5 md:p-10 flex flex-col gap-6 shadow-sm border border-black/5 hover:shadow-xl transition-all h-full min-h-[200px]">
                    <div className="w-14 h-14 bg-brand-gold/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-brand-gold text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg md:text-2xl text-brand-navy leading-tight mb-3">Color Expert</h4>
                      <p className="text-xs md:text-base text-on-surface-variant font-body leading-relaxed">Professional palette matching and color strategy tailored perfectly to your space.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* 3. Service Areas - FIXED font size and hover */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="font-label font-medium uppercase tracking-[0.2em] text-sm text-brand-gold mb-4 block">WHERE WE WORK</span>
          <h2 className="font-headline font-extrabold text-4xl text-brand-navy tracking-tight mb-16">Serving All of Pune & Nearby</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Baner', 'Wakad', 'Kothrud', 'Hinjewadi', 'Aundh', 'Balewadi', 'Kalyani Nagar', 'Viman Nagar', 'Hadapsar', 'Magarpatta', 'Pimpri', 'Lonavala'].map(area => (
              <div key={area} className="bg-brand-navy text-white py-4 px-6 text-center font-headline font-bold text-sm tracking-tight hover:bg-brand-gold transition-colors cursor-default shadow-md">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16 uppercase">
            <span className="font-label font-medium uppercase tracking-[0.2em] text-sm text-brand-gold mb-4 block">FAQ</span>
            <h2 className="font-headline font-extrabold text-4xl text-brand-navy tracking-tight">Common Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: 'How long does a typical marble floor installation take?', a: 'For a standard 1000 sq. ft. area, installation typically takes 10-15 working days including the multi-stage diamond polishing process.' },
              { q: 'Do you provide the raw materials or just labor?', a: 'We offer both \'Material + Labor\' packages and \'Labor Only\' services. We can help you source premium tiles and stone from our trusted network of suppliers.' },
              { q: 'Is waterproofing included in bathroom tiling?', a: 'Yes, we strictly mandate professional waterproofing for all wet zones. We use advanced liquid-applied membranes before any tile is laid.' },
              { q: 'What is the advantage of epoxy grouting?', a: 'Epoxy grout is stain-proof, chemical resistant, and waterproof. Unlike cement grout, it won\'t crack or discolor over time, making it ideal for kitchens and bathrooms.' },
              { q: 'Do you handle project demolition and debris removal?', a: 'Yes, for renovation projects, we handle the removal of old tiles and proper disposal of debris to ensure a clean site for the new installation.' },
              { q: 'Do you provide a warranty on your workmanship?', a: 'We provide a 5-year warranty on all our installation work, covering issues like lippage, hollow tiles, and waterproofing integrity.' }
            ].map((faq, i) => (
              <details key={i} className="group bg-surface-container-low transition-all duration-300" open={i === 0}>
                <summary className="flex justify-between items-center p-8 cursor-pointer list-none font-headline font-bold text-brand-navy text-lg uppercase tracking-tight">
                  {faq.q}
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-8 pb-8 text-on-surface-variant leading-relaxed text-lg font-body">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Strip - FIXED CTA labels and phone text */}
      <section className="bg-gradient-to-r from-brand-navy to-black py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-white mb-4 tracking-tight uppercase">Ready to start your masterpiece?</h2>
            <p className="text-stone-400 text-lg">Contact Pune's most trusted tile and stone contractors today.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="bg-brand-gold text-white px-10 py-4 font-headline font-bold tracking-tight hover:brightness-110 transition-all rounded shadow-lg uppercase text-sm">
              Get Free Estimate
            </Link>
            <a href="tel:0000000000" className="border border-white/30 text-white px-10 py-4 font-headline font-bold tracking-tight hover:bg-white hover:text-brand-navy transition-all rounded uppercase text-sm text-center">
              Call: 0000000000
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
