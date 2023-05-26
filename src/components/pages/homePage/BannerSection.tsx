/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/common/buttons/Button";
import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

const BannerSection = () => {
  return (
    <div>
      <Container>
        <div className="flex py-40">
          <div className="w-7/12">
            <h2 className="text-4xl mb-4">Hi! I am</h2>
            <h1 className="text-5xl mb-8">
              Abdullah Al <span className="text-primary">Sahariar</span>
            </h1>
            <p className="max-w-[700px] mb-2">
              A passonate frontend developer, who has been immersed in the world
              of programming since 2018, dedicated to creating modern and
              interactive interfaces, thrive on learning and experimenting with
              new technologies, constantly seeking challenges to overcome and
              excel at.
            </p>
            <p className="max-w-[700px] mb-8">
              Currently, I'm working as a SDE II (Frontend) at{" "}
              <Link href="https://shikho.com/" target="_blank">
                Shikho Technologies Bangladesh Ltd
              </Link>
              .
            </p>
            <ul className="flex gap-4 mb-8">
              <li>
                <Image
                  height={40}
                  width={40}
                  src="/images/icons/javascript.png"
                  alt="javascript"
                />
              </li>
              <li>
                <Image
                  height={40}
                  width={40}
                  src="/images/icons/typescript.png"
                  alt="javascript"
                />
              </li>
              <li>
                <picture>
                  <img
                    src="/images/icons/reactjs.png"
                    alt="javascript"
                    className="h-10"
                  />
                </picture>
              </li>
              <li>
                <picture>
                  <img
                    src="/images/icons/nextjs.png"
                    alt="javascript"
                    className="h-10"
                  />
                </picture>
              </li>
            </ul>
            <div>
              <Button>Contact Me</Button>
            </div>
          </div>
          <div className="w-5/12">
            <div className="inline-block relative">
              <Image
                height={400}
                width={400}
                src="/images/self1.jpg"
                alt="sahariar"
                className="mx-auto"
              />
              <span className="absolute h-full w-full top-2 left-2 bg-primary -z-10 blur-sm opacity-50"></span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerSection;
