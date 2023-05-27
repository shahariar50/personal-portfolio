"use client";
/* eslint-disable react/no-unescaped-entities */
import ButtonGroup from "@/components/common/buttons/ButtonGroup";
import SkillCard from "@/components/common/cards/SkillCard";
import { SkillCardType } from "@/components/common/cards/cardTypes";
import Container from "@/components/layout/Container";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BUTTON_LIST, SKILL_LIST } from "./data";

const TechnologySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <section className="py-10 lg:py-20">
      <Container>
        <div className="mb-8 lg:mb-16">
          <h2 className="text-center">Technologies I'm proficient in.</h2>
        </div>
        <div className="mb-3 lg:mb-6">
          <ButtonGroup
            buttonList={BUTTON_LIST}
            onClick={(val) => setSelectedCategory(val.value)}
          />
        </div>
        <motion.div layout className="flex -m-1 lg:-m-2 flex-wrap">
          <AnimatePresence>
            {SKILL_LIST.map(
              (skill: SkillCardType) =>
                (selectedCategory === skill.category ||
                  selectedCategory === "all") && (
                  <motion.div
                    className="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-1 lg:p-2"
                    key={skill.id}
                    layout
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <SkillCard
                      name={skill.name}
                      experience={skill.experience}
                      logo={skill.logo}
                    />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
};

export default TechnologySection;
