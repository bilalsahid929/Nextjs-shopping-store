import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
type Link = {
  label: string;
  url: string;
};

const categories: Link[] = [
  { label: "Skincare", url: "/skincare" },
  { label: "Personal Care", url: "/personal-care" },
  { label: "Handbags", url: "/handbags" },
  { label: "Apparels", url: "/apparels" },
  { label: "Watches", url: "/watches" },
  { label: "Eye Wear", url: "/eye-wear" },
  { label: "Jewellery", url: "/jewellery" },
];

const aboutLinks: Link[] = [
  { label: "Contact Us", url: "/contact" },
  { label: "About Us", url: "/about" },
  { label: "Careers", url: "/careers" },
  { label: "Press", url: "/press" },
];

const policyLinks: Link[] = [
  { label: "Return Policy", url: "/return-policy" },
  { label: "Terms of Use", url: "/terms-of-use" },
  { label: "Sitemap", url: "/sitemap" },
  { label: "Security", url: "/security" },
  { label: "Privacy", url: "/privacy" },
  { label: "EPR Compliance", url: "/epr-compliance" },
];

const socialIcons = [
  { icon: FaFacebookF, color: "#1B4B66" },
  { icon: AiFillInstagram, color: "#1B4B66" },
  { icon: BsTwitter, color: "#1B4B66" },
  { icon: FaYoutube, color: "#1B4B66" },
];

const Footer: React.FC = () => {
  const renderLinks = (links: Link[]) => {
    return links.map((link, index) => (
      <Link
        className="link link-hover text-neutral"
        href={link.url}
        key={index}
      >
        {link.label}
      </Link>
    ));
  };

  const renderSocialIcons = () => {
    return socialIcons.map((iconData, index) => (
      <Link className="p-2 bg-accent rounded-full" key={index} href={"/"}>
        {<iconData.icon size={20} color={iconData.color} />}
      </Link>
    ));
  };

  return (
    <footer className="footer p-16 bg-primary text-base-content  pb-32 ">
      <nav>
        <header className="footer-title text-white opacity-100">
          Shop by Category
        </header>
        {renderLinks(categories)}
      </nav>
      <nav>
        <header className="footer-title text-white opacity-100">About</header>
        {renderLinks(aboutLinks)}
      </nav>
      <nav>
        <header className="footer-title text-white opacity-100">Policy</header>
        {renderLinks(policyLinks)}
      </nav>
      <nav className="  md:justify-self-end">
        <header className="footer-title md:text-right w-full text-white opacity-100">
          Social
        </header>
        <div className="grid grid-flow-col md:place-content-end md:w-full gap-3">
          {renderSocialIcons()}
        </div>
        <div className="flex items-center space-x-2 w-full md:justify-end text-neutral">
          <HiOutlineLocationMarker size={30} />
          <span>United States</span>
        </div>
        <p className="w-full md:text-right text-light-gray text-neutral">
          © 2021 | Cora Leviene All Rights Reserved
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
