import Navbar from "../Navbar/Navbar";
import "./Layout.css";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main className="layout-container">
        {children}
      </main>
    </>
  );
}

export default Layout;