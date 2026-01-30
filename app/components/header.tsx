"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return(
        <header className=" flex items-center justify-around p-3 shadow-lg">
        <div className="flex items-center gap-3">
        <Image
          src="/images/image-copy.png"
          alt="JTJ Multiserviços"
          width={165}
          height={55}
          priority
        />
      </div>
        
        <Link href="/agendamento" className="bg-green-600 text-white hover:bg-green-500 px-4 py-2 rounded-lg font-medium transition cursor-pointer ">
          Agendar agora
        </Link>
      </header>
    );
}