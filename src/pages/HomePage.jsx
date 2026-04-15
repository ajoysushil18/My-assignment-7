import { use, useContext } from "react";
import FriendsContainer from "../components/unique/homeComponents/FriendsContainer";
import Hero from "../components/unique/homeComponents/Hero";
import StatusContainer from "../components/unique/homeComponents/StatusContainer";
import { TabContext } from "../context/CurrentTabContext";


const friendsPromise = fetch("/friends.json").then((res) => res.json());

export default function HomePage() {
  const friends = use(friendsPromise);
  const { setCurrTab } = useContext(TabContext);

  setCurrTab("home");
  let total = 0,
    ontrack = 0,
    attention = 0,
    thisMonth = 0;

  friends.forEach((friend) => {
    total++;

    if (friend.status === "on-track") {
      ontrack++;
    } else if (friend.status === "almost due" || friend.status === "overdue") {
      attention++;
    }

    if (Number(friend.days_since_contact) < 31) {
      thisMonth++;
    }
  });

  return (
    <main className="py-20 md:py-32 px-6 md:px-20 bg-[#F8FAFC]">
      <Hero></Hero>
      <StatusContainer
        total={total}
        ontrack={ontrack}
        attention={attention}
        thisMonth={thisMonth}
      ></StatusContainer>
      <div className="divider my-10"></div>
      <FriendsContainer friends={friends}></FriendsContainer>
    </main>
  );
}
