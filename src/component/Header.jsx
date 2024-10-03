import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full items-center flex justify-between self-start top-0  text-white">
      <span className="text-[30px]  cursor-pointer">Logo</span>
      <h1 className="text-[24px] font-normal">Create New Account</h1>
      <Link to="" className="text-[16px] cursor-pointer text-normal">
        Contact Us
      </Link>
    </div>
  );
};

export default Header;
