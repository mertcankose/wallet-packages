import { Outlet } from "react-router-dom";
import { Header } from "../components";

const PageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default PageLayout;
