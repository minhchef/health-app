import Exercises from "../exsercise/Exsercises";

const ExceriseBanner = ({ exercises }: { exercises: Exercises }) => {
  return <Exercises {...exercises} />;
};

export default ExceriseBanner;
