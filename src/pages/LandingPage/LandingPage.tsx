import ChoiceLeague from "./ChoiceLeague";

function LandingPage() {
  return (
    <div className="bg-sky-400 w-screen h-screen px-3 pt-3 ">
      {/* <h1 className="text-white text-bold text-3xl text-center mb-4">League</h1> */}

      <div className="flex flex-col justify-center md:flex-row md:flex-wrap">
        <ChoiceLeague country="England" pathname="england" />
        <ChoiceLeague country="Spain" pathname="spain" />
        <ChoiceLeague country="Germany" pathname="germany" />
        <ChoiceLeague country="Italy" pathname="italy" />
      </div>
    </div>
  );
}

export default LandingPage;
