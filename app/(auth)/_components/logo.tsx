import Image, { ImageLoader } from "next/image";
import { IBM_Plex_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 p-4">
      <div className="bg-white rounded-full p-1">
        <Image src="/spooky.svg" alt="" width={80} height={80} />
      </div>
      <div className={cn("flex flex-col items-center", ibm.className)}>
        <p className="text-xl font-semibold">Next.Streamer</p>
        <p className="text-sm text-muted-foreground">Let&apos;s Stream!</p>
      </div>
    </div>
  );
};
