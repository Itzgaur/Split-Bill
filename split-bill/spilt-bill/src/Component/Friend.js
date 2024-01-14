export function Friend({ friend, onSelection }) {
  return (
    <div className="friend">
      <img src={friend.image} alt={friend.name} className="profile" />
      <div className="details">
        <h2 className="name">{friend.name}</h2>
        <p className={friend.balance < 0 ? "negative" : "positive"}>
          {friend.balance < 0
            ? `${friend.name} owes you ${friend.balance}₹`
            : friend.balance > 0
            ? `You owes ${friend.name} ${friend.balance}₹`
            : `You and ${friend.name} are even`}
        </p>
      </div>
      <button
        type="submit"
        className="friendButton"
        onClick={() => onSelection(friend)}
      >
        Select
      </button>
    </div>
  );
}
