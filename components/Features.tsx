import Image from "next/image";

import Link from "@/components/ViewTransitionLink";

import Icon01Image from "@/public/assets/features/icon-01.svg";
import Icon02Image from "@/public/assets/features/icon-02.svg";
import Icon03Image from "@/public/assets/features/icon-03.svg";
import Icon04Image from "@/public/assets/features/icon-04.svg";

const features = [
  {
    icon: Icon01Image,
    title: "Free and Open-Source",
    ref: "#",
    refTitle: "Learn More",
    description: "Lorem Ipsum is simply dummy text of the printing and industry.",
  },
  {
    icon: Icon02Image,
    title: "Multipurpose Template",
    ref: "#",
    refTitle: "Learn More",
    description: "Lorem Ipsum is simply dummy text of the printing and industry.",
  },
  {
    icon: Icon03Image,
    title: "High-quality Design",
    ref: "#",
    refTitle: "Learn More",
    description: "Lorem Ipsum is simply dummy text of the printing and industry.",
  },
  {
    icon: Icon04Image,
    title: "All Essential Elements",
    ref: "#",
    refTitle: "Learn More",
    description: "Lorem Ipsum is simply dummy text of the printing and industry.",
  },
];

export default function Features() {
  return (
    <section className="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px] dark:bg-dark">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 mx-auto max-w-[485px] lg:mb-[70px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">Features</span>
              <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                Main Features Of Play
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available but the majority have
                suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {features.map((feature, i) => (
            <div key={`feature-${i}`} className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className="wow fadeInUp group mb-12" data-wow-delay=".1s">
                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                  <span className="absolute top-0 left-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                  <Image className="w-auto h-auto" src={feature.icon} alt="icon" />
                </div>
                <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                  {feature.title}
                </h4>
                <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                  {feature.description}
                </p>
                <Link
                  href={feature.ref}
                  className="text-base font-medium text-dark dark:text-white hover:text-primary dark:hover:text-primary"
                >
                  {feature.refTitle}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
