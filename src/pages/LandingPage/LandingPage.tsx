import ChoiceLeague from "./ChoiceLeague";
import { choice } from "./Interface";

function LandingPage() {
  return (
    <div className="bg-[#bdb9b7] w-screen h-screen px-3 pt-3 ">
      <div className="flex flex-col justify-center md:flex-row md:flex-wrap">
        {choice.map((item, index) => (
          <ChoiceLeague
            country={item.country}
            pathname={item.pathname}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
