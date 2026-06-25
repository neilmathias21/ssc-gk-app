import "./DashboardCard.css";

function DashboardCard({ title, description }) {
  return (
    <div className="dashboard-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default DashboardCard;