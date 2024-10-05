"use client";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import Author01Image from "@/public/assets/testimonials/author-01.jpg";
import Author02Image from "@/public/assets/testimonials/author-02.jpg";
import Author03Image from "@/public/assets/testimonials/author-03.jpg";

const testimonials = [
  {
    authorName: "Sabo Masties",
    authorRole: "Founder @ Rolex",
    image: Author01Image,
    message: `“Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.”`,
  },
  {
    authorName: "Musharof Chowdhury",
    authorRole: "Founder @ Ayro UI",
    image: Author02Image,
    message: `“Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.”`,
  },
  {
    authorName: "William Smith",
    authorRole: "Founder @ Trorex",
    image: Author03Image,
    message: `“Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.”`,
  },
  {
    authorName: "Sabo Masties",
    authorRole: "Founder @ Rolex",
    image: Author01Image,
    message: `“Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.”`,
  },
  {
    authorName: "Musharof Chowdhury",
    authorRole: "Founder @ Ayro UI",
    image: Author02Image,
    message: `“Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.”`,
  },
  {
    authorName: "William Smith",
    authorRole: "Founder @ Trorex",
    image: Author03Image,
    message: `“Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.”`,
  },
];

export default function Testimonials() {
  const swiperContainerRef = useRef<HTMLDivElement>(null);

  const swiperPrevRef = useRef<HTMLDivElement>(null);
  const swiperNextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!swiperContainerRef.current) return;
    if (!swiperPrevRef.current) return;
    if (!swiperNextRef.current) return;

    const swiper = new Swiper(swiperContainerRef.current, {
      modules: [Navigation],

      slidesPerView: 1,
      spaceBetween: 30,

      // Navigation arrows
      navigation: {
        prevEl: swiperPrevRef.current,
        nextEl: swiperNextRef.current,
      },

      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);
  return (
    <section
      id="testimonials"
      className="py-20 md:py-[120px] bg-gray-1 dark:bg-dark-2 overflow-hidden"
    >
      <div className="container px-4">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[485px] text-center">
              <span className="block mb-2 text-lg font-semibold text-primary">Testimonials</span>
              <h2 className="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                What our Clients Say
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available but the majority have
                suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-m-5">
          <div ref={swiperContainerRef} className="swiper testimonial-carousel common-carousel p-5">
            <div className="swiper-wrapper">
              {testimonials.map((testimonial, i) => (
                <div key={`swiper-slide-${i}`} className="swiper-slide">
                  <div
                    className="shadow-testimonial bg-white dark:bg-dark rounded-xl py-[30px] px-4 sm:px-[30px]"
                    data-wow-delay=".1s"
                  >
                    <div className="flex items-center gap-[2px] mb-[18px]">
                      {[...Array(5)].map((_, i) => (
                        <span key={`img-${i}`} className="text-[#FBB040]">
                          <svg
                            className="fill-current"
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8.94043 0.360474L10.9477 6.06481H17.4433L12.1882 9.59028L14.1955 15.2946L8.94043 11.7691L3.68538 15.2946L5.69263 9.59028L0.437576 6.06481H6.93318L8.94043 0.360474Z" />
                          </svg>
                        </span>
                      ))}
                    </div>
                    <p className="text-body-color dark:text-dark-6 text-base mb-6">
                      {testimonial.message}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt="author"
                          className="w-[50px] h-[50px] rounded-full overflow-hidden"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-dark dark:text-white">
                          {testimonial.authorName}
                        </h3>
                        <p className="text-xs text-body-secondary">{testimonial.authorRole}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center mt-[60px] gap-1">
              <div ref={swiperPrevRef} className="swiper-button-prev">
                <svg
                  className="fill-current"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.25 10.2437H4.57187L10.4156 4.29687C10.725 3.9875 10.725 3.50625 10.4156 3.19687C10.1062 2.8875 9.625 2.8875 9.31562 3.19687L2.2 10.4156C1.89062 10.725 1.89062 11.2063 2.2 11.5156L9.31562 18.7344C9.45312 18.8719 9.65937 18.975 9.86562 18.975C10.0719 18.975 10.2437 18.9062 10.4156 18.7687C10.725 18.4594 10.725 17.9781 10.4156 17.6688L4.60625 11.7906H19.25C19.6625 11.7906 20.0063 11.4469 20.0063 11.0344C20.0063 10.5875 19.6625 10.2437 19.25 10.2437Z" />
                </svg>
              </div>

              <div ref={swiperNextRef} className="swiper-button-next">
                <svg
                  className="fill-current"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.8 10.45L12.6844 3.2313C12.375 2.92192 11.8938 2.92192 11.5844 3.2313C11.275 3.54067 11.275 4.02192 11.5844 4.3313L17.3594 10.2094H2.75C2.3375 10.2094 1.99375 10.5532 1.99375 10.9657C1.99375 11.3782 2.3375 11.7563 2.75 11.7563H17.4281L11.5844 17.7032C11.275 18.0126 11.275 18.4938 11.5844 18.8032C11.7219 18.9407 11.9281 19.0094 12.1344 19.0094C12.3406 19.0094 12.5469 18.9407 12.6844 18.7688L19.8 11.55C20.1094 11.2407 20.1094 10.7594 19.8 10.45Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
