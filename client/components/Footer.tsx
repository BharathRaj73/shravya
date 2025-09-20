import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";
import Logo from "../../public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200" aria-label="Site footer">
      <div className="container mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        {/* Left Section - Brand Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <a href="#hero" className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="h-12 w-12 sm:h-14 sm:w-14 object-contain" />
            <span className="font-bold tracking-tight text-lg sm:text-xl text-blue-600">
              SHRAVYA<span className="text-green-600"> PROPERTIES</span>
            </span>
          </a>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Promoters · Builders · Developers<br />
            Contact us for buying or selling:<br />
            <span className="font-medium text-gray-800">BDA · BMRDA · BBMP · Revenue Sites</span>
          </p>
        </div>

        {/* Center Section - Contact Info */}
        <div className="flex flex-col sm:flex-row items-center md:items-start justify-center gap-6 text-sm text-gray-600 text-center md:text-left">
          <div>
            <p>Sy No 33/2A, Building No.1K<br />Krishnasagara, Hospalya, Sulikere Post<br />Kengeri Hobli, Bengaluru South - 560060</p>
            <a
              href="mailto:info@shravyaproperties.com"
              className="mt-2 inline-flex items-center gap-2 hover:text-indigo-600 transition-colors"
            >
              <Mail className="h-4 w-4" /> info@shravyaproperties.com
            </a>
          </div>
          <div>
            <p><span className="font-medium">Proprietor:</span> Mahesh R</p>
            <a
              href="tel:+918660459134"
              className="mt-2 inline-flex items-center gap-2 hover:text-indigo-600 transition-colors"
            >
              <Phone className="h-4 w-4" /> +91 8660459134
            </a>
          </div>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <h4 className="font-semibold text-gray-900 text-center md:text-right">Follow Us</h4>
          <div className="flex items-center gap-4">
            <a aria-label="Instagram" href="https://www.instagram.com/shravyaproperty?igsh=MWs1N3p3OTdydnBjNw==" className="text-gray-500 hover:text-pink-600 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=100087889284578" className="text-gray-500 hover:text-blue-600 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a aria-label="YouTube" href="https://youtube.com/@shravyaproperties-u4k?si=14iItY-Z_6HZvJes" className="text-gray-500 hover:text-red-600 transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Shravya Properties. All rights reserved.</p>
          <p className="italic text-gray-600 text-center md:text-right">Crafted with care for modern living.</p>
        </div>
      </div>
    </footer>
  );
}
