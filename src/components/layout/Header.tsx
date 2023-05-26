"use client";

import navigationIcon from "@/assets/icons/animated/navigation-menu.json";
import toggleThemeMode from "@/assets/icons/animated/toggle-dark-mode-light-mode.json";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { NAV_LINKS } from "./data";
import { NavLinksType } from "./layoutTypes";

const Header = () => {
  const pathname = usePathname();
  const themeModeRef = useRef<LottieRefCurrentProps>(null);
  const [lightMode, setLightMode] = useState(true);

  useEffect(() => {
    themeModeRef?.current?.setSpeed(5);
    if (lightMode) {
      themeModeRef?.current?.goToAndStop(0, true);
    } else {
      themeModeRef?.current?.goToAndStop(100, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleModeChange = () => {
    setLightMode((prev) => {
      if (prev) {
        themeModeRef?.current?.playSegments([0, 100], true);
        return !prev;
      }
      themeModeRef?.current?.playSegments([100, 0], true);
      return !prev;
    });
  };

  const handleModeToggleComplete = () => {
    const root = window.document.documentElement;
    if (!lightMode) {
      root.classList.add("dark");
    }
    if (lightMode) {
      root.classList.remove("dark");
    }
  };

  return (
    <div>
      <Container>
        <div className="flex justify-between items-center h-16">
          <div className="w-1/2 lg:w-1/6">
            <div className="flex items-end">
              <h1 className="text-3xl leading-none">
                <Link
                  href="/"
                  className="text-text-dark dark:text-white hover:no-underline"
                >
                  Sahariar
                </Link>
              </h1>
              <span className="block h-2 w-2 bg-primary rounded-full mb-[3px] ml-2 animation-pulse"></span>
            </div>
          </div>
          <div className="hidden lg:block w-4/6">
            <ul className="flex justify-center gap-8">
              {NAV_LINKS.map((link: NavLinksType) => (
                <li key={link.id}>
                  <Link
                    href={link.link}
                    className={`hover:text-primary ${
                      pathname === link.link
                        ? "text-primary"
                        : "text-text-dark dark:text-white"
                    } hover:no-underline`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/2 lg:w-1/6">
            <div className="flex justify-end">
              <Lottie
                className="h-12 w-12 cursor-pointer"
                animationData={toggleThemeMode}
                loop={false}
                lottieRef={themeModeRef}
                autoplay={false}
                onClick={handleModeChange}
                onComplete={handleModeToggleComplete}
              />
              <Lottie
                className="h-12 w-12 cursor-pointer lg:hidden"
                animationData={navigationIcon}
                loop={true}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
