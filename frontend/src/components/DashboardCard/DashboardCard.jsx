import "./DashboardCard.css";

import { useNavigate } from "react-router-dom";

function DashboardCard({ title, description, route }) {

  const navigate = useNavigate();

  return (
    <div
      className="dashboard-card"
      onClick={() => navigate(route)}
    >
      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}

export default DashboardCard;