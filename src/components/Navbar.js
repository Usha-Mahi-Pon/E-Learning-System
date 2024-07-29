"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "./Menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64  relative">
      <Link href="/" className="text-xl">
        Learners Hub
      </Link>
      <div className="sm:hidden">
        <button onClick={toggleMenu}>Menu</button>
      </div>

      {/* Desktop menu */}
      <div className="hidden sm:flex gap-10 ">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/">Contact us</Link>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white sm:hidden">
          <Menu />
        </div>
      )}
    </div>
  );
};

export default Navbar;
