import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { PiHandbagSimpleBold, PiUserBold, PiHeartBold } from "react-icons/pi";
import { HiMenuAlt3 } from "react-icons/hi";

const Header: React.FC = () => {
  return (
    <nav className="navbar bg-base-100 py-5 px-9">
      <div className="flex items-center justify-between text-sm font-normal text-info w-full">
        <div className="flex items-center gap-4">
          <Link href="/" className="pe-8">
            <Image src={logo} width={80} height={80} alt="logo" />
          </Link>
          <div className="hidden sm:flex gap-4">{renderCategoryLinks()}</div>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden md:block">
            <SearchBar />
          </div>
          <UserDropdown />
          <PiHandbagSimpleBold size={20} />
          <PiHeartBold size={20} />
          <div className="sm:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};
const categories: string[] = [
  "Handbags",
  "Watches",
  "Skincare",
  "Jewellery",
  "Apparels",
];
const renderCategoryLinks = () => {
  return categories.map((category) => (
    <Link key={category} href={`/${category.toLowerCase()}`}>
      {category}
    </Link>
  ));
};

const SearchBar: React.FC = () => {
  return (
    <div className="form-control relative">
      <BiSearchIcon />
      <input
        type="text"
        placeholder="Search for products or brands....."
        className="input input-bordered pl-10 md:w-80 lg:w-96 border-0 bg-success rounded-none"
      />
    </div>
  );
};

const BiSearchIcon: React.FC = () => {
  return (
    <span className="absolute top-1/2 transform translate-x-[30%] -translate-y-1/2">
      <BiSearch size={24} />
    </span>
  );
};

const UserDropdown: React.FC = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0}>
        <PiUserBold size={20} />
      </label>
      <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <DropdownItem label="Profile" badge="New" />
        <DropdownItem label="Settings" />
        <DropdownItem label="Logout" />
      </ul>
    </div>
  );
};

const HamburgerMenu: React.FC = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0}>
        <div className="cursor-pointer">
          <HiMenuAlt3 size={20} />
        </div>
      </label>
      <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        {categories.map((category) => (
          <DropdownItem key={category} label={category} />
        ))}
      </ul>
    </div>
  );
};

const DropdownItem: React.FC<{ label: string; badge?: string }> = ({
  label,
  badge,
}) => {
  return (
    <li>
      <a className="justify-between">
        {label}
        {badge && <span className="badge">{badge}</span>}
      </a>
    </li>
  );
};

export default Header;
