import Arrow from "./arrow";
import Hero from "./Hero";
const LeftContent = () => {
  return (
    <div className="w-1/3 h-full flex flex-col justify-between">
      <Hero />
      <Arrow />
    </div>
  );
};

export default LeftContent;
