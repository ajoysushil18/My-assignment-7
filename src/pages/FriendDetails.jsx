import {
  Trash,
  Archive,
  BellMinus,
  PhoneCall,
  MessageSquareMore,
  Video,
} from "lucide-react";
import { use } from "react";
import { useParams } from "react-router";
import StatusCard from "../components/unique/homeComponents/StatusCard";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

export default function FriendDetails() {
  const friends = use(friendsPromise);
  const { id } = useParams();

  const expectedFriend = friends.find((friend) => friend.id == id);
  const status = expectedFriend.status;

  return (
    <div className="grid grid-cols-3 py-10 px-6 md:px-20 bg-[#F8FAFC] gap-4">
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center bg-white rounded-md p-6">
          <img
            src={expectedFriend.picture}
            alt={expectedFriend.name}
            className="w-20 h-20 rounded-full mb-5"
          />
          <h2 className="text-[#1F2937] font-semibold text-xl mb-1">
            {expectedFriend.name}
          </h2>
          <div
            className={`badge rounded-full ${status === "on-track" ? "bg-[#244D3F]" : status === "overdue" ? "bg-[#EF4444]" : "bg-[#EFAD44]"} font-medium text-xs text-white`}
          >
            {status.toUpperCase()}
          </div>
          <div className="flex gap-2">
            {expectedFriend.tags.map((tag) => (
              <div className="badge bg-[#CBFADB] text-[#244D3F] rounded-full font-medium text-xs mt-2 mb-3">
                {tag.toUpperCase()}
              </div>
            ))}
          </div>
          <p className="text-[#64748B] font-medium mt-3 italic">
            "{expectedFriend.bio}"
          </p>
          <p className="text-[#64748B] text-sm">
            Email: {expectedFriend.email}
          </p>
        </div>
        <div className="flex flex-col mt-4 gap-2">
          <button className="btn bg-white rounded-md">
            <BellMinus /> Snooze 2 weeks
          </button>
          <button className="btn bg-white rounded-md">
            <Archive /> Archive
          </button>
          <button className="btn btn-error text-white rounded-md">
            <Trash /> Delete
          </button>
        </div>
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <StatusCard
            number={expectedFriend.days_since_contact}
            text="Days Since Contact"
          ></StatusCard>
          <StatusCard
            number={expectedFriend.goal}
            text="Goal (Days)"
          ></StatusCard>
          <StatusCard
            number={expectedFriend.next_due_date}
            text="Next Due"
          ></StatusCard>
        </div>
        <div className="bg-white rounded-md p-6 mb-6">
          <div className="flex justify-between">
            <h4 className="text-[#244D3F] font-medium text-xl">
              Relationship Goal
            </h4>
            <button className="btn">Edit</button>
          </div>
          <p className="text-[#64748B] mt-4">
            Connect every{" "}
            <span className="text-black font-bold">
              {expectedFriend.goal} days
            </span>
          </p>
        </div>
        <div className="bg-white rounded-md p-6">
          <h4 className="text-[#244D3F] font-medium text-xl">
            Quick Check-In
            <div className="grid grid-cols-3 gap-4 mt-4">
              <button className="btn bg-[#f8fafc] h-28 text-xl flex flex-col gap-2 p-4">
                <PhoneCall /> Call
              </button>
              <button className="btn bg-[#f8fafc] h-28 text-xl flex flex-col gap-2 p-4">
                <MessageSquareMore /> Text
              </button>
              <button className="btn bg-[#f8fafc] h-28 text-xl flex flex-col gap-2 p-4">
                <Video /> Video
              </button>
            </div>
          </h4>
        </div>
      </div>
    </div>
  );
}