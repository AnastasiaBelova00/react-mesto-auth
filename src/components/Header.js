import logoMesto from "../images/header-logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logoMesto}
        alt="Логотип Место Россия"
      />
      <div className="header__information">
        <p className="header__email">fghjkl</p>
        <p className="header__menu">Регистрация</p>
      </div>
    </header>
  );
}
