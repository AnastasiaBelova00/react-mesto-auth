import logoMesto from "../images/header-logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logoMesto}
        alt="Логотип Место Россия"
      />
      <div className="header__information">
        <p className="header__email"></p>
        <Link to="/signup" className="header__menu">
          Регистрация
        </Link>
      </div>
    </header>
  );
}
