import { ContainerProps } from "./layoutTypes";

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`container mx-auto px-4 ${className || ""}`}>
      {children}
    </div>
  );
};

export default Container;
