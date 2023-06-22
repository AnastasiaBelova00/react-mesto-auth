import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="login__container">
      <h2 className="login__title">Регистрация</h2>
      <form className="login__form">
        <input
          name="email"
          id="email"
          className="login__input login__input_type_email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          name="password"
          id="password"
          className="login__input login__input_type_password"
          type="password"
          placeholder="Пароль"
          minLength="8"
          maxLength="40"
          required
        />

        <button className="login__button-submit" type="submit">
          Зарегистрироваться
        </button>
        <div className="login__subtitle">
          <p className="login__text">Уже зарегистрированы?</p>
          <Link to="/signin" className="login__link">
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
}
