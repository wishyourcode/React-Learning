import Buttonb from "./Buttonb";

const Hero = (props) => {
  const { Index, setIndex, setUserData, printUserData } = props;
  return (
    <div>
      <div className="bg-red-300 overflow-auto h-screen">
        <h1 className="text-center text-2xl text-white bg-amber-900 h-10 flex justify-center">
          Radhe Radhe
        </h1>
        <br />
        <div className="flex flex-wrap p-2 gap-4">{printUserData}</div>
        <Buttonb Index={Index} setIndex={setIndex} setUserData={setUserData} />
      </div>
    </div>
  );
};

export default Hero;
