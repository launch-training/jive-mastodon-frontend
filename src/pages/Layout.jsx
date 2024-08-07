import Navbar from "../components/Navbar";
import { Button, ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Layout() {
  return (
    <ConfigProvider
      theme={{
        Input: {
          inputFontSize: 16,
        },
        components: {
          Card: {
            fontSize: 16,
          },
        },
        token: {
          // Seed Token
          colorPrimary: "#bd2bf1",
          colorInfo: "#bd2bf1",
          colorTextBase: "#101935",
          colorSuccess: "#51cb20",
          colorError: "#e9724c",
          colorWarning: "#ffc857",
          fontSize: 16,
          fontFamily: "Inconsolata",
          fontWeight: 500,
        },
      }}
    >
      <ToastContainer />
      <Navbar />
      <Outlet />
    </ConfigProvider>
  );
}

export default Layout;
