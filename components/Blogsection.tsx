import Image from "next/image";

import Link from "@/components/ViewTransitionLink";

import posts from "@/lib/data/posts";

export default function Blogsection() {
  return (
    <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-white dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[485px] text-center">
              <span className="block mb-2 text-lg font-semibold text-primary">Our Blogs</span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                Our Recent News
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available but the majority have
                suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <ul className="-mx-4 flex flex-wrap">
          {posts.slice(0, 3).map((blogPostEntry, i) => (
            <li key={`post-${i}`} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <Link
                className="wow fadeInUp group block mb-10"
                data-wow-delay=".1s"
                href={`/blog/${blogPostEntry.metadata.slug}`}
              >
                <div className="mb-8 overflow-hidden rounded-[5px]">
                  <span className="block">
                    <Image
                      src={blogPostEntry.metadata.image.src}
                      alt={blogPostEntry.metadata.image.alt}
                      width={408}
                      height={255}
                      className="w-full ease-in duration-300 group-hover:rotate-6 group-hover:scale-125"
                    />
                  </span>
                </div>
                <div>
                  <span className="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
                    {new Date(blogPostEntry.metadata.publishDate).toDateString()}
                  </span>
                  <h3>
                    <span className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                      {blogPostEntry.metadata.title}
                    </span>
                  </h3>
                  <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">
                    {blogPostEntry.metadata.content.slice(0, 100)}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
