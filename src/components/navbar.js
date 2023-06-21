import Link from "next/link";
import Image from "next/image";

const links = [{ href: "/", label: "Home" }];

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white shadow-lg p-4 fixed top-0 left-0 w-full z-[100]">
      <button>
        <Image
          src="/images/logo.png"
          alt="flashcards-ai"
          width={100}
          height={100}
          className="object-cover"
        />
      </button>
    </nav>
  );
};

export default Navbar;
