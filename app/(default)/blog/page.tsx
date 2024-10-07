import Image from "next/image";

import Pagination from "@/components/Pagination";
import Link from "@/components/ViewTransitionLink";

import Breadcrumb from "@/components/layout/Breadcrumb";

import posts from "@/lib/data/posts";

export default function BlogPage() {
  return (
    <>
      <Breadcrumb>Blog</Breadcrumb>
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-dark">
        <div className="container">
          <ul className="-mx-4 flex flex-wrap">
            {posts.map((blogPostEntry, i) => (
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
                        width={348}
                        height={207}
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
                      {blogPostEntry.metadata.postDetails.paraOne.slice(0, 100)}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <Pagination />
        </div>
      </section>
    </>
  );
}
