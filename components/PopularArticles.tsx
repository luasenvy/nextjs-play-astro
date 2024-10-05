import Image from "next/image";

import Link from "next/link";

import ArticleAuthor01Image from "@/public/assets/blog/article-author-01.png";
import ArticleAuthor02Image from "@/public/assets/blog/article-author-02.png";
import ArticleAuthor03Image from "@/public/assets/blog/article-author-03.png";
import ArticleAuthor04Image from "@/public/assets/blog/article-author-04.png";

const articles = [
  {
    image: ArticleAuthor01Image,
    title: "Create engaging online courses your student…",
    author: "Glomiya Lucy",
  },
  {
    image: ArticleAuthor02Image,
    title: "The ultimate formula for launching online course",
    author: "Andrio jeson",
  },
  {
    image: ArticleAuthor03Image,
    title: "50 Best web design tips & tricks that will help you",
    author: "Samoyel Dayno",
  },
  {
    image: ArticleAuthor04Image,
    title: "The 8 best landing page builders, reviewed",
    author: "Andrio Glori",
  },
];

export default function PopularAtricles() {
  return (
    <div className="-mx-4 mb-8 flex flex-wrap">
      <div className="w-full px-4">
        <h2
          className="wow fadeInUp relative pb-5 text-2xl font-semibold text-dark dark:text-white sm:text-[28px]"
          data-wow-delay=".1s"
        >
          Popular Articles
        </h2>
        <span className="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
      </div>

      {articles.map((article, i) => (
        <div key={`article-${i}`} className="w-full px-4 md:w-1/2 lg:w-full">
          <div
            className="wow fadeInUp mb-5 flex w-full items-center border-b border-stroke dark:border-dark-3 pb-5"
            data-wow-delay=".1s"
          >
            <div className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-full">
              <Image src={article.image} alt="image" className="w-full" />
            </div>
            <div className="w-full">
              <h4>
                <Link
                  href="#"
                  className="mb-1 inline-block text-lg font-medium leading-snug text-dark dark:text-dark-6 hover:text-primary dark:hover:text-primary lg:text-base xl:text-lg"
                >
                  {article.title}
                </Link>
              </h4>
              <p className="text-sm text-body-color dark:text-dark-6">{article.author}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
