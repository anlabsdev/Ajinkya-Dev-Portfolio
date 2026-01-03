import Lottie from "lottie-react";
import handAnimation from "../assets/Animation - 1749711769640.json";

const HandAnimation = () => {
  return (
    <div className="w-12 h-12">
      <Lottie
        animationData={handAnimation}
        loop={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default HandAnimation; 