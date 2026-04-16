import { useContext, useRef, useState } from "react";
import HistoryCard from "../components/unique/timelineComponents/historyCard";
import { TimelineContext } from "../context/TimeLineContext";
import { CircleX } from "lucide-react";

export default function TimeLine() {
  const { currTimeLine } = useContext(TimelineContext);
  const [filter, setFilter] = useState("all");

  const dropdownRef = useRef(null);
  const handleSelect = (value) => {
    setFilter(value);
    dropdownRef.current.removeAttribute("open");
  };

  return (
    <div className="py-10 px-6 md:px-20 bg-[#F8FAFC] flex flex-col gap-4">
      <details ref={dropdownRef} className="dropdown">
        <summary className="btn m-1">Filter Timeline</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSelect("all")}>All</a>
          </li>
          <li>
            <a onClick={() => handleSelect("Call")}>Call</a>
          </li>
          <li>
            <a onClick={() => handleSelect("Video")}>Video Call</a>
          </li>
          <li>
            <a onClick={() => handleSelect("Text")}>Text</a>
          </li>
        </ul>
      </details>
      {currTimeLine.length === 0 ? (
        <div className="hero bg-white p-10 rounded-md">
          <div className="hero-content text-center flex flex-col gap-4">
            <CircleX />
            <h1 className="text-3xl font-bold text-[#1F2937]">
              No Activities Yet
            </h1>
            <p className="text-[#64748B] max-w-xl">
              Interact with friends more to create memories
            </p>
          </div>
        </div>
      ) : (
        currTimeLine.map(
          (message, index) =>
            (filter === "all" && (
              <HistoryCard key={index} message={message} />
            )) ||
            (filter === "Call" && message[0] === "Call" && (
              <HistoryCard key={index} message={message} />
            )) ||
            (filter === "Video" && message[0] === "Video" && (
              <HistoryCard key={index} message={message} />
            )) ||
            (filter === "Text" && message[0] === "Text" && (
              <HistoryCard key={index} message={message} />
            )),
        )
      )}
    </div>
  );
}