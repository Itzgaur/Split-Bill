import { useState } from "react";

export function NewFriendForm({ onShowFriend, onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("download.jpg");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    if (!image) setImage("download.jpg");

    const newFriend = {
      id: new Date().getDate().toString(),
      name: name,
      image: image,
      balance: 0,
    };

    onShowFriend();
    onAddFriend(newFriend);
  }

  return (
    <div className="newFriend">
      <div className="addField">
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="addField">
        <label>Image URI: </label>
        <input
          type="text"
          className="newImage"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <button type="button" className="friendButton" onClick={handleSubmit}>
          Add
        </button>
        <button type="button" className="friendButton " onClick={onShowFriend}>
          Close
        </button>
      </div>
    </div>
  );
}
