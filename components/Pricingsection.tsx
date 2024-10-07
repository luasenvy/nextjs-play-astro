import Link from "@/components/ViewTransitionLink";

const priceboxes = [
  {
    popular: false,
    packageName: "Starter",
    price: "25.00",
    subtitle: "Features",
    btn: "Purchase Now",
    purchaseLink: "/#",
    offerlist: [
      { title: "Up to 1 User" },
      { title: "All UI components" },
      { title: "Lifetime access" },
      { title: "Free updates" },
    ],
  },
  {
    popular: true,
    packageName: "Basic",
    price: "59.00",
    subtitle: "Features",
    btn: "Purchase Now",
    purchaseLink: "/#",
    offerlist: [
      { title: "Up to 1 User" },
      { title: "All UI components" },
      { title: "Lifetime access" },
      { title: "Free updates" },
    ],
  },
  {
    popular: false,
    packageName: "Premium",
    price: "99.00",
    subtitle: "Features",
    btn: "Purchase Now",
    purchaseLink: "/#",
    offerlist: [
      { title: "Up to 1 User" },
      { title: "All UI components" },
      { title: "Lifetime access" },
      { title: "Free updates" },
    ],
  },
];

export default function Pricingsection() {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white dark:bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">Pricing Table</span>
              <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:leading-[1.2] md:text-[40px]">
                Awesome Pricing Plan
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available but the majority have
                suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {priceboxes.map((pricebox, i) => (
            <div key={`pricebox-${i}`} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className={`wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl bg-white dark:bg-dark-2 py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-14`}
                data-wow-delay=".15s"
              >
                {pricebox.popular && (
                  <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-tl-md rounded-bl-md bg-primary py-2 px-5 text-base font-medium text-white">
                    Recommended
                  </p>
                )}

                <span className={`mb-5 block text-xl font-medium text-dark dark:text-white`}>
                  {pricebox.packageName}
                </span>
                <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:leading-[1.21] xl:text-[42px]">
                  <span className="text-xl font-medium">$</span>
                  <span className="ml-1 -tracking-[2px]">{pricebox.price}</span>
                  <span className="text-base font-normal text-body-color dark:text-dark-6">
                    Per Month
                  </span>
                </h2>

                <div className="mb-[50px]">
                  <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">
                    {pricebox.subtitle}
                  </h5>

                  <div className="flex flex-col gap-[14px]">
                    {pricebox.offerlist.map((item) => (
                      <p
                        key={`pricebox-${i}`}
                        className={`text-base text-body-color dark:text-dark-6`}
                      >
                        {item.title}
                      </p>
                    ))}
                  </div>
                </div>

                <Link
                  href={pricebox.purchaseLink}
                  className={`inline-block rounded-md bg-primary py-3 px-7 text-center text-base font-medium text-white transition hover:bg-blue-dark`}
                >
                  {pricebox.btn}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
