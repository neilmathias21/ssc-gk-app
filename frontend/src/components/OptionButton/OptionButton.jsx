import "./OptionButton.css";

function OptionButton({
  option,
  selected,
  onClick,
  disabled,
  isCorrect,
  isWrong,
}) {
  let className = "option-button";

  if (selected) className += " selected";
  if (isCorrect) className += " correct";
  if (isWrong) className += " wrong";

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {option}
    </button>
  );
}

export default OptionButton;