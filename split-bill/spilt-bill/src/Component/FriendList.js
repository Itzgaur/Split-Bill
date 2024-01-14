import { Friend } from "./Friend";

export function FriendList({ friends, onSelection }) {
  return (
    <div className="friendList">
      {friends.map((friend) => (
        <Friend friend={friend} onSelection={onSelection} key={friend.name} />
      ))}
    </div>
  );
}
