import Link from "next/link";

export default function Breadcrumb({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className="relative z-10 overflow-hidden pt-[120px] pb-[60px] md:pt-[130px] lg:pt-[160px] dark:bg-dark">
      <div className="w-full h-px bg-gradient-to-r from-stroke/0 via-stroke dark:via-dark-3 to-stroke/0 absolute left-0 bottom-0"></div>
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="text-center">
              <h1 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                {children}
              </h1>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available.
              </p>

              <ul className="flex items-center justify-center gap-[10px]">
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-[10px] text-base font-medium text-dark dark:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-[10px] text-base font-medium text-body-color dark:text-dark-6"
                  >
                    <span className="text-body-color dark:text-dark-6"> / </span>
                    {children}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
