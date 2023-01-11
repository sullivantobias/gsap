import Navigation from "../../Navigation";

import "./index.scss";

const LINKS = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Reborn", href: "#reborn" },
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
