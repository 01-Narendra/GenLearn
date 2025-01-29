"use client";

import { Button } from "@/components/ui/button";
import ShinyButton from "@/components/ui/shiny-button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { user } = useUser();
  return (
    <div className="flex justify-between p-5 shadow-sm">
      <Image src={"/logo.png"} alt="logo" width={180} height={100} priority className="object-cover" />
      {!user ? (
        <Link className="pt-5" href="/sign-up">
          <ShinyButton text="Sign Up" />
        </Link>
      ) : (
        <Link className="pt-5" href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
