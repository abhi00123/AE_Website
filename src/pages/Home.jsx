import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="bg-surface selection:bg-brand-gold selection:text-white">
      {/* 1. HERO SECTION - Synchronized to 819px and exact source text */}
      <section className="relative h-[819px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 text-white text-left">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXkkAQVWM97tlsdrepd4BdzwkKC1o8o9LXg1keSX8L_HM4jZuh4VaDcJfnrFwCTsi7n0Dsh0la9yD-CUthTrEtIXL1JulbwZxRW7M4iRMj9qh4i6Kjm_XAZmH62k7KXc1K4lsWIIH4K8SvmAruyw1dT7tEhujlmcehgkgwKKwx7gxlZGjy7wJKLYaegyP5fF0p0vh_EPbN9EIORg837C6pviVKyzUbM71os3R1Xpe04-XADXMzjWhGz9IdpE0HuwcyPtgVhEF7JBU" 
            alt="Hero Mason"
          />
          <div className="absolute inset-0 bg-brand-navy/55"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-white text-left">
          <div className="max-w-3xl">
            <span className="inline-block text-brand-gold font-headline font-bold tracking-[0.2em] mb-4 uppercase text-sm">PUNE'S MASTER MASONS</span>
            <h1 className="text-5xl md:text-7xl font-extrabold font-headline leading-[1.1] mb-10 tracking-tighter shadow-sm text-left">
              Expert Tile & <br/>Marble Contractors <br/>in Pune
            </h1>
            <div className="flex flex-wrap gap-5 mb-14 justify-start">
              <Link to="/contact" className="bg-brand-gold text-brand-navy px-10 py-5 rounded-lg font-headline font-extrabold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl pt-6">
                Get Free Estimate
              </Link>
              <a href="tel:+919876543210" className="border-2 border-white text-white px-10 py-5 rounded-lg font-headline font-extrabold text-xs uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all text-center pt-6">
                Call Now
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-12 pt-14 border-t border-white/20">
              <div className="text-left">
                <div className="text-4xl font-extrabold font-headline text-brand-gold mb-1">500+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-80 font-bold font-headline">Projects Completed</div>
              </div>
              <div className="text-left">
                <div className="text-4xl font-extrabold font-headline text-brand-gold mb-1">15+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-80 font-bold font-headline">Years Experience</div>
              </div>
              <div className="text-left">
                <div className="text-4xl font-extrabold font-headline text-brand-gold mb-1">480+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-80 font-bold font-headline">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROJECT TYPES - Sync to 5 Cards from source */}
      <section className="py-24 bg-surface-container-low text-left" id="projects">
        <div className="max-w-7xl mx-auto px-8">
          <span className="text-brand-gold font-headline font-semibold tracking-[0.2em] uppercase text-xs block mb-2">Projects We Handle</span>
          <h2 className="text-4xl font-extrabold font-headline text-brand-navy mb-16 tracking-tight">From Homes to Commercial Spaces</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { id: 'Flats', tag: 'Residential Luxury', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAMPouHHBf4dNu8IbSKpHC4UMl7mWRMv_iziAcyvOTMC6boxnysL6MCQUgYVQlT19mxOAv8iTEsoxPJXJBY3siUh1HZ1AEVbGmin5BsyC-VJtG8l838GasnR_SBNJlIzFDOn62YpHawEd1tdzfHiyE1gy4QTjRGa_Pt24B70P8B2yUB2YshwWfsoGn79Sb7hAQ4ZmBC8bKyIrvl91LaxBrUj64xBPsxp_ZWXpZOXN2CjdZNXNlFx60VlM9sjvFWao1lCegL0fwsks' },
              { id: 'Shops', tag: 'Retail Finishing', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1BeugrCUOnx9ZBteybZ8gAUy4ySyn6hnnHERbkLGclBDo9DiLfdsBScFBeacT1yj75izdhtz2MKlamKopWG63xJOyMsDQmM5oGNFXijhEeBSRyJ_0P2VrFtXHQIEacY_bLeDkSar60YrVQ6unRISO_QZ1uKcG0x1woGB5hxfR-BNXhQoWxCXj32NoPb1mCQUxwe4QZ1poLAJqg6qbGm5ynArZ99pxrU-g2lyB5XEyJU4GLxAQGO4HLPN-eOQa3RAfNzkAOt1DzPc' },
              { id: 'Malls', tag: 'Large-scale Projects', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMtcBaeBBZeOiiwUuDJ7hSEtRG_ah3hxwb5v4eSQ-Nj6bOEWnfrYy0nMKAJtFIwY91abU8ClNfiyQ7UFgs-1RKKRDewiRFxPNyepe_tHNo2snHBTzfRwFi1c2yfkttpNxu8PvxUnfYySy1q6iIChOaTvx-TGaTOR2B48OgYqdp1y9VJT6s_shZD-kVxg-F_ugcHP2TKoDtoeIG8iskIdOzkYqG7fSrCYmwLQYnkdr3u-JIEEKc_c6c9J8bGYu7pN5RB7oTHExbJfI' },
              { id: 'Buildings', tag: 'Structural Tiling', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLOgLWv9CZd2JB9gEbQwhWAFpc2kW1ZpWS3fdN0bbkiJavx9n5W1RSXbOy083HPkJ4aniLag0gSBxEtmxGw3emMiC73hh2RAcwC6VNQ0frF5klunKjzgbzb8dilCTvkZGhr0F3bY-6TzGiGIAbRytwHPxDHOInlGUm6Y0lQUhpURWg6g8ig4RW--d1xJbJ_Xgf6mKBwJwX3v6Q8ivR3hXnvshzZIQqDCoalN94xBy8Vfh4S4NU5IkzJQ9d_pNofBQm0hcbr0UUhMo' },
              { id: 'Halls', tag: 'Event Spaces', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPnVyIgoHroyQ1q5rLRyaa6dHlNAwiB2DvSf2qV7UwD1JQclJAUJn130YzTJlAjiCmd5vX1vvOM028KdbkaGuut0EM5fVSXYjHlP3TwREDkavxD3EbPpNrApXBCdpntWanV81qHH8E3_pnJad4KvaFdJT2NnYymQPqOshqzp6xvrs0cT4GWJ-lmPJgkd3yArVLBk1owQRO-kC376V002cFxp2LE_VMTmT91LJUIU8uSt5zz8TErTTHP2MLdu4KER5VTDK0H0RKVJc' }
            ].map(proj => (
              <div key={proj.id} className="group relative h-[400px] overflow-hidden rounded-lg bg-surface-container-lowest shadow-sm transition-all gold-hover-edge">
                <img alt={proj.id} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={proj.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white text-left">
                  <h3 className="text-xl font-extrabold font-headline mb-0">{proj.id}</h3>
                  <p className="text-[10px] font-headline font-bold uppercase tracking-widest opacity-80">{proj.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION - Detailed Technical Cards */}
      <section className="py-24 bg-surface" id="services">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="text-left">
              <span className="text-brand-gold font-headline font-bold tracking-[0.2em] uppercase text-xs block mb-2">Our Services</span>
              <h2 className="text-4xl font-extrabold font-headline text-brand-navy tracking-tight">Expert Stone & Tile Services</h2>
            </div>
            <p className="max-w-md text-on-surface-variant font-body text-left">We combine traditional craftsmanship with modern technology to deliver flawless finishes for every surface.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              { 
                title: 'Tile Fitting', 
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbYICAjF5G9eTchdj3JN4vQJ56jB5GMJZ_lCAAG9WbXTy3VzD11gNtcf7aFcKPM3663nJYw5UoStcWD8N1LGyKUv3LjL8AzHjKDUWhkOtTQGwmamgkeWpuyHgtWBDjIzUpD3rVPjNkIoWHir6Olig9Fn5gkobvlGBgdYhBD_hWwdMPTt8ErLVU8MFlwBVtSwbmf6akaRt0oYf2dYgSdiLlM6UsxuYMG-OASXcbc0rUF-HYKWcl1ffrlBjDURHJWjcTW85TWk8qmqg',
                features: ['Vitrified & Ceramic', 'Laser-guided alignment']
              },
              { 
                title: 'Marble & Granite Work', 
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqGAtvsGrPmvHesuaMBDO2mMmHKMMP7gkv1iY-HZZXbKtTyyumlexRlxtywZ5F38ykcMalFDQg7_HdloFEqSXubWXVPpgRcgM1pTr0Cx7shO5sZGRyr0jbkXJgllsjsjt1HlmxMoik-5LpVNHSHZ4Kf4yJEP-UWA6HAqOrOasl0v9gHduWylBr3TACsrlc7WAa98es6nGu0PofgMmDKrSgbI6sP7by8kO3flCmjSs8tcVqEU6CNpoXK3THqXtPFefnfmhOm6fF-Cs',
                features: ['Custom edge profiling', 'Diamond polishing']
              },
              { 
                title: 'Bathroom & Kitchen', 
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARKHwm_JEpUabNqrau86nwQkEG18iRX6wr0KcDorFUc8MJMKwA2GNmchlJi62L5_U4dzaI1NV9Feoi_49n_wEk6fRmA6cDjEus14S6qoVCWCHqAWO6gOv9ew8KtLZOILjJsfZmPwTlrjUKdAQcAS3dUHHdNYwEXk_MRXPqUFAKiwS_mT4-hMqXLOooy-ZNXYJFTeSGv0TPcIN4cpklU7euuhXYIG7As_qTHVzu8z_G-EZ_8bX9ZlEh25eLODjNtt6S8XjQy6v6ZsE',
                features: ['Waterproof installation', 'Anti-skid solutions']
              },
              { 
                title: 'Interior Tile Design', 
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCoMpJpnqExmqxwGgbwyUmgcrpXDIh7sAFsUePm8WZzNp5kTNIlEzyDRmpbXCigmBl39J7eMUbUGaJrATKLGLFzHq_GFGHEnX3vDupICQgetjhNlYgfYkHHQ2AypOiwK2BIscYjtrPrfXKGx-5cdiPqtTakWAUNkTQTUmPygYffoTOhFyqaMX6neW1gnr6qQoCL6RYcFc9PcFLqHixLjmDzPm35JlesCsA3PeXRn5wwZMr01-QYrYpgOygclm2JOofshy_Fetyyts',
                features: ['Custom mosaic patterns', 'Feature wall creation']
              }
            ].map(service => (
              <div key={service.title} className="group bg-surface-container-low p-8 rounded-lg transition-all gold-hover-edge">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden shrink-0">
                    <img alt={service.title} className="w-full h-full object-cover" src={service.img} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-extrabold font-headline text-brand-navy mb-4 tracking-tight">{service.title}</h3>
                    <ul className="space-y-3">
                      {service.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-on-surface-variant font-body">
                          <span className="material-symbols-outlined text-brand-gold text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE ABHISHEK ADVANTAGE - Dark Section */}
      <section className="py-24 bg-brand-navy text-white text-center">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <span className="text-brand-gold font-headline font-bold tracking-[0.2em] uppercase text-xs block mb-2">The Abhishek Advantage</span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-6 tracking-tight">Uncompromising Quality in Every Joint</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: 'engineering', title: 'Skilled Labour', desc: 'Our masons have generations of experience in traditional stone craft.' },
              { icon: 'speed', title: 'Fast Completion', desc: 'Efficient project management ensures timely handover of every site.' },
              { icon: 'payments', title: 'Affordable Pricing', desc: 'Transparent quotes with no hidden costs. Value for every rupee spent.' },
              { icon: 'verified', title: 'Premium Finishing', desc: 'Obsessive attention to detail in grouting and edge alignment.' }
            ].map(adv => (
              <div key={adv.title} className="text-center">
                <div className="w-20 h-20 bg-brand-gold/10 border border-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-brand-gold text-4xl">{adv.icon}</span>
                </div>
                <h3 className="text-xl font-extrabold font-headline mb-4 tracking-tight">{adv.title}</h3>
                <p className="text-white/60 text-sm font-body leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 4-STEP PRECISION PROCESS */}
      <section className="py-24 bg-surface-container-low text-left">
        <div className="max-w-7xl mx-auto px-8">
          <span className="text-brand-gold font-headline font-bold tracking-[0.2em] uppercase text-xs block mb-2">How We Work</span>
          <h2 className="text-4xl font-extrabold font-headline text-brand-navy mb-16 tracking-tight">Our 4-Step Precision Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { id: '01', title: 'Site Visit', desc: 'We assess your space and understand your vision.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOAuziag1hb1yL6GIg7FIQotxNGOY_Zi_JG2NDr1tWgzDhcaXGvgTHDmOglLgfdFB9ySiC_RYrLcP9FFpCtf_YAjN0aVGc6iBroZEbCrtndwABBcBEB32scv949Ft9e9-_Tq08Qn-2iQ_BunLJX3qOBFF6vvdkCGgX5lvXW-373S_jLUsgiF2L_zEI3yJ0ScdXooetPmKjsbW69xSGfvGysoLq-YPX5MusdDk7-KwHy9WkOfLKblvNXOoIbhX8K_7H3OErnpDW-Z0' },
              { id: '02', title: 'Planning', desc: 'Detailed estimation and tile selection guidance.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf0nrcXFrDI09cBplNfqBm7teVNwAXxzjIO5sdpzATxWgtcZEHGUy6frc3cReRZlDEPzkZfDtcKmsGs2WPXHMy_6KpSIsDYXtX45q6TqcIL4wb1js2khf_KgggPkB_zLI4wvHc4Ko8B-6rpBJuzkUPrPz7toHQTooB3d6PY89ff3bclUcEykXGb869UAY_wDx8-FWg0liRMLCCLapisiX-8B_UQ-o-uh9GltL6rlMAhWhzK4wCXBcy4omH8iFh4j1Qphw1dvE3-7c' },
              { id: '03', title: 'Installation', desc: 'Expert masonry with dust-controlled environment.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2vcg9JmALv8_mS8vBiwZ9grsiVxR7pZuWjgbDXZFap51bXBUBgQdFygjgk2RBt4jb6P68jJQnSH3GrpWM1yZzZKwAvrimK0_qEeEu8kGP5yvyRULah9bWs1uZE6eHcdeifagOPhtWIsfrCKnRec5cRY45Bz0CRj1OtFmHBlHG-m1bt7Gk6dXP1UA_Qi_nFnc4iU1_bl4524s5CEIqcm8yP8nEUnzWIaZbswe7jJAUQdhuxwYUPrcpCOjW9SJfO0s4TOLln1nIjRE' },
              { id: '04', title: 'Final Finishing', desc: 'Grouting, cleaning and quality inspection.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ4cqVq8ofvJ984YeFHBVvV0HJbfX0Q95k02fHwvK7wKqHXXPvC14O0et7pLXIS0rjTgB_8Sj6q7poymGvUl-TmtatiNCf_Qn9IUkwot4LFSWR5eUSv0oYcIHOpJ30jlXZpO9DjISvAmfb46aUn9wiA7g08UDOn_msIUFtT6ixX8WA5LiIbIiG34VJ86-3tv13PHNvGNQWUAIJdQ0JbIzs6Yrayb82yNA7pyTmmUFm1_Bth3QWs0N0tFFrZYHH2Twn7evfsSqNTNQ' }
            ].map(step => (
              <div key={step.id} className="relative group text-left">
                <div className="aspect-square rounded-lg overflow-hidden mb-6">
                  <img alt={step.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={step.img} />
                </div>
                <div className="text-brand-gold text-4xl font-headline font-extrabold mb-2 opacity-30 text-left">{step.id}</div>
                <h3 className="text-xl font-extrabold font-headline text-brand-navy mb-2 tracking-tight text-left">{step.title}</h3>
                <p className="text-sm font-body text-on-surface-variant leading-relaxed text-left">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LARGE STATS STRIP */}
      <section className="py-20 bg-brand-navy border-y border-white/10 text-white text-center">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-6xl font-extrabold font-headline text-brand-gold mb-2 tracking-tighter">500+</div>
            <div className="text-white uppercase tracking-[0.2em] font-bold text-[10px]">Projects Completed</div>
          </div>
          <div>
            <div className="text-6xl font-extrabold font-headline text-brand-gold mb-2 tracking-tighter">15+</div>
            <div className="text-white uppercase tracking-[0.2em] font-bold text-[10px]">Years in Business</div>
          </div>
          <div>
            <div className="text-6xl font-extrabold font-headline text-brand-gold mb-2 tracking-tighter">480+</div>
            <div className="text-white uppercase tracking-[0.2em] font-bold text-[10px]">Happy Clients</div>
          </div>
        </div>
      </section>

      {/* 7. HOME PAGE GALLERY - The Craft in Action */}
      <section className="py-24 bg-surface" id="gallery">
        <div className="max-w-7xl mx-auto px-8">
          <span className="text-brand-gold font-headline font-bold tracking-[0.2em] uppercase text-xs block mb-2 text-left">Visual Showcase</span>
          <h2 className="text-4xl font-extrabold font-headline text-brand-navy mb-16 tracking-tight text-left">The Craft in Action</h2>
          <div className="columns-1 md:columns-3 gap-6 space-y-6">
            {[
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCIpz3a049DwLCtlFpk88XkZbDAN-vgHz6ACxTPtLBww8cYx_CXCyr2zCpZbs4K7M3-cv6AYSZowByuIMwazFRTOSKfvdCH5i1mo15St_QHQB5GOWiZbNlCIq93L1pVWQj_NQ5Qn4ujMfYEZ_AsMtc3qDvvHaQP7H4ATzPhXazEvKwwixOTOz46Z3waLYiQyNzXZ3O3jbqO8cIzf_Ng16mgTIt4qMS56m7QZ8HEKbvwz5Mc2YmaWoEbStkxPkv93PKxGBhlo5nmtOg',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuBMCK8nWkePdp5bHjxb16mwufjLu6xx0-ZRf9YZHiM7Eq7nq-BP3EcuNKpuSMxVKCBWSp7mkGtsz9H7UYitMo2mtQ27kH0OZiEvj4BNHmVuWPHDI2Ptr1lXyMoVRWxQXs627sRoUkPaO-f5hs8Y85-Zi9AoZBXguAq2qaeKSt1WIcUTWf0Tb46zRI1AJyLebky7QEDXa0EterVgbziIlCRgY8UdLaD2rFC41D0TVVfmxKbtmcIrf4iWn9g-T8f-Wk2tb-baLjfmkhY',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuC7B1F6zQ6lyT_Ityx28PCH1jQab3IEX00MkFGSAYMZnujUpQvttjdiqy07KiqbsJElkhmwBcWeThVvejDqdBCZsriqyOiBO5fQbgZwEERa2VznIOiZxnVk_dqO45PkTrb03gKhcmDvPvSA8T3S00X8sUT7BXUaD43UXOpCmIow1BK65CvE9QO8XJI1oxkuTHuXZSgeg9t2GnOPwHYfZ4uQv8DAc_eXEy6qMt1bFNFi_EOQq2wM7PshPlH6LauDv8zlBjeqw2CdToE',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCmgeOH64Uab1oMCyz3xoyTzYiOSqkGJzNXZKX9VKtu4AFJ-KbgwslEOHVfiROrPKBcpTJ2tJoGTTXutOxdI3VccmQJJZKYphPQG-2smpxlE3WmwsXTmKu1ih_AS-1QbrXHR9juD3LU3mJgRTniJDop315Htcr2iTrMW_3RQD__PXddcOC_k-NVXV_qyvhx_11NlhATUSKyRhS6ttUAAhALi-9NhhzGxluaJyylOyrek-yqLnrACtWmjgRgsIbLmXhtVtkIzcPAp40',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuBUm0rmOeZyszCWTqG1cQe90ay_neBudBnnEz6p6RRCvAgwq-Tq_PncdGukHFJUTeEmOMe9JBJdQOanLOiByn8zmn3KmNx1V3OwVV-kQFRNm44iCgTKUQ4Mpc0xX7qucmaeJknnmj_k9d5RFNPEcmyKimrlY-pxdrRXZWKNcpeJgP1p1p14plTksyFHTEzAHEhFJMRQZMiheUv2B48oz9FAU3nR17_Ywcn4kNCOyweJmaO1fdTPopBk6aP0p-rvW4VdUHd8LCJ4bM8',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuBZNgsZ-__1Id_2MYHeN8L36uqw5aKrJnwmc52iV4Mzs-TzucPvqqVD2IzPlT3iGCSA7TGnr_m9jNua6k1Ee0E6mG4JWXJY1Tz1cZgLSz_FVMsyBuMGgTuT3WU3Tc0XlncgmvWycH96pCXoeJ3i-JUX2gZs7Tr76Rc33NYrRYA4TFvAckmn8qkd5GZ9KC6GNGkZ0uV17_xw-bufF13FG8zRNtNM7dIHKcfgu4Jm6tZps7LwuM1NSHrWJg3EpO6iiu7RlJ_D_4hFIe4'
            ]
.map((img, i) => (
              <div key={i} className="break-inside-avoid rounded-lg overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500">
                <img alt="Gallery" className="w-full h-auto group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0" src={img} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS - Expanded to 4 items */}
      <section className="py-24 bg-surface-container-lowest text-left">
        <div className="max-w-7xl mx-auto px-8">
          <span className="text-brand-gold font-headline font-bold tracking-[0.2em] uppercase text-xs block mb-2 text-left">Client Reviews</span>
          <h2 className="text-4xl font-extrabold font-headline text-brand-navy mb-16 tracking-tight text-left">Trusted by Pune's Finest</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Rahul Mehta', role: 'Homeowner', text: '"The team at Abhishek Enterprise handled the marble work for our Kothrud bungalow. The book-matched flooring is a masterpiece. Highly recommended!"' },
              { name: 'Amit Saxena', role: 'Commercial Architect', text: '"Reliable execution and extreme attention to technical details. They are our go-to contractors for large-scale vitrified flooring projects in Pune."' },
              { name: 'Priya Sharma', role: 'Architect', text: '"Fastest completion I\'ve seen in my 10 years as an architect. Their precision with large-format tiles is unmatched."' },
              { name: 'Sunita Builder', role: 'Developer', text: '"Handled the entire commercial tiling for our new office complex in Baner. Quality work at competitive rates."' }
            ].map(test => (
              <div key={test.name} className="p-8 bg-surface-container-low rounded-lg gold-hover-edge shadow-sm transition-all duration-300">
                <div className="flex text-brand-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface mb-6 italic font-body leading-relaxed text-left">{test.text}</p>
                <div className="font-extrabold font-headline text-brand-navy text-lg text-left">{test.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-brand-gold font-bold font-headline text-left">{test.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TILE COST ESTIMATOR - Restoration */}
      <section className="py-24 bg-surface-container-low text-left">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-surface-container-lowest rounded-xl p-10 shadow-xl text-center border-t-4 border-brand-gold">
            <span className="text-brand-gold font-headline font-bold tracking-[0.2em] uppercase text-[10px] block mb-2">Self-Service tool</span>
            <h2 className="text-3xl font-extrabold font-headline text-brand-navy mb-8 tracking-tight">Tile Cost Estimator</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-3 font-headline">Area (Sq. Ft.)</label>
                <input className="w-full bg-surface-container-low border-none rounded-lg p-5 font-headline font-extrabold text-sm focus:ring-2 focus:ring-brand-gold outline-none" placeholder="Enter total area" type="number"/>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-3 font-headline">Tile Type</label>
                <select className="w-full bg-surface-container-low border-none rounded-lg p-5 font-headline font-extrabold text-sm focus:ring-2 focus:ring-brand-gold outline-none">
                  <option>Ceramic (Standard)</option>
                  <option>Vitrified (Premium)</option>
                  <option>Marble (Luxury)</option>
                  <option>Granite (Industrial)</option>
                </select>
              </div>
            </div>
            <button className="bg-brand-gold text-brand-navy font-headline font-extrabold text-xs uppercase tracking-widest px-12 py-5 rounded-lg hover:scale-105 transition-all shadow-xl">Calculate Estimate</button>
          </div>
        </div>
      </section>

      {/* 10. CONTACT SECTION - With Map Restoration */}
      <section className="bg-brand-navy py-24 text-left" id="contact">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <span className="text-brand-gold font-headline font-bold tracking-[0.2em] uppercase text-xs block mb-2">Contact Us</span>
              <h2 className="text-4xl font-extrabold font-headline text-white mb-8 tracking-tight uppercase">Book Your Free Site Visit</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input className="bg-white/5 border-none text-white rounded-lg p-5 w-full focus:ring-1 focus:ring-brand-gold placeholder:text-white/20 font-headline font-bold text-sm" placeholder="Your Name" type="text"/>
                  <input className="bg-white/5 border-none text-white rounded-lg p-5 w-full focus:ring-1 focus:ring-brand-gold placeholder:text-white/20 font-headline font-bold text-sm" placeholder="Phone Number" type="tel"/>
                </div>
                <textarea className="bg-white/5 border-none text-white rounded-lg p-5 w-full focus:ring-1 focus:ring-brand-gold placeholder:text-white/20 font-headline font-bold text-sm" placeholder="Tell us about your project..." rows="4"></textarea>
                <button className="w-full bg-brand-gold text-brand-navy font-headline font-extrabold uppercase tracking-widest py-5 rounded-lg hover:bg-white transition-all shadow-xl text-center">Send Inquiry</button>
              </form>
            </div>
            <div className="flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex items-start gap-4 text-white">
                  <span className="material-symbols-outlined text-brand-gold text-3xl">location_on</span>
                  <div>
                    <h4 className="font-extrabold font-headline text-lg uppercase tracking-tight mb-2">Our Office</h4>
                    <p className="text-white/60 text-sm font-body leading-relaxed max-w-xs">Katraj-Kondhwa Road, Near Market Yard, Pune, MH 411037</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a className="bg-[#25D366] text-white px-8 py-5 rounded-md font-headline font-extrabold text-xs uppercase tracking-widest flex items-center gap-3 hover:opacity-90 transition-all flex-1 justify-center pt-6 shadow-xl" href="https://wa.me/919876543210">
                    <span className="material-symbols-outlined text-lg">chat</span> WhatsApp Now
                  </a>
                  <a className="bg-white/10 text-white px-8 py-5 rounded-md font-headline font-extrabold text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-white/20 transition-all flex-1 justify-center pt-6 border border-white/10 shadow-xl" href="tel:+919876543210">
                    <span className="material-symbols-outlined text-lg">call</span> Call Office
                  </a>
                </div>
              </div>
              <div className="mt-12 rounded-xl overflow-hidden h-64 relative grayscale contrast-125 opacity-70 group shadow-2xl">
                <img 
                  alt="Map Location" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-10000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9-FCir5P2qTbh4JszCIwHxY2A24p77ow_m7ARyKrnUlL4G61gspztwXkoYJV-x7JJvxnvXaA-RQhehKPXQYoPRufH9HAmPls_h-F4Oa8EDi2qL8enw1D1YIdpxziaoNjkTqFM80-noAiwGYYKnudv2OAxsc-Q3pcqg_PQWx27TwOjkRedPEVONOxMgEdy0ZZw7TQzlQ8NC1KEuMN7UTxKaB3Uh-JQkzswsFgACespF3CFe6w_JpnieTeuMMx27Kaaod6GxtpH3Co" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-brand-gold p-3 rounded-full shadow-[0_0_50px_rgba(201,168,76,0.6)] animate-bounce">
                    <span className="material-symbols-outlined text-brand-navy">pin_drop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Redundant Bottom Nav Removed - Now Global MobileNav */}
    </main>
  )
}
