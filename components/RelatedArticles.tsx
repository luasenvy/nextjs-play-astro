import Image from "next/image";

import Link from "next/link";

import posts from "@/lib/data/posts";

export default function RelatedArticles() {
  return (
    <div>
      <div className="-mx-4 flex flex-wrap">
        <div className="wow fadeInUp mt-14 w-full px-4" data-wow-delay=".2s">
          <h2 className="relative pb-5 text-2xl font-semibold text-dark dark:text-white sm:text-[36px]">
            Related Articles
          </h2>
          <span className="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
        </div>
      </div>

      <ul className="-mx-4 flex flex-wrap">
        {posts.map((blogPostEntry, i) => {
          if (blogPostEntry.metadata.category === "related") {
            return (
              <li key={`post-item-${i}`} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <Link
                  className="wow fadeInUp group block mb-10"
                  data-wow-delay=".1s"
                  href={`/blog/${blogPostEntry.metadata.slug}`}
                >
                  <div className="mb-8 overflow-hidden rounded-[5px]">
                    <span className="block">
                      <Image
                        width={408}
                        height={242}
                        src={blogPostEntry.metadata.image.src}
                        alt={blogPostEntry.metadata.image.alt}
                        className="w-full ease-in duration-300 group-hover:rotate-6 group-hover:scale-125"
                      />
                    </span>
                  </div>
                  <div>
                    <span className="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
                      {new Date(blogPostEntry.metadata.publishDate).toDateString()}
                    </span>
                    <h3>
                      <span className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                        {blogPostEntry.metadata.title}
                      </span>
                    </h3>
                    <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">
                      {blogPostEntry.metadata.postDetails.paraOne.slice(0, 100)}
                    </p>
                  </div>
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
