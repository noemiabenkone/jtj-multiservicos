

import { Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        
        <p className="text-sm text-white/80">
          © {new Date().getFullYear()} JTJ Multisserviços. Todos os direitos reservados.
        </p>

       
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5511970330688"
            target="_blank"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg transition"
          >
            <MessageCircle size={18} />
            <span className="text-sm font-medium">WhatsApp</span>
          </a>

          <div className="flex items-center gap-2 text-sm text-white/80">
            <Phone size={16} />
            <span>(11) 97033-0688</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
