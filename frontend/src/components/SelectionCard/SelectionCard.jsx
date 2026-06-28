import "./SelectionCard.css";

function SelectionCard({ title, onClick }) {
  return (
    <div
      className="selection-card"
      onClick={onClick}
    >
      <h2>{title}</h2>
    </div>
  );
}

export default SelectionCard;