import { useState } from "react";

export function SplitForm({ friend, onSplitBill }) {
  const [bilValue, setBillValue] = useState(0);
  const [paidUser, setPaidUser] = useState("");
  const paidByFriend = bilValue ? bilValue - paidUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("You");

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!bilValue || !paidUser) return;
    onSplitBill(whoIsPaying === "You" ? -paidByFriend : paidUser);
  }

  return (
    <form className="splitForm" onSubmit={handleFormSubmit}>
      <h2 className="formTitle">Split Bill with friend</h2>
      <div className="formEntry">
        <label> 💸 Bill Value: </label>
        <input
          type="text"
          value={bilValue}
          onChange={(e) => setBillValue(Number(e.target.value))}
        />
      </div>

      <div className="formEntry">
        <label>🧟 Your Expense: </label>
        <input
          type="text"
          value={paidUser}
          onChange={(e) =>
            setPaidUser(
              Number(e.target.value) > bilValue
                ? paidUser
                : Number(e.target.value)
            )
          }
        />
      </div>
      <div className="formEntry">
        <label> 💶 {`${friend.name}'s`} expense: </label>
        <input type="text" value={paidByFriend} disabled />
      </div>
      <div className="formEntry">
        <label> Who is Paying: </label>
        <select
          className="selectOption"
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option>You</option>
          <option>{friend.name}</option>
        </select>
      </div>
      <div className="formButton">
        <button type="submit" className="friendButton">
          Split Bill
        </button>
      </div>
    </form>
  );
}
