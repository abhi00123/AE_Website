import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSticky } from '../hooks/useSticky'

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All')
  const { ref, isSticky } = useSticky(window.innerWidth >= 768 ? 80 : 64) 

  const categories = ['All', 'Floor Work', 'Wall Tiling', 'Marble & Granite', 'Bathroom', 'Commercial']
  
  const galleryItems = [
    { id: 1, title: 'Precision Cutting', location: 'Hinjewadi', category: 'Marble & Granite', aspect: 'aspect-[4/5]', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHrdasip0leUA-3IISHc2xnqvWP7eYTnwtzpwTDCd1K15YXbB7yhWUGB0cJKFqIrIfYDTzlsuRPgusu9Y6e4fh1CuPEgnXkZdIHbKYd3ri14xMJpSvo85w5d7yVXmja01RXmzBokxE_jStVE6kcpllZko1lS805y9G7G2MTCg5ygQu45cxVsJxs0CSYBWPH00Ib86n618Xvyk9xznGzYktl03XooXghTcqRDcqYEKp-FhZHukQEKTDzEP9kKdmfzOMX_3fUT6kTac' },
    { id: 2, title: 'Mall Flooring', location: 'Wakad', category: 'Commercial', aspect: 'aspect-square', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPvVBchwDIvp6FZi1i2fhFqO635Sar4ET-Qukh3vIurtundPZ5-DWc-8ijqKmHNb6UZPJ7SiIYJ5KCNF2F277zzSk_5Ib1bBVMDUfRxRBovBZxnOvdVYPpGuL_zhylfYrKNOKz5Zeq0HHMmnN2NTLC4qhhUi7G887g9WjsDTrGfeRzKOG3XXNwuQfFHry9X7kv-wi1oBYlfFhc8TjnLMemWOHsRfioVxR1_tcC2cjVO0qaQ8inyDQAVsdlJ1HprpUU6zDH43DeRho' },
    { id: 3, title: 'Zero-Gap Alignment', location: 'Baner', category: 'Floor Work', aspect: 'aspect-[3/4]', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwaMayb_Nu19jyxHLLT97O7Li8GPzG_Ouxmn5mnTY0i0xo4YPMFGQpp9-1EQrS5bKYbgWbngIiXt08AqTBsPT8rtja_YAIJLDJJmzRmyQQuY_4KDGtETL9YvDJqzu8sCTSSvUTd-QszRcbpbXLgHSWGV1IxKFw6CC__5qcP7VKoF7BFIq5uN6-8x32nsY5LDtF0p1KkgydLho9ur43uKPGmIqpVMMgyYBV79AWOlOpiKbrYw9gyc_ONmMnY-GPj_dblQl_wN2cTug' },
    { id: 4, title: 'Waterproofing', location: 'Koregaon Park', category: 'Bathroom', aspect: 'aspect-video', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALKrmJ_CRw5YuOmKTCg8THq7VdQr37sW9wvc96aHe29XQbxuNOgfJgg1e3udjbwrogyHM_RqJFRiMnHvQgxC9xJkmCJqZB_scti7dAdZpSaYfu85sVpT8FcRh2Qtux1ylEHSnVgyImoSyvuHP-3GcPW01Gi2wNdzFaeWnTkvbTVXLZvkdkwbifmjRAyAZPPFbcwTfThzU9jwlYqkOXnqipHp3m1eASH2nBNkqpSazE3Ccml1WsX9L_iSxfO_BXk8Ht2NHZdGveSBo' },
    { id: 5, title: 'Hall Flooring', location: 'FC Road', category: 'Floor Work', aspect: 'aspect-square', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAsouVJUnGO5kos5nxBJx-vEU9K94OtmNZqLGonyl5JzBySfhphdss1_JV283KQ4mMw_ciCneNT__Ft9FKaiH5Q9nHP3ZzJdRnJF2h8O917rfg4Ji5LBhZsHtGPUg0hj5YPKIMHjzCThjcQgIcxSjA4UKQomtKYpapFZ7KXrjUQjMhFo8CywwZI7JD1RwmN9GnAfC1_NsKTXD_YMK6gqKHoWOiCn6OR-fIX52Lsln7fjygHNlHZvSZ8JRO-gYWaZCISOtsu1ydXcs' },
    { id: 6, title: 'Marble Polish', location: 'Viman Nagar', category: 'Marble & Granite', aspect: 'aspect-[4/5]', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsm5yfWejnB5vWjz84bSSMWOSwCG4iQtwoSgX-ilwhHsoke6eqWUQBFgV4hfzilRUM9GWORSJhxBARgo4NVKM6h1bmt9Va0ZF5NWljrMmDmTpicYxO-IPTtiNlCIdp0Oex6DE06SAQ0isDeI0Bxbk0PmqapS1LortGQgh4b52C6L_qW3H69s3fmzBaura9vpGTRhzH_OA-JynjmhttG6X7ZbvEToXTc-g2uMD8anByvWWgQWDeJUKpCfRNGStjsWAorcHSfPMTDow' },
    { id: 7, title: 'Transformation', location: 'Kharadi', category: 'Commercial', aspect: 'aspect-video', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2XhMSHZJ4UgytKByaBAyqT43lq3mTuCArtRABUGrDgU1JlRZONqHLLR1FrBlqZTwegw-jsJ9-Ft0U-gBNFmkcw4K2OAkn13k9nilGqGLcVswkVhtVCpwLIjrRM_AFqyKPmZcr6v7dyrQRz_uFB2IbIGSZtjH6QE8RORFeThQ-tbt6tKLlTTip8NcjcFCfyJGqZiFTXwq72Jl0HW5IVbz7GlzeTCky2dN6KMgVJ_GXt59sSRBDtUvqwFcOLQeXVZf1dxi9ZNQjfBA' },
    { id: 8, title: 'Site Day 1', location: 'Hadapsar', category: 'Commercial', aspect: 'aspect-[3/4]', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDV2tJoaU1MgL6B6LeQ4Q6lRpbhDwWInhQoxprZnd9Sj4W83ZllP1k1Qd--7Kva8-y5y2rXUXOzG01laW9UDssBKRxah9JBpuOdtVGsvA_TYSpG-oM8ekwzJr3TrnqcV6WNrmC5GIFzVwZ6lbZQvgd1wTNUQx6peuQ9WJ15t-lC2a9KUa1gmSdvkdd4VhemlisVz-MNEbmGlg537KFYPIaOoTjenFrA-48ZV0urbrJDJicQZxW0XSA8tTsjNx1fVvsjIGRLreKA0r0' },
    { id: 9, title: 'Epoxy Grouting', location: 'Kothrud', category: 'Wall Tiling', aspect: 'aspect-video', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxD8Kf20tf-vwr4POdpzdWFR0YGc-XDSvGgJ5QcwO8zRpgl7Gdk-aImGAa8rGzzCIoKOa3vGcPEvCeMOABJ0Y7gOmorhuaihBQfASWjTE_oNfji-EKC-WYbeA3UokGzzEsCy9-mCoduFTvcvVCUz3GgxH0vDhWavqlqBRZ8tRFRApNNxkJjRbT_DU78tqdZUSM4GxcZyaAcReR9or2qZ2btOPn7DkaDzy4fvA336HdbgCO1RO96rw6JP65HyHBu_s7Nwgi6W6k0qo' },
    { id: 10, title: 'Final Inspection', location: 'Baner', category: 'Commercial', aspect: 'aspect-[3/4]', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc6Ui3pAlSRfrwN78QI4YO8Ppm-n2kQuuylK8JVLMTAiyavyPZ5jIlsF7YVmn8l7gwdQteGmTtnzWg-xYg_VP2HSNBWlMIgAaT6-iF7N57ozuRL_q9ieooZED1CXzuro7ck6L5nTCKAParLKoLcSD8endfpL-f11_7DBdq7AozlMck2RPO7j7WN6C85oB5xpir64RiRDML93etnfHlmX8EN0vagm3-FyYYPcxLLjUDYMVF08Ps0OLrYYblS7PxDg4Odptu38cuq9k' },
    { id: 11, title: 'Terrace Tiling', location: 'Undri', category: 'Floor Work', aspect: 'aspect-square', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPuvMnWTaljrUjaWbtNuF4mVD2w6lh8vKg1OXpVm_nrzyEdBf_-1Uk8aA1UIrgT_xkALaL3mvXdQ0SNaOI6gndLvtM9nV56G5g-kIXU-_Lz5bZdtApPh2F-ZaxyZQGiFZDP1kgSfULuFGhmWjQ07lvrRM0rAq6kZW0PfYMrQN9xpacKWeZD_lT-4K66q3waa2sQPIyVYat596e8sWVIvu_xxGkh4WTqdgtr0DJbE4T0Cyx1GFYgZ3uIcTftCGm040Dxs_MjP2fX_Y' },
    { id: 12, title: 'Granite Counter', location: 'MG Road', category: 'Marble & Granite', aspect: 'aspect-[4/5]', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuarMnTYn2vLf348gsHob01BTyf0HJpiDj_3yV-jNK4kTDY-3MTqbmrBPof0E9ka_dT5rKZ-vCMV_V7bBnqDU9BzxUEh4YiMjO6KWMIQUoX6nK-sZx5Yq_urMHF071H4il39dOFiE7HhzZp88IB7OECnHagmBLP7xbrpYKvXKhl_AZluGZDny39CjIlu5VVFeQkH3bjYwVwPG4xGL3DbieUjDk-mC08FXn8D1eY57_Ktxa6FgLAYqIYvs2XU1Lbd2IRg6Zmfo3eKE' }
  ]

  const filteredItems = galleryItems.filter(item => activeTab === 'All' || item.category === activeTab)

  return (
    <main className="bg-surface selection:bg-brand-gold selection:text-white">
      {/* 1. HERO SECTION - Synchronized Height & Content */}
      <section className="relative h-[563px] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 text-white">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5tgVCilnqFL-jXM8nVY9OL78Uprb-u95JzQGtWW0hTNUjp9u5hCknZO07tHkSSl6tJZgAUWEut8qJq1jeajo1CscFfulq2hA1VvwmgTpdiKlByIw4DgyUuT2AlVrKPpjv7uYZ1QU4k_Ch6dbTtQ7vcD-p0_qZrMwhrJV82_D28ZHCBlmH09tRtB6TZecgmUy6jkaphQaN3doEQ5NZ_x-qD3vfOVm3zSqi7syqG9uxTB04oQ4EhxzK7pU3EmCpjiqp7Nf7VzaPL8s" 
            alt="Masonry Hands"
          />
          <div className="absolute inset-0 bg-brand-navy/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block text-brand-gold font-label font-medium uppercase tracking-[0.2em] text-sm mb-4">OUR GALLERY</span>
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-white mb-6 tracking-tight">
            The Craft in Action
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed font-body">
            Real worksite images — showing our team at work on real projects across Pune.
          </p>
        </div>
      </section>

      {/* 2. FILTER TABS - Synchronized Stickiness & Design */}
      <div className="relative">
        <div ref={ref} className="h-0 absolute -top-16 md:-top-20"></div>
        
        <nav className={`sticky top-16 md:top-20 z-40 transition-all duration-300 w-full overflow-x-auto whitespace-nowrap scrollbar-hide no-scrollbar ${
          isSticky 
          ? 'bg-brand-navy border-b border-white/10' 
          : 'bg-white border-b border-surface-container-high'
        }`}>
          <div className="max-w-7xl mx-auto px-8 flex justify-center space-x-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`py-6 font-headline font-bold text-[11px] uppercase tracking-[0.2em] transition-all border-b-2 ${
                  activeTab === cat
                  ? 'text-brand-gold border-brand-gold'
                  : isSticky 
                    ? 'text-white/40 hover:text-white border-transparent' 
                    : 'text-brand-navy/40 hover:text-brand-navy border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </nav>

        {/* 3. MASONRY GALLERY GRID - 12 Items Synchronized */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="masonry-grid">
              {filteredItems.map((item) => (
                <div key={item.id} className="masonry-item group cursor-pointer">
                  <div className={`relative overflow-hidden rounded-xl shadow-[0px_10px_30px_rgba(11,20,55,0.04)] bg-white ${item.aspect} hover:shadow-xl transition-all duration-300`}>
                    <img 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      src={item.img} 
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white border border-white px-6 py-2 font-headline font-bold text-[10px] uppercase tracking-widest">View Full</span>
                    </div>
                  </div>
                  <div className="mt-4 border-l-4 border-transparent group-hover:border-brand-gold pl-3 transition-all duration-300">
                    <p className="font-headline font-bold text-brand-navy tracking-tight">{item.title}</p>
                    <p className="text-[10px] text-brand-gold font-headline font-extrabold tracking-widest uppercase">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 4. DOWNLOAD STRIP - Brand Navy Strip */}
      <section className="bg-brand-navy py-12">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 text-white">
            <span className="material-symbols-outlined text-brand-gold text-4xl">picture_as_pdf</span>
            <p className="text-lg font-headline font-bold tracking-tight">Download our project portfolio brochure (PDF)</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-brand-gold text-brand-navy px-8 py-3 rounded-lg font-headline font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">download</span>
              Download Brochure
            </button>
            <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-headline font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">share</span>
              Share Gallery
            </button>
          </div>
        </div>
      </section>

      {/* 5. CTA STRIP - WhatsApp Enabled */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <span className="text-brand-gold font-headline font-bold tracking-widest text-[10px] uppercase mb-4 block">GET STARTED</span>
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-brand-navy mb-4 tracking-tight uppercase">Impressed With Our Work?</h2>
          <p className="font-body text-on-surface-variant text-lg mb-12 max-w-lg mx-auto">Book a free site visit today and get an expert evaluation of your project needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-brand-gold text-white px-10 py-4 rounded-md font-headline font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg text-center pt-5">
              Get Free Estimate
            </Link>
            <a 
              href="https://wa.me/919876543210" 
              className="bg-[#25D366] text-white px-10 py-4 rounded-md font-headline font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-3 pt-5"
            >
              <svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.538-2.961-2.654-.087-.116-.708-.941-.708-1.796 0-.855.449-1.274.608-1.448.16-.174.347-.217.463-.217.116 0 .231.002.332.006.109.004.253-.042.398.303.145.347.493 1.201.536 1.288.044.087.073.188.015.303-.058.116-.087.188-.174.289l-.261.303c-.087.101-.177.211-.076.385.101.174.45.743.964 1.2.66.587 1.217.768 1.391.854.174.087.275.073.376-.044.101-.116.434-.506.549-.68.116-.174.232-.145.39-.087.159.058 1.012.477 1.186.564.174.087.289.13.332.202.043.073.043.419-.101.824zM12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"></path></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
