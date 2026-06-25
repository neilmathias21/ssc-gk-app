import "./Home.css";

import DashboardCard from "../../components/DashboardCard/DashboardCard";

import dashboardItems from "../../data/dashboardItems";

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>SSC GK Learning App</h1>

        <p>
          A personal learning platform for SSC, Railways, Banking,
          and other competitive examinations.
        </p>
      </header>

      <div className="dashboard-grid">
        {dashboardItems.map((item) => (
          <DashboardCard
            key={item.id}
            title={item.title}
            description={item.description}
            route={item.route}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;