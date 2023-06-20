import Link from 'next/link'

const links = [
    { href: '/', label: 'Home' }
];

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white shadow-lg p-4 fixed top-0 left-0 w-full z-[100]">
        Flashcards AI
    </nav>
  )
}

export default Navbar;