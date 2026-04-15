import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
