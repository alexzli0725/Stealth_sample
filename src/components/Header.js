import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const pages = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Launchpad", link: "/launchpad" },
    { id: 3, title: "NFT", link: "/nft" },
    { id: 4, title: "Create", link: "/create" },
    { id: 5, title: "Locker", link: "/locker" },
    { id: 6, title: "Bot Yard", link: "/botyard" },
  ];
  return (
    <div className="flex text-white justify-center gap-6 px-8 bg-black items-center p-[5px] rounded-[35px] w-fit ml-auto mr-auto mt-10">
      {pages.map((item, index) => (
        <div className="group hover:cursor-pointer" key={index}>
          <p
            onClick={() => navigate(`${item.link}`)}
            className="header-link group-hover:text-green-500"
          >
            {item.title}
          </p>
          <div className="h-[2px] ml-auto mr-auto bg-green-500 w-0 group-hover:w-full transition-all duration-300" />
        </div>
      ))}
      <button
        onClick={() => navigate(`/ethereum`)}
        className="hover:text-green-500 border-[1.5px] px-[10px] py-[5px] rounded-[15px] border-green-500"
      >
        <p>Ethereum</p>
      </button>
      <button
        onClick={() => navigate(`/connect`)}
        className="hover:text-green-500 border-[1.5px] px-[10px] py-[5px] rounded-[15px] border-green-500"
      >
        <p>Connect</p>
      </button>
    </div>
  );
};

export default Header;
