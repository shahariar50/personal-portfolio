"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { NAV_LINKS } from "./data";
import { NavLinksType } from "./layoutTypes";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div>
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="w-1/6">
            <div className="flex items-end">
              <h1 className="text-3xl leading-none">
                <Link href="/">Sahariar</Link>
              </h1>
              <span className="block h-2 w-2 bg-primary rounded-full mb-[3px] ml-2 animation-pulse"></span>
            </div>
          </div>
          <div className="w-4/6">
            <ul className="flex justify-center gap-8">
              {NAV_LINKS.map((link: NavLinksType) => (
                <li key={link.id}>
                  <Link
                    href={link.link}
                    className={`${
                      pathname === link.link
                        ? "text-primary"
                        : "hover:text-primary"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/6"></div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
