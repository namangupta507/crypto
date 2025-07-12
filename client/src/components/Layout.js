import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Toaster position="top-right" reverseOrder={false} />
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <main style={{ padding: "1rem" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
