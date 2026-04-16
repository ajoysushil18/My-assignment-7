import { History, House, ChartSpline } from "lucide-react";
import { Link } from "react-router";
import { TabContext } from "../../context/CurrentTabContext";
import { useContext } from "react";

export default function Navbar() {
  const { currTab, setCurrTab } = useContext(TabContext);

  return (
    <div className="navbar bg-base-100 shadow-sm px-6 md:px-20 py-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold text-[#244D3F]">
          <span className="text-[#1F2937] font-extrabold">Keen</span>Keeper
        </h1>
      </div>
      <div>
        <button onClick={() => setCurrTab("home")}>
          <Link
            to="/"
            className={`btn font-semibold ${currTab === "home" ? "bg-green-800 text-white" : "bg-white border-0 drop-shadow-white text-[#64748B]"}`}
          >
            <House /> Home
          </Link>
        </button>
        <button onClick={() => setCurrTab("timeline")}>
          <Link
            to="/timeline"
            className={`btn font-semibold ${currTab === "timeline" ? "bg-green-800 text-white" : "bg-white border-0 drop-shadow-white text-[#64748B]"}`}
          >
            <History /> Timeline
          </Link>
        </button>
        <button onClick={() => setCurrTab("status")}>
          <Link
            to="/status"
            className={`btn font-semibold ${currTab === "status" ? "bg-green-800 text-white" : "bg-white border-0 drop-shadow-white text-[#64748B]"}`}
          >
            <ChartSpline /> Status
          </Link>
        </button>
      </div>
    </div>
  );
}