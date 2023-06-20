import yesAuth from "../images/Union.png";
import noAuth from "../images/Unionnot.png";

export default function InfoTooltip(name, isOpen, onClose) {
  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
      onClick={onClose}
    >
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup__button-exit"
          onClick={onClose}
          type="button"
          aria-label="Кнопка закрытия"
        ></button>
        <img className="popup__tooltip-img" src={yesAuth} />
        <h2 className="popup__title">Вы успешно зарегистрировались!</h2>
      </div>
    </div>
  );
}
