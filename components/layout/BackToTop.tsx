"use client";

import classnames from "classnames";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function BackToTop() {
  const backToTopRef = useRef<HTMLAnchorElement>(null);

  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    if (!backToTopRef.current) return;

    const handleScroll = () =>
      setIsSticky(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50);

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [backToTopRef]);

  const handleClickBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      href="#"
      ref={backToTopRef}
      onClick={handleClickBackToTop}
      className={classnames(
        "back-to-top fixed bottom-8 right-8 left-auto z-[999] h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark",
        {
          flex: isSticky,
          hidden: !isSticky,
        }
      )}
    >
      <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span>
    </Link>
  );
}
