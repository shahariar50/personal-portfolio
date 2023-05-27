"use client";

import { useEffect, useRef, useState } from "react";
import { GroupButtonListType } from "./buttonTypes";

type ButtonGroupType = {
  onClick?: (val: GroupButtonListType) => void;
  buttonList: GroupButtonListType[];
};

const ButtonGroup: React.FC<ButtonGroupType> = ({ onClick, buttonList }) => {
  const [active, setActive] = useState("");
  const childRef = useRef<HTMLButtonElement[]>([]);
  const bgRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const child = childRef.current;
    const bg = bgRef.current;
    const activeChild = child?.find((item: any) =>
      item.attributes.getNamedItem("class").value.includes("active")
    );
    bg?.style?.setProperty("height", `${activeChild?.clientHeight || 0}px`);
    bg?.style?.setProperty("width", `${activeChild?.clientWidth || 0}px`);
    bg?.style?.setProperty("left", `${activeChild?.offsetLeft || 0}px`);
    bg?.style?.setProperty("top", `${activeChild?.offsetTop || 0}px`);
  }, [active]);

  useEffect(() => {
    setActive(buttonList[0].value);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 relative">
      <span
        className="bg-primary absolute rounded-md transition-all duration-300 -z-10"
        ref={bgRef}
      ></span>
      {buttonList.map((button, index) => (
        <button
          className={`text-[#6e6e6e] ${
            active === button.value ? "active" : ""
          } py-3 px-6 rounded-md`}
          key={button.id}
          onClick={() => {
            setActive(button.value);
            onClick && onClick(button);
          }}
          ref={(el) => {
            // @ts-ignore
            childRef.current[index] = el;
          }}
        >
          {button.title}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
