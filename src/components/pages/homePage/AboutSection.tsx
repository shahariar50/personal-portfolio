/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/layout/Container";
import Link from "next/link";
import { GrFacebookOption, GrGithub, GrLinkedinOption } from "react-icons/gr";

const AboutSection = () => {
  return (
    <section className="pb-20">
      <Container>
        <div className="mb-16">
          <h2 className="text-center">Want to know more about me?</h2>
        </div>
        <div className="max-w-[1200px] mx-auto text-center mb-8">
          <p>
            With an extensive professional background spanning over four years,
            I currently serve as a Frontend Software Development Engineer II
            (SDE II) at Shikho, leveraging my expertise in frontend development.
            Throughout my career, I have contributed my skills and knowledge to
            various esteemed companies in Bangladesh, honing my craft and
            gaining valuable experience.
          </p>
          <p>
            My passion lies in crafting modern and interactive interfaces,
            consistently seeking opportunities to expand my horizons by
            embracing new technologies. I am driven by challenges that allow me
            to enhance my skills and achieve excellence in my work. By staying
            updated with the latest advancements, I actively explore
            cutting-edge tools, frameworks, and methodologies, understanding
            that overcoming obstacles is integral to my personal and
            professional growth.
          </p>
          <p>
            By skillfully blending elegant design principles with efficient
            code, I strive to deliver seamless user experiences in every project
            I undertake. I maintain a strong commitment to remaining at the
            forefront of industry trends, ensuring that my work resonates with
            the ever-evolving needs of users.
          </p>
        </div>
        <div>
          <h4 className="text-center mb-6">Connect me on:</h4>
          <ul className="flex justify-center gap-4">
            <li>
              <Link
                href="https://github.com/shahariar50"
                className="bg-primary bg-opacity-70 hover:bg-opacity-100 text-text-dark h-8 w-8 inline-flex justify-center items-center rounded-full"
                target="_blank"
              >
                <GrGithub />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/abdullah-al-shahariar/"
                className="bg-primary bg-opacity-70 hover:bg-opacity-100 text-text-dark h-8 w-8 inline-flex justify-center items-center rounded-full"
                target="_blank"
              >
                <GrLinkedinOption />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/shahriar.touhid/"
                className="bg-primary bg-opacity-70 hover:bg-opacity-100 text-text-dark h-8 w-8 inline-flex justify-center items-center rounded-full"
                target="_blank"
              >
                <GrFacebookOption />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
