import Link from "next/link";
import Image from "next/image";
import { footerSections, socialLinks, legalLinks } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/dev-cartoon-network/home/logo-CN-3.png?width=200&height=200"
                alt="Liga Toon Logo"
                width={150}
                height={150}
                className="mx-auto mb-4 drop-shadow-lg"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              O lar dos seus personagens favoritos! Descubra um universo de
              diversão com desenhos, jogos, vídeos e muito mais no Cartoon
              Network.
            </p>

            {/* Newsletter Signup */}
            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <h4 className="font-bold text-yellow-400 mb-2">
                📧 Newsletter Toon
              </h4>
              <p className="text-sm text-gray-300 mb-3">
                Receba as últimas novidades direto no seu email!
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-sm focus:outline-none focus:border-yellow-400"
                />
                <button className="px-4 py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500 transition-colors text-sm">
                  Inscrever
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+351 21 000 0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>suporte@cartoonnetwork.pt</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Brasil, Brasília</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="font-bold text-lg mb-4 text-yellow-400">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 text-sm"
                    >
                      {link.icon && <link.icon className="h-4 w-4" />}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Characters Strip */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {[
              {
                name: "Gumball",
                query: "gumball watterson small icon",
                image: "/dev-cartoon-network/home/character/char-gumball.png",
              },
              {
                name: "Finn",
                query: "finn adventure time small icon",
                image: "/dev-cartoon-network/home/character/char-finn.png",
              },
              {
                name: "Steven",
                query: "steven universe small icon",
                image: "/dev-cartoon-network/home/character/char-steven.png",
              },
              {
                name: "Robin",
                query: "robin teen titans go small icon",
                image: "/dev-cartoon-network/home/character/char-robin.png",
              },
              {
                name: "Ben 10",
                query: "ben 10 small icon",
                image: "/dev-cartoon-network/home/character/char-ben.png",
              },
            ].map((char, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-700 hover:border-yellow-400 transition-colors"
              >
                <Image
                  src={char.image}
                  alt={char.name}
                  width={48}
                  height={48}
                  className="object-cover rounded-full border-2 border-black w-12 h-12 shadow-md transform transition-transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Social Media & Apps */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div>
              <h4 className=" text-center md: font-bold text-yellow-400 mb-3">Siga-nos</h4>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    target="_blank"
                    className={`text-gray-400 ${social.color} transition-colors hover:text-yellow-400 duration-200 transform hover:scale-110`}
                  >
                    <social.icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
            </div>

            {/* App Download */}
            <div className="text-center md:text-right">
              <button className="px-4 py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500 transition-colors text-sm">
                <Link href="/aplicacoes">Baixe nossos apps</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs text-gray-400">
              {legalLinks.map((link, index) => (
                <span key={link.label} className="flex items-center">
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="ml-4 text-gray-600">|</span>
                  )}
                </span>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-xs text-gray-400 text-center md:text-right">
              <p>
                © {new Date().getFullYear()} Cartoon Network. Uma empresa da
                Warner Bros. Discovery.
              </p>
              <p className="mt-1">
                Todos os direitos reservados. CartoonNetwork.pt é parte da
                Turner Sports and Entertainment Digital Network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
