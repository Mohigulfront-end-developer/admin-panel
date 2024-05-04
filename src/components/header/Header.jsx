import HeaderImg from "../../../public/assets/_header.png"
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 w-full">
        <div className=" flex justify-between items-center  mb-[50px] pt-[-65px]">
          <div className="">
            <h1 className="font-bold text-[24px]">Tickets</h1>
          </div>

          <div className="flex justify-between items-center gap-[100px]">
            <div className="flex justify-between items-center gap-5">
              <IoSearch className="text-[grey]" />
              <FaBell className="text-[grey]" />
            </div>
            <div className="flex justify-between items-center gap-5">
              <h3 className="font-normal text-[18px]">Jones Ferdinand</h3>
              <img src={HeaderImg} alt="Profil picture" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header