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
          Зарегестрироваться
        </button>
        <p className="login__subtitle">Уже зарегистрированы? Войти</p>
      </form>
    </div>
  );
}
