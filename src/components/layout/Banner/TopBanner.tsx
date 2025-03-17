import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopBanner = () => {
  return (
    <div className="bg-coastal-darkBrown text-white py-2 text-center relative">
      <p className="text-xs md:text-sm">
        Sign up and get 20% off to your first order. <Link href="#" className="underline">Sign Up Now</Link>
      </p>
      <Button
        variant="ghost"
        className="hover:bg-transparent absolute right-0 top-1/2 -translate-y-1/2 w-fit h-fit p-1 hidden sm:flex"
        size="icon"
        type="button"
        aria-label="close banner"
      >
        <Image
          priority
          src="/icons/times.svg"
          height={13}
          width={13}
          alt="close banner"
        />
      </Button>
    </div>
  );
};

export default TopBanner;
