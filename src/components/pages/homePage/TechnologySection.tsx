/* eslint-disable react/no-unescaped-entities */
import SkillCard from "@/components/common/cards/SkillCard";
import { SkillCardType } from "@/components/common/cards/cardTypes";
import Container from "@/components/layout/Container";
import { SKILL_LIST } from "./data";

const TechnologySection = () => {
  return (
    <section className="py-10 lg:py-20">
      <Container>
        <div className="mb-8 lg:mb-16">
          <h2 className="text-center">Technologies I'm proficient in.</h2>
        </div>
        <div className="flex -m-1 lg:-m-2 flex-wrap">
          {SKILL_LIST.map((skill: SkillCardType) => (
            <div
              className="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-1 lg:p-2"
              key={skill.id}
            >
              <SkillCard
                name={skill.name}
                experience={skill.experience}
                logo={skill.logo}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechnologySection;
