import { AiOutlineArrowRight } from "react-icons/ai";
import { ButtonProps } from "./buttonTypes";

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`button style1 size-md ${className || ""}`} {...props}>
      <div className="button-text">{children}</div>
      <div className="button-icon-wrapper">
        <AiOutlineArrowRight />
      </div>
    </button>
  );
};

export default Button;
