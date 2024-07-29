import Link from "next/link";

export const Menu = () => {
  return (
    <div className="flex flex-col mt-10 space-y-12 p-4 justify-center items-center bg-red-300 h-full z-10">
      <Link href="/posts">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/courses">Courses</Link>
      <Link href="/">Pages</Link>
      <Link href="/">Blog</Link>
    </div>
  );
};
