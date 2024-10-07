import Image from "next/image";

import Link from "@/components/ViewTransitionLink";

import AyrouiWhiteImage from "@/public/assets/brands/ayroui-white.svg";
import AyrouiImage from "@/public/assets/brands/ayroui.svg";
import GraygridsWhiteImage from "@/public/assets/brands/graygrids-white.svg";
import GraygridsImage from "@/public/assets/brands/graygrids.svg";
import LineiconsWhiteImage from "@/public/assets/brands/lineicons-white.svg";
import LineiconsImage from "@/public/assets/brands/lineicons.svg";
import TailgridsWhiteImage from "@/public/assets/brands/tailgrids-white.svg";
import TailgridsImage from "@/public/assets/brands/tailgrids.svg";
import UideckWhiteImage from "@/public/assets/brands/uideck-white.svg";
import UideckImage from "@/public/assets/brands/uideck.svg";

const clients = [
  {
    ref: "https://tailgrids.com",
    image: GraygridsImage,
    whiteImage: GraygridsWhiteImage,
    name: "tailgrids",
  },
  {
    ref: "https://ayroui.com",
    image: LineiconsImage,
    whiteImage: LineiconsWhiteImage,
    name: "ayroui",
  },
  {
    ref: "https://uideck.com",
    image: UideckImage,
    whiteImage: UideckWhiteImage,
    name: "uideck",
  },
  {
    ref: "https://graygrids.com",
    image: AyrouiImage,
    whiteImage: AyrouiWhiteImage,
    name: "graygrids",
  },
  {
    ref: "https://lineicons.com",
    image: TailgridsImage,
    whiteImage: TailgridsWhiteImage,
    name: "lineicons",
  },
];

export default function Clients() {
  return (
    <section className="pb-20 dark:bg-dark">
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11">
          {clients.map((client, i) => (
            <Link key={`link-${i}`} href={client.ref} target="_blank" rel="nofollow noopner">
              <Image src={client.image} alt={client.name} className="w-auto h-auto dark:hidden" />
              <Image
                src={client.whiteImage}
                alt={client.name}
                className="w-auto h-auto hidden dark:block"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
