import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";
import Logo from "../../public/logo.png";

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-border/60"
      aria-label="Site footer"
    >
      <div className="container mx-auto py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Left Section - Brand Info */}
        <div className="max-w-sm flex-1">
          <a href="#hero" className="flex items-center gap-2">
            {/* Logo Image */}
            <img src={Logo} alt=" " className="h-14 w-14 object-contain" />
            <span className="font-bold tracking-tight text-xl text-blue-600">
              SHRAVYA<span className="text-green-600"> PROPERTIES</span>
            </span>
          </a>
          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            Promoters · Builders · Developers
            <br />
            Contact us for buying or selling:
            <br />
            <span className="font-medium text-gray-800">
              BDA · BMRDA · BBMP · Revenue Sites
            </span>
          </p>
        </div>

        {/* Center Section - Contact */}
        <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-center gap-10 text-center sm:text-left">
          {/* Address & Email */}
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              Sy No 33/2A, Building No.1K <br />
              Krishnasagara, Hospalya, Sulikere Post <br />
              Kengeri Hobli, Bengaluru South - 560060
            </li>
            <li>
              <a
                href="mailto:info@shravyaproperties.com"
                className="flex items-center justify-center sm:justify-start gap-2 hover:text-indigo-600 transition-colors"
              >
                <Mail className="h-4 w-4" /> info@shravyaproperties.com
              </a>
            </li>
          </ul>

          {/* Proprietor & Phone */}
          <ul className="space-y-3 text-sm text-gray-700 min-w-[180px]">
            <li>
              <span className="font-medium">Proprietor:</span> Mahesh R
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <Phone className="h-4 w-4" />
              <a
                href="tel:+919986974999"
                className="hover:text-indigo-600 transition-colors"
              >
                +91 9986974999
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Links */}
        <div className="md:col-span-3 flex justify-center md:justify-end -mt-4">
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Follow Us</h4>
            <div className="flex items-center gap-5 justify-center md:justify-end">
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/shravyaproperty?igsh=MWs1N3p3OTdydnBjNw=="
                className="text-gray-500 hover:text-pink-600 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/profile.php?id=100087889284578&rdid=7IYgOGAnzN3ApFfT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1MLnecvzN9%2F#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                aria-label="YouTube"
                href="https://youtube.com/@shravyaproperties-u4k?si=14iItY-Z_6HZvJes"
                className="text-gray-500 hover:text-red-600 transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto py-6 text-xs text-gray-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Shravya Properties. All rights
            reserved.
          </p>
          <p className="italic text-gray-600">
            Crafted with care for modern living.
          </p>
        </div>
      </div>
    </footer>
  );
}
