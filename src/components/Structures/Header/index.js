import Navigation from "../../Navigation";

import "./index.scss";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Gallery", href: "#gallery" },
  { label: "History", href: "#history" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  return (
    <div className="Header">
      <div className="Header__content">
        <Navigation links={LINKS} />
      </div>
    </div>
  );
}

export default Header;
