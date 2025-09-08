import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center space-x-4">
      <Link href="/gallery" className="hover:underline">
        Galerie
      </Link>
      <Link href="/contact" className="hover:underline">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;