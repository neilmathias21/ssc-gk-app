import "./Home.css";

import DashboardCard from "../../components/DashboardCard/DashboardCard";

import dashboardItems from "../../data/dashboardItems";

import PageHeader from "../../components/PageHeader/PageHeader";

function Home() {
  return (
    <div className="home-container">
      <PageHeader
        title="SSC GK Learning App"
        subtitle="A personal learning platform for SSC, Railways, Banking, and other competitive examinations."
      />

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