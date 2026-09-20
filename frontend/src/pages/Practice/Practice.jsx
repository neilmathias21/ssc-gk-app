import "./Practice.css";

import { useNavigate } from "react-router-dom";

import DashboardCard from "../../components/DashboardCard/DashboardCard";
import PageHeader from "../../components/PageHeader/PageHeader";

function Practice() {
  const navigate = useNavigate();

  return (
    <div className="practice-container">

      <div className="practice-header">
        <button
          className="dashboard-button"
          onClick={() => navigate("/")}
        >
          🏠 Dashboard
        </button>
      </div>

      <PageHeader
        title="Practice"
        subtitle="Select a practice mode."
      />

      <div className="practice-grid">

        <DashboardCard
          title="Random Practice"
          description="Practice randomly from all available questions."
          route="/practice/random"
        />

        <DashboardCard
          title="Subject-wise Practice"
          description="Practice questions from a selected subject."
          route="/practice/subject"
        />

        <DashboardCard
          title="Chapter-wise Practice"
          description="Practice questions from a selected chapter."
          route="/practice/chapter"
        />

      </div>

    </div>
  );
}

export default Practice;