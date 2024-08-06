import Navbar from "../components/Navbar";
import { Button, ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#bd2bf1",
          colorInfo: "#bd2bf1",
          colorTextBase: "#101935",
          colorSuccess: "#51cb20",
          colorError: "#e9724c",
          colorWarning: "#ffc857",
        },
      }}
    >
      <Navbar />
      <Outlet />
    </ConfigProvider>
  );
}

export default Layout;
