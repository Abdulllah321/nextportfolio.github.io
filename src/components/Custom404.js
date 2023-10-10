// components/Custom404.js
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="error-page text-[--dark] flex items-center w-screen h-screen justify-center  text-center flex-col ">
      <h1 className="text-7xl">404 - Page Not Found</h1>
      <p className="text-5xl pt-8">The page you are looking for does not exist.</p>
      <Link href="/">
        <button className="px-8 py-4 rounded-lg mt-8 bg-[--dark] border border-solid border-[--light] text-[--light] ">Go back to home</button>
      </Link>
    </div>
  );
};

export default Custom404;
