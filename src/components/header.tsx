import { navigationData } from "../data/nav";
import Navigation from "./navigation";

const Header = () => {
  return (
    <div className="header__wrapper">
      <header className="header">
        <img
          className="header__logo"
          src={
            "https://img.freepik.com/free-vector/burger-icon-logo-design-vector-template_474888-3613.jpg?w=360&t=st=1711062733~exp=1711063333~hmac=45ea828ee20996fcbf0da68231997a6854c27fcee74f7f3960b871e504595ec6"
          }
          alt="Hamburger logo"
        />
        <Navigation links={navigationData} />
      </header>
    </div>
  );
};
export default Header;
