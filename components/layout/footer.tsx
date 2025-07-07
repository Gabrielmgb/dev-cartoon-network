import Link from "next/link";
import Image from "next/image";
import { footerLinks, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/dev-cartoon-network/home/logo-CN-3.png?width=200&height=200"
              alt="Liga Toon Logo"
              width={150}
              height={150}
              className="mx-auto mb-4 drop-shadow-lg"
            />
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="hover:text-white transition-colors"
              >
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center text-xs mt-8 border-t border-gray-800 pt-6">
          <p>
            O uso deste site significa que aceita os Termos de Uso. TM & ©{" "}
            {new Date().getFullYear()} Cartoon Network. Uma empresa da Warner
            Bros. Discovery. Todos os direitos reservados. CartoonNetwork.pt é
            parte da Turner Sports and Entertainment Digital Network.
          </p>
        </div>
      </div>
    </footer>
  );
}
