/* eslint-disable react/no-unescaped-entities */
import SkillCard from "@/components/common/cards/SkillCard";
import Container from "@/components/layout/Container";

const TechnologySection = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-8 lg:mb-16">
          <h2 className="text-center">Technologies I'm proficient in.</h2>
        </div>
        <div className="flex -m-2 flex-wrap">
          <div className="w-1/6 p-2">
            <SkillCard
              name="Javascript"
              experience="4yrs 2m"
              logo="/images/icons/javascript.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="Typescript"
              experience="2yrs"
              logo="/images/icons/typescript.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="Reactjs"
              experience="3yrs 8m"
              logo="/images/icons/reactjs.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="Nextjs"
              experience="1yr 6m"
              logo="/images/icons/nextjs.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="Redux"
              experience="2yrs"
              logo="/images/icons/redux.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="Apollo Graphql"
              experience="1yr 2m"
              logo="/images/icons/apollo-graphql.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="React Query"
              experience="1yr"
              logo="/images/icons/react-query.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="Material UI"
              experience="2yrs 4m"
              logo="/images/icons/material-ui.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="Tailwind CSS"
              experience="3yrs"
              logo="/images/icons/tailwind.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="React Hook Form"
              experience="3yrs"
              logo="/images/icons/react-hook-form.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="Apex Chart"
              experience="3yrs"
              logo="/images/icons/apex-chart.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="AntD"
              experience="1yr 7m"
              logo="/images/icons/antd.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="Git"
              experience="1yr 2m"
              logo="/images/icons/git.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="HTML5"
              experience="1yr 2m"
              logo="/images/icons/html5.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="CSS3"
              experience="1yr 2m"
              logo="/images/icons/css3.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="Jquery"
              experience="1yr 2m"
              logo="/images/icons/jquery.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="SCSS"
              experience="1yr 2m"
              logo="/images/icons/scss.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="Bootstrap"
              experience="1yr 2m"
              logo="/images/icons/bootstrap-5.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="Yarn"
              experience="1yr 2m"
              logo="/images/icons/yarn.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="NPM"
              experience="1yr 2m"
              logo="/images/icons/npm.png"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="REST"
              experience="1yr 2m"
              logo="/images/icons/rest-api.jpg"
            />
          </div>
          <div className="w-1/6 p-2">
            <SkillCard
              name="JSON"
              experience="1yr 2m"
              logo="/images/icons/json.png"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TechnologySection;
