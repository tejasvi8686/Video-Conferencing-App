import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logos from "../public/icons/logo.svg";

function Logo() {
  return (
    <Link
      href="/"
      className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text hover:cursor-pointer"
    >
      <Image src={Logos} height={50} width={50} alt="logo" />
    </Link>
  );
}

export default Logo;
