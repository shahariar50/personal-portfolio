/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/common/buttons/Button";
import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

const BannerSection = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-wrap py-20 lg:py-40">
          <div className="w-full lg:w-8/12 xl:w-7/12 order-1 lg:order-0">
            <h3 className="mb-2 lg:mb-4">Hi! I am</h3>
            <h1 className="mb-4 lg:mb-8">
              Abdullah Al <span className="text-primary">Sahariar</span>
            </h1>
            {/* <p className="max-w-[700px] mb-2">
              A passonate frontend developer, who has been immersed in the world
              of programming since 2018, dedicated to creating modern and
              interactive interfaces, thrive on learning and experimenting with
              new technologies, constantly seeking challenges to overcome and
              excel at.
            </p> */}
            <p className="max-w-[700px]">
              A frontend developer with a passion for innovation, Specialize in
              harnessing the potential of <strong>JavaScript</strong>,{" "}
              <strong>TypeScript</strong>, <strong>ReactJS</strong>, and{" "}
              <strong>Next.js</strong> to create dynamic and cutting-edge web
              solutions.
            </p>
            <p className="max-w-[700px] mb-4 lg:mb-8">
              Currently, I'm working as a SDE II (Frontend) at{" "}
              <Link href="https://shikho.com/" target="_blank">
                Shikho Technologies Bangladesh Ltd
              </Link>
              .
            </p>
            <ul className="flex gap-4 mb-4 lg:mb-8">
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
            <Button>Contact Me</Button>
          </div>
          <div className="w-full lg:w-4/12 xl:w-5/12 order-0 lg:order-1 lg:text-center mb-8">
            <div className="inline-block relative">
              <Image
                height={400}
                width={400}
                src="/images/self1.jpg"
                alt="sahariar"
                className="mx-auto max-w-[300px] lg:max-w-full"
              />
              <span className="absolute h-full w-full top-2 left-2 bg-primary -z-10 blur-sm opacity-50"></span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BannerSection;
