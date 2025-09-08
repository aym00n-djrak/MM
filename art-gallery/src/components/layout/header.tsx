import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";

function Header() {
  return (
    <header className="flex items-center gap-3 p-4 border-b border-gray-300">
      <Link href="/" className="flex items-center gap-2">
        <Image
        src="/palette.png"
        alt="Art Gallery Logo"
        width={50} 
        height={50} 
        />        
        <span className="font-bold text-lg">Marc Monceau - Artiste Peintre</span>
      </Link>
      <div className="ml-auto">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;