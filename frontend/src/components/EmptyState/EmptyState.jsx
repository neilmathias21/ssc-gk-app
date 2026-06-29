import "./EmptyState.css";

import { useNavigate } from "react-router-dom";

function EmptyState({
  title,
  message,
  buttonText = "Go Back",
  navigateTo = "/practice",
}) {
  const navigate = useNavigate();

  return (
    <div className="empty-state">

      <h2>{title}</h2>

      <p>{message}</p>

      <button
        className="empty-button"
        onClick={() => navigate(navigateTo)}
      >
        {buttonText}
      </button>

    </div>
  );
}

export default EmptyState;