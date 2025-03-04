import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavigationButton from "./NavigationButton";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const handleLink = () => {
  //   setLink(link);
  //   navigate(link);
  // };

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
            onClick={(e) => {
              e.preventDefault();
              navigate(item.link);
            }}
            className={`header-link group-hover:text-green-500 ${
              location.pathname === item.link ? "text-green-500" : ""
            }`}
            aria-current={location.pathname === item.link ? "page" : undefined}
          >
            {item.title}
          </p>
          <div
            className={`h-[2px] ml-auto mr-auto bg-green-500 w-0 group-hover:w-full transition-all duration-300 ${
              location.pathname === item.link ? "w-full" : "w-0"
            }`}
          />
        </div>
      ))}
      <NavigationButton path="/ethereum" label="Ethereum" />
      <NavigationButton path="/connect" label="Connect" />
    </div>
  );
};

export default Header;
