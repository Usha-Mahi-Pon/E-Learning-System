import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-gray-100 text-sm mt-24 py-24
    "
    >
      {/* top  */}
      <div className="flex flex-col  md:flex-row justify-between gap-24">
        {/* left  */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <p>318, Gold Corner, Sector 17, Vashi , Chennai </p>
          <span className="font-semibold">ushamahipon@gmail.com</span>
          <span className="font-semibold">+91 99427 54321</span>
          <div className="">
            <span className="font-semibold ">Follow on Social Media</span>
            <Image
              src="https://i.pinimg.com/564x/3a/31/69/3a3169489b0d54fdc9ab7e700051f42c.jpg"
              alt=""
              height={200}
              width={200}
              className="rounded-md mt-3"
            />
          </div>
        </div>
        {/* center   */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col gap-8">
            <h1 className="font-medium text-lg">Explore</h1>
            <div className="flex flex-col gap-8">
              <Link href="/">Home</Link>
              <Link href="/">About Us</Link>
              <Link href="/">Courses</Link>
              <Link href="/">Blog</Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-medium text-lg">Information</h1>
            <div className="flex flex-col gap-8">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Membership</Link>
              <Link href="/">Purchases Guide</Link>
              <Link href="/">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
      {/* bottom   */}
      <div className="text-center mt-8">&copy; 2024 Kumaran</div>
    </div>
  );
};

export default Footer;
