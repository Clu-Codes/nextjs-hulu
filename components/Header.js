import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBolticon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="">
      <div>
        <HeaderItem title="HOME" Icon={HomeIcon} />
      </div>
      <h1>This is the Header.</h1>
      <Image
        className="object-contain"
        src="https://links.papareact.com/images/hulu-logo.png"
        alt="Hulu Logo"
        width={200}
        height={200}
      />
    </header>
  );
}

export default Header;
