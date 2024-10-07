import Image from "next/image";

import Link from "@/components/ViewTransitionLink";

import TailgridsWhiteImage from "@/public/assets/brands/tailgrids-white.svg";
import TailgridsImage from "@/public/assets/brands/tailgrids.svg";

export default function MadeWithButton() {
  return (
    <Link
      target="_blank"
      rel="nofollow noopener"
      className="inline-flex items-center gap-[10px] py-2 px-[14px] rounded-lg bg-white dark:bg-dark-2 shadow-2 fixed bottom-8 left-4 sm:left-9 z-[999]"
      href="https://tailgrids.com/"
    >
      <span className="text-base font-medium text-dark-3 dark:text-dark-6">Made with</span>
      <span className="w-px h-4 block bg-stroke dark:bg-dark-3"></span>
      <span className="block max-w-[88px] w-full">
        <Image src={TailgridsImage} alt="tailgrids" className="w-auto h-auto dark:hidden" />
        <Image
          src={TailgridsWhiteImage}
          alt="tailgrids"
          className="w-auto h-auto hidden dark:block"
        />
      </span>
    </Link>
  );
}
