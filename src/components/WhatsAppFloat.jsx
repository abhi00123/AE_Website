export default function WhatsAppFloat() {
  const whatsappNumber = "919876543210";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a 
      className="hidden md:block fixed bottom-8 right-8 z-[100] group" 
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      {/* Ping Animation Effect */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25 group-hover:hidden"></div>
      
      {/* Main Button Shell */}
      <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.3)] flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 active:scale-95">
        {/* Custom SVG Icon matching reference image */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.982-.363-1.747-.756-2.879-2.506-2.966-2.62-.088-.113-.719-.958-.719-1.828 0-.871.454-1.299.614-1.472.161-.173.348-.217.466-.217h.332c.106 0 .249.009.356.258.107.248.374.912.406.983.033.07.054.152.008.243-.046.091-.069.146-.139.227-.069.082-.147.183-.208.243-.07.07-.143.147-.062.288.081.141.36.593.772.959.53.471 1.006.634 1.15.713.144.08.229.066.315-.033.085-.1.365-.425.463-.57.097-.146.194-.121.332-.07.138.051.874.413 1.025.489.151.076.252.114.288.177.036.063.036.364-.108.769z" />
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 21.167c-5.054 0-9.167-4.113-9.167-9.167s4.113-9.167 9.167-9.167 9.167 4.113 9.167 9.167-4.113 9.167-9.167 9.167z" />
        </svg>
      </div>
    </a>
  )
}
