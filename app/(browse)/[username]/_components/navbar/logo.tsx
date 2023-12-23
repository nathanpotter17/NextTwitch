import Image from "next/image";
import { IBM_Plex_Sans } from "next/font/google";

import { cn } from "@/lib/utils";
import Link from "next/link";

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
          <Image src="/spooky.svg" alt="nextstreamer" height={32} width={32} />
        </div>
        <div className={cn("hidden lg:block", ibm.className)}>
          <p className="text-lg font-semibold">Next Streamer</p>
          <p className="text-sm text-muted-foreground">Lets Stream!</p>
        </div>
      </div>
    </Link>
  );
};
