
import { FC } from "react";
import { FaLock, FaMobileAlt, FaMoneyBillWave, FaTools } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdSupport, MdVisibility } from "react-icons/md";
import { HiOutlineGlobe } from "react-icons/hi";
import { IoIosSpeedometer } from "react-icons/io";

interface Feature {
  icon: JSX.Element;
  title: string;
}

const features: Feature[] = [
  { icon: <GiTakeMyMoney />, title: "Absolutely FREE to use" },
  { icon: <HiOutlineGlobe />, title: "Wide, global reach" },
  { icon: <FaLock />, title: "Safe & secure payments" },
  { icon: <FaMobileAlt />, title: "Simple mobile app" },
  { icon: <FaMoneyBillWave />, title: "0% Platform fee" },
  { icon: <IoIosSpeedometer />, title: "Hassle-free campaign setup" },
  { icon: <FaTools />, title: "Free marketing tools" },
  { icon: <MdVisibility />, title: "Highly transparent" },
  { icon: <MdSupport />, title: "24/7 support" },
  { icon: <FaLock />, title: "Additional feature" },
];

const JoinUs: FC = () => {
  return (
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold mb-4">Why Join Us</h2>
      <p className="mb-8">
        Discover the distinct advantages of using the trusted TALGiving
        platform.
      </p>
      <div className="flex flex-wrap justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center m-4 w-40 text-center"
          >
            <div className="text-4xl mb-2">{feature.icon}</div>
            <p>{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinUs;
