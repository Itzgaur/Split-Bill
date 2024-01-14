import { useState } from "react";
import { FriendList } from "./FriendList";
import { AddNewButton } from "./AddNewButton";
import { NewFriendForm } from "./NewFriendForm";
import { SplitForm } from "./SplitForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  // const
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
  }

  function handleShowFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend(friend);
  }

  function handleSplitBill(value) {
    // console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="main-container">
      <div className="container">
        <FriendList friends={friends} onSelection={handleSelectFriend} />
        {selectedFriend && (
          <SplitForm friend={selectedFriend} onSplitBill={handleSplitBill} />
        )}
      </div>
      <div className="lower-container">
        {showAddFriend ? (
          <NewFriendForm
            onShowFriend={handleShowFriend}
            onAddFriend={handleAddFriend}
          />
        ) : (
          <AddNewButton onShowFriend={handleShowFriend} />
        )}
      </div>
    </div>
  );
}
