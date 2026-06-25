import "./Home.css";
import DashboardCard from "../../components/DashboardCard/DashboardCard";

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>SSC GK Learning App</h1>
        <p>
          A personal learning platform for SSC, Railways, Banking, and other
          competitive examinations.
        </p>
      </header>

      <div className="dashboard-grid">
        <DashboardCard
          title="Study"
          description="Read notes organized by subject and chapter."
        />

        <DashboardCard
          title="Practice"
          description="Practice random, subject-wise, or chapter-wise MCQs."
        />

        <DashboardCard
          title="Mock Tests"
          description="Attempt timed mock tests and improve speed."
        />

        <DashboardCard
          title="Statistics"
          description="Track your progress and performance."
        />

        <DashboardCard
          title="Bookmarks"
          description="Review your bookmarked questions."
        />

        <DashboardCard
          title="Wrong Questions"
          description="Revise questions answered incorrectly."
        />

        <DashboardCard
          title="Notes"
          description="Access your study notes anytime."
        />

        <DashboardCard
          title="Settings"
          description="Configure application preferences."
        />
      </div>
    </div>
  );
}

export default Home;