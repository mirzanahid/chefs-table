import { FaMagnifyingGlass } from "react-icons/fa6";
import user from "../../assets/user.svg";
const Header = () => {
  return (
    <div className="flex justify-between items-center py-[50px]">
      <a className="font-bold text-[32px] text-[#150B2B]" href="">
        Recipe Calories
      </a>
      <div>
        <ul className="font-normal text-base text-[rgba(21,11,43,70%)] flex gap-12">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Recipes</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Search</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
      <div className="w-[260px] h-12 relative" >
        <input
          className="bg-[rgba(21,11,43,5%)] rounded-[30px] pl-12 pr-7 w-[260px] h-12  text-[rgba(21,11,43,70%)]"
          type="text"
          placeholder="Search"
         
        />
        <FaMagnifyingGlass className="text-xl text-[rgba(21,11,43,70%)] absolute top-[30%] left-[20px]" />
      </div>
      <div className="w-12 h-12 rounded-[50%] bg-[#0BE58A] flex justify-center items-center ml-6">
        <img className="w-8 h-8 " src={user} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Header;
