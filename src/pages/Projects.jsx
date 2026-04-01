import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSticky } from '../hooks/useSticky'

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All')
  const { ref, isSticky } = useSticky(window.innerWidth >= 768 ? 80 : 64) 

  const categories = ['All', 'Residential', 'Commercial', 'Marble', 'Granite']
  
  const projects = [
    { id: 1, title: 'The Orchid Villa', category: 'Residential', location: 'Baner, Pune', size: '1,200 SQFT', year: '2024', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIpz3a049DwLCtlFpk88XkZbDAN-vgHz6ACxTPtLBww8cYx_CXCyr2zCpZbs4K7M3-cv6AYSZowByuIMwazFRTOSKfvdCH5i1mo15St_QHQB5GOWiZbNlCIq93L1pVWQj_NQ5Qn4ujMfYEZ_AsMtc3qDvvHaQP7H4ATzPhXazEvKwwixOTOz46Z3waLYiQyNzXZ3O3jbqO8cIzf_Ng16mgTIt4qMS56m7QZ8HEKbvwz5Mc2YmaWoEbStkxPkv93PKxGBhlo5nmtOg' },
    { id: 2, title: 'VTP Realty Office', category: 'Commercial', location: 'Wakad, Pune', size: '2,400 SQFT', year: '2023', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMCK8nWkePdp5bHjxb16mwufjLu6xx0-ZRf9YZHiM7Eq7nq-BP3EcuNKpuSMxVKCBWSp7mkGtsz9H7UYitMo2mtQ27kH0OZiEvj4BNHmVuWPHDI2Ptr1lXyMoVRWxQXs627sRoUkPaO-f5hs8Y85-Zi9AoZBXguAq2qaeKSt1WIcUTWf0Tb46zRI1AJyLebky7QEDXa0EterVgbziIlCRgY8UdLaD2rFC41D0TVVfmxKbtmcIrf4iWn9g-T8f-Wk2tb-baLjfmkhY' },
    { id: 3, title: 'IT Office Complex', category: 'Commercial', location: 'Hinjewadi, Pune', size: '12,000 SQFT', year: '2023', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYJ8WnJh4qJExnzm79X5z5U2eUjsxwMtVpTq6h148XznvQ2o0ABhT60GatdTAFJ18bkr7OwZIga_NerGWP5Tl0x7VlJagRJ4RZpvs2nXzcZj-DgN3PfM0fY8YmsD38aRSyUnbU01P1rxEEcfO2VfrBN-dUDUWriTBKl-QSBoi21DrnX2gdgTiiH1dwRzQsB1jZof71BiSdCdb7dpuD57A7x8aUBY3Cp3RZ4MghkzfOTESwLmZGs7lmr8nTOXMzRdn36Jdzj_4zddo' },
    { id: 4, title: 'Villa Master Bathroom', category: 'Residential', location: 'Koregaon Park, Pune', size: '280 SQFT', year: '2024', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4G5F2o7QreR308Kfp-NQnPG52fhcGxeqNVqgnz_8TIacp7pUR3wcLl_QYRaYjSRBQ991LF6h661A9Bv0W37W0T9sEot6rdk1SqllPBAJ8Iwg_wNio7XNJHQc9HwWo6VVAztsCIQc0Ib8At-9N1IZODf3rq4gXRqOVIMRi8BPIoWYb9DmCIv_DlN2n8lJDmQuwkrNma5i1aOvyDglUFWj-TX_azY5JRBIHbtBLUG5a4VCgjkPUzbOTrTlwqWeW3Z4bF7m6roPSEPM' },
    { id: 5, title: 'Restaurant Flooring', category: 'Commercial', location: 'MG Road, Pune', size: '1,200 SQFT', year: '2023', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIZKClXkhv1FE0Nh8Z1VTjFLIWRyMUcfngyCX3HtZQTvJCsUwFSITJQy_eOjWRbggOeDmx5oz_WzotNX9F2CXy2x8bU3wln0zPEsAvzqKaIfjAd4zLqdF44ULPe-F76H766vbJc356en7KQ81BXNy8LyxVDbd1FXgr3MAdmDzPdNoElUnlZcrhE2CEt_Ye7nTq8Q9xYbUmNwKxT8mgzKi3NeLEHhbHGd7BFrzw81-OBNyqbrl-5VkfQCWk8zi55TqLHF5Hf83N1RM' },
    { id: 6, title: 'Marriage Hall Grand Lobby', category: 'Commercial', location: 'Wakad, Pune', size: '6,500 SQFT', year: '2024', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdwbQet5YY7h82MBEA1JZTTMsIUvP-5GmrAXMS8doJE9NxvRW4s82V4C7e-vmdZdulhrDB6-WoIuQeXutG1r8O8wa1kplGCKaVKCx_rZcc3Wv4Zkw8LFTT_VrlMPPAfRLYMaHIyHpOOph8XViDgjfbfBLKOyzD3ui0W5ASQsbPx36r-nmysfpZ-gAZ3RsDwwOuTZQibYvfy_ATFjw8cdUq0H4F5Rr6jYnUgOrbtXsVOIgK9ciWqp5SQmSRmXK-WB1iR21H5ZF618g' },
    { id: 7, title: 'Society Podium Tiling', category: 'Residential', location: 'Kharadi, Pune', size: '3,200 SQFT', year: '2023', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuxaOVsQkK6Mo0hdJsqcjubk3fC1pgjRd0j74AjQEPBLezdOcs0VOviJ7ktUL0b9qM-LvmYxO7-kn2qr_Xa1wxeJ9mhuog_PJHgEkuLaqevsUw6T_gLYEA4grC4b2h4C7TbK60Pg0_gky2f_mZneFjJJ4eBXemMJptp3e5CQzl8bOgzsg6THYVMIQAlLcJ9p9FayBHue1aBHjpBPECD4UQJpBqebFu0NDTyRDQ1sNzPV3L1gb3Ss47FVLO5sMAOfWHwBH8Qyg5pSA' },
    { id: 8, title: 'Gym & Spa Interior', category: 'Commercial', location: 'Viman Nagar, Pune', size: '2,100 SQFT', year: '2023', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5J9LcasdGK28xkbnopgWQhx8aaRZo1tq22lmgRVM-GEBBmSI3_Vp2r-2zn8m_JAl0PtBDNhDDZUOpPv233A-Gxoa00TWPAdfrWNBKKmlPEwuiuFY7QVfFXp7kts1dQTOUaqw-0YhoY4N-eAuAHcSKvrzrT9lCzAVNUWQ-YEIz9xG4ZsKtlwxrcmBXx2Gddt9qRWtXNU45Oza5kHu9dm9nKKme4tQoHKCSNSF4xRUCp1Qkr2U5hU5GqRtShBV7PIdtUAl0tLk-ous' },
    { id: 9, title: 'Builder Floor Finishing', category: 'Residential', location: 'Hadapsar, Pune', size: '920 SQFT', year: '2024', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdCzNtaIG6AgUHtnQx2rlQHGxq318uPc337iwAu8_pLApMwUJDKmBciROc_GkVHEMZOJ-p2DHINBI-3wFk-8yKL9gSOsau4JlvZnIEqkgWePil0umn_5P_tLX8b7vtQvaHav9dMEdM5bdTgeVdOQT-knG9w1IQ-LfHSNwKhR6aNMrwP6GwSxUzqnErkaKEvW3nfjy183eWfQ4tEXsj0krCoKvj0nE-YulPcU6NGYzLznGuv-AbCbnlWI1HR7AEJig8CIUjxpHdf4w' }
  ]

  const filteredProjects = projects.filter(p => activeTab === 'All' || p.category === activeTab)

  return (
    <main className="bg-surface">
      {/* 1. Page Hero - FIXED to 614px height and original image */}
      <section className="relative h-[614px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQpRN0a_nqb-28lvSCXC8UNj8t-fOoRsSDxskG7Mwy5pyWld8CrQjBSXaTLzwQeumvLnYlNz1iiEJAsMmScPr0oci1gxXSfzjMBEviAM6gkyksO98FBSxVPxcbRHL-X3iFvNI4l_ygxS_zCAFGK91R1ElP8Ii36tfXyOmtGhCOPy-HriqtOvq3UCq9D33WypbIOtUtRMdMUiCwHrA0rkgYINbwIEMR0-bc5hV-3fT3d3yj5iPZSbk287EOkpTKVwD7GWubs2ApEYE" 
            alt="Projects Hero"
          />
          <div className="absolute inset-0 bg-brand-navy/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-8 w-full text-white">
          <span className="inline-block text-brand-gold font-label font-medium uppercase tracking-[0.2em] mb-4">OUR PORTFOLIO</span>
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl">
            Projects That Define Pune's Spaces
          </h1>
          <p className="text-white/80 text-xl max-w-2xl leading-relaxed font-body">
            From single apartments to massive commercial complexes — every project completed with the Abhishek Enterprise precision standard.
          </p>
        </div>
      </section>

      {/* 2. Sticky Tab Container - FIXED to match original padding and button styles */}
      <div className="relative">
        <div ref={ref} className="h-0 absolute -top-16 md:-top-20"></div> 
        
        <nav className={`sticky top-16 md:top-20 z-40 transition-all duration-300 w-full ${
          isSticky 
          ? 'bg-brand-navy shadow-2xl py-5' 
          : 'bg-white border-b border-surface-container-high py-4'
        }`}>
          <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-2.5 font-headline font-bold text-xs uppercase tracking-widest transition-all rounded-full ${
                  activeTab === cat
                  ? 'bg-brand-gold text-white shadow-lg scale-105'
                  : isSticky 
                    ? 'text-white/60 hover:text-white border border-white/10' 
                    : 'text-brand-navy/60 hover:text-brand-navy border border-surface-container-high hover:bg-surface-container-low transition-colors'
                }`}
              >
                {cat} 
                {cat === 'All' && <span className={`ml-2 px-2 rounded-full text-[10px] ${activeTab === 'All' ? 'bg-white/20' : 'bg-brand-navy/10 text-brand-navy'}`}>48</span>}
              </button>
            ))}
          </div>
        </nav>

        {/* 3. Projects Grid */}
        <section className="py-24 bg-surface min-h-[800px]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border-l-0 hover:border-l-4 border-brand-gold">
                  <div className="h-[240px] overflow-hidden relative">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      src={project.img} 
                      alt={project.title}
                    />
                    <div className="absolute top-4 left-4 bg-brand-navy text-white px-3 py-1 text-[10px] uppercase font-headline font-extrabold tracking-widest rounded">
                      {project.category}
                    </div>
                    {/* View Details Hover */}
                    <div className="absolute inset-0 bg-brand-navy/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2">View Details <span className="material-symbols-outlined">arrow_forward</span></button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-headline text-brand-navy mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
                      <span className="material-symbols-outlined text-brand-gold text-lg">location_on</span>
                      <span>{project.location}</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-surface-container-low">
                      <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider font-label">{project.size}</span>
                      <span className="text-[10px] text-brand-navy/40 font-medium font-body">Completed {project.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button className="inline-flex items-center gap-2 text-brand-navy font-bold font-label uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors">
                Load More Projects <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* 4. Stats Banner */}
      <section className="bg-brand-navy py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { num: '500+', label: 'Projects Completed' },
              { num: '15+', label: 'Years Experience' },
              { num: '480+', label: 'Happy Clients' },
              { num: '25+', label: 'Team Members' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-headline text-4xl md:text-5xl font-bold text-brand-gold mb-2 tracking-tight">{stat.num}</div>
                <div className="text-white/60 text-[10px] font-headline font-bold uppercase tracking-widest font-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonial Strip */}
      <section className="bg-surface-container-low py-24 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-brand-gold font-label font-medium uppercase tracking-[0.2em]">CLIENT WORDS</span>
          <h2 className="font-headline text-4xl font-extrabold text-brand-navy mt-4 tracking-tight">What Pune's Property Owners Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { name: 'Rahul Mehta', role: 'Home Owner, Baner', text: 'The precision with which they handled the marble installation in my Baner villa was extraordinary. Not a single line was out of place.' },
              { name: 'Priya Sharma', role: 'Business Owner, FC Road', text: 'As a commercial space owner, I value durability. Abhishek Enterprise\'s work still looks brand new after 2 years of heavy footfall.' },
              { name: 'Sunita Builder', role: 'Real Estate Developer', text: 'For our large-scale residential projects, we need a partner who can scale. They have consistently delivered across 100+ flats.' }
            ].map((t, i) => (
              <div key={i} className="bg-surface-container-lowest p-8 rounded-xl shadow-sm relative text-left">
                <span className="material-symbols-outlined text-brand-gold text-5xl opacity-20 absolute top-4 right-4" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <div className="flex gap-1 mb-6 text-brand-gold">
                  {[1,2,3,4,5].map(s => <span key={s} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                </div>
                <p className="text-brand-navy/80 italic mb-8 leading-relaxed font-body">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-navy/5 flex items-center justify-center font-bold text-brand-navy">{t.name.split(' ').map(n => n[0]).join('')}</div>
                  <div>
                    <div className="font-bold text-brand-navy">{t.name}</div>
                    <div className="text-xs text-brand-navy/40 font-body">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Strip */}
      <section className="bg-brand-navy py-24">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-10 tracking-tight uppercase">Ready to Start Your Project?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="w-full md:w-auto bg-brand-gold text-brand-navy px-10 py-5 text-sm font-bold font-label uppercase tracking-widest rounded hover:scale-105 transition-transform duration-300 shadow-2xl">
              Get Free Estimate
            </Link>
            <a href="tel:0000000000" className="w-full md:w-auto border-2 border-white/20 text-white px-10 py-[18px] text-sm font-bold font-label uppercase tracking-widest rounded hover:bg-white hover:text-brand-navy transition-all duration-300">
              Call Now: 0000000000
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
