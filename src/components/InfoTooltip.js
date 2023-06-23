import yesAuth from "../images/Union.png";
import noAuth from "../images/Unionnot.png";

export default function InfoTooltip({ isOpen, onClose, isRegistered }) {
  const image = isRegistered ? yesAuth : noAuth;
  const title = isRegistered
    ? "Вы успешно зарегистрировались!"
    : "Что-то пошло не так! Попробуйте ещё раз";
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`} onClick={onClose}>
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup__button-exit"
          onClick={onClose}
          type="button"
          aria-label="Кнопка закрытия"
        ></button>
        <img className="popup__tooltip-img" src={image} />
        <h2 className="popup__tooltip-title">{title}</h2>
      </div>
    </div>
  );
}
