import Image from "next/image";
import { SkillCardType } from "./cardTypes";

const SkillCard: React.FC<SkillCardType> = ({ name, experience, logo }) => {
  return (
    <div className="flex w-full gap-4 p-3 bg-gray-200 rounded-md items-center">
      <div className="w-12 h-12 shrink-0">
        <Image
          className="h-full w-full object-contain"
          src={logo || ""}
          height={50}
          width={50}
          alt={name}
        />
      </div>
      <div className="grow">
        <h5>{name}</h5>
        <p className="m-0 text-gray-500 text-sm">{experience}</p>
      </div>
    </div>
  );
};

export default SkillCard;
