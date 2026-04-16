import { PhoneCall, MessageSquareMore, Video } from "lucide-react";

export default function HistoryCard({ message }) {
  const [task, date, name] = message;

  return (
    <div className="bg-white p-4 rounded-md flex items-center gap-4">
      {task === "Call" ? <PhoneCall /> : task === "Text" ? <MessageSquareMore /> : <Video />}
      <div>
        <p className="text-lg text-[#64748B]">
          <span className="font-bold text-black">{task}</span> with {name}
        </p>
        <p className="text-[#64748B] font-medium">{date}</p>
      </div>
    </div>
  );
}