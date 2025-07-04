import Link from "next/link"
import Image from "next/image"

const CNLogo = () => (
  <Link href="/" aria-label="Cartoon Network Home">
    <Image
      src="/home/logo-CN-1.png" // Caminho da imagem dentro da pasta /public
      alt="Cartoon Network Logo"
      width={120}
      height={60}
      className="cursor-pointer"
    />
  </Link>
)

export default CNLogo