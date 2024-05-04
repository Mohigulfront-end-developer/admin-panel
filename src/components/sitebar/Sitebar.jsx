import { Link } from "react-router-dom";
import Logo from "../../../public/assets/logo.svg"
import Icon1 from "../../../public/assets/vector1.svg"
import Icon2 from "../../../public/assets/vector2.svg";
import Icon3 from "../../../public/assets/vector3.svg";
import Icon4 from "../../../public/assets/vector4.svg";
import Icon5 from "../../../public/assets/vector5.svg";
import Icon6 from "../../../public/assets/vector6.svg";
import Icon7 from "../../../public/assets/agent.svg";
import Icon8 from "../../../public/assets/settings.svg";


const Sitebar = () => {
  return (
    <div className=" flex justify-between flex-col bg-[#252323] min-h-[100vh]  px-[20px] w-[300px] ">
      <div className="">
        <div className="pt-[35px] flex justify-center items-center gap-4 mb-[80px]">
          <img src={Logo} alt="logo" />
          <h2 className="text-[grey] text-[20px] font-bold">Dashboard Kit</h2>
        </div>
        <div className="text-[grey] text-[20px]">
          <li className="flex mb-[20px] hover:text-[white]">
            <Link to="/" className="flex items-center gap-5">
              <img src={Icon1} alt="" className="inline-block" />
              <p>Overview</p>
            </Link>
          </li>

          <li className="mb-[20px] hover:text-[white]">
            <Link to="/" className="flex items-center gap-5 mb-[20px]">
              <img src={Icon2} alt="" className="inline-block" />
              <p>Tickets</p>
            </Link>
          </li>
          <li className="mb-[20px] hover:text-[white]">
            <Link to="/" className="flex items-center gap-5 mb-[20px]">
              <img src={Icon3} alt="" className="inline-block" />
              <p>Ideas</p>
            </Link>
          </li>
          <li className="mb-[20px] hover:text-[white]">
            <Link to="/" className="flex items-center gap-5 mb-[20px]">
              <img src={Icon4} alt="" className="inline-block" />
              <p>Contacts</p>
            </Link>
          </li>
          <li className="mb-[20px] hover:text-[white]">
            <Link to="/" className="flex items-center gap-5 mb-[20px]">
              <img src={Icon7} alt="" className="inline-block" />
              <p>Agents</p>
            </Link>
          </li>
          <li className="mb-[20px] hover:text-[white]">
            <Link to="/" className="flex items-center gap-5 mb-[20px]">
              <img src={Icon5} alt="" className="inline-block" />
              <p>Articles</p>
            </Link>
          </li>
          <li className="mb-[20px] hover:text-[white]">
            <Link to="/" className="flex items-center gap-5 mb-[20px]">
              <img src={Icon8} alt="" className="inline-block" />
              <p>Settings</p>
            </Link>
          </li>
          <li className="mb-[20px] hover:text-[white]">
            <Link to="/" className="flex items-center gap-5 mb-[20px]">
              <img src={Icon6} alt="" className="inline-block" />
              <p>Subscription</p>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sitebar;
