export function AddNewButton({ onShowFriend }) {
  return (
    <div>
      <button className="addButton" onClick={onShowFriend}>
        Add Friend
      </button>
    </div>
  );
}
