// import { useState } from "react";

// const initialFriends = [
//   {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
//   },
//   {
//     id: 933372,
//     name: "Sarah",
//     image: "https://i.pravatar.cc/48?u=933372",
//     balance: 20,
//   },
//   {
//     id: 499476,
//     name: "Anthony",
//     image: "https://i.pravatar.cc/48?u=499476",
//     balance: 0,
//   },
// ];

// function App() {
//   const [friends, setFriends] = useState(initialFriends);
//   const [addFriend, setAddfriend] = useState(false);
//   const [selectedFriend, setSelectedFriend] = useState(null);
//   function handleDisplay() {
//     setAddfriend(!addFriend);
//   }
//   function handleAddfriend(friend) {
//     setFriends((friends) => [...friends, friend]);
//     setAddfriend(false);
//   }
//   function handleSelect(friend) {
//     // setSelectedFriend(friend);
//     setSelectedFriend((selected) =>
//       selected?.id === friend.id ? null : friend
//     );
//     setAddfriend(false);
//   }
//   function handleSplitBill(value) {
//     setFriends((friends) =>
//       friends.map((friend) =>
//         friend.id === selectedFriend.id
//           ? { ...friends, balance: friend.balance + value }
//           : friend
//       )
//     );
//   }
//   return (
//     <div className="app">
//       <div className="sidebar">
//         <FriendList
//           friends={friends}
//           onSelection={handleSelect}
//           selectedFriend={selectedFriend}
//         />

//         {addFriend && <FormAddfriend onAddfriend={handleAddfriend} />}

//         <Button onClick={handleDisplay}>
//           {addFriend ? "Close" : "Add Friend"}
//         </Button>
//       </div>
//       {selectedFriend && (
//         <FormSplitBill
//           selectedFriend={selectedFriend}
//           onSplitbill={handleSplitBill}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

// function FriendList({ friends, onSelection, selectedFriend }) {
//   return (
//     <ul>
//       {friends.map((i) => (
//         <Friend
//           friend={i}
//           key={i.id}
//           image={i.image}
//           balance={i.balance}
//           onSelection={onSelection}
//           selectedFriend={selectedFriend}
//         />
//       ))}
//     </ul>
//   );
// }

// function Friend({ friend, onSelection, selectedFriend }) {
//   const isSelected = selectedFriend?.id === friend.id;
//   return (
//     <li className={isSelected ? "selected" : ""}>
//       <img src={friend.image} alt={friend.name} />
//       <h3>{friend.name}</h3>
//       {friend.balance < 0 && (
//         <p className="red">
//           You owe {friend.name} {Math.abs(friend.balance)}
//         </p>
//       )}

//       {friend.balance > 0 && (
//         <p className="green">
//           Your {friend.name} owe you {Math.abs(friend.balance)}
//         </p>
//       )}

//       {friend.balance === 0 && (
//         <p>You and your {friend.name} are on equal terms</p>
//       )}
//       <Button onClick={() => onSelection(friend)}>
//         {isSelected ? "Close" : "Select"}
//       </Button>
//     </li>
//   );
// }

// function Button({ children, onClick }) {
//   return (
//     <button className="button " onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function FormAddfriend({ onAddfriend }) {
//   const id = crypto.randomUUID;
//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!name || !image) return;

//     const newFriend = {
//       name,
//       image: `${image}?=${id}`,
//       balance: 0,
//       id,
//     };
//     onAddfriend(newFriend);

//     setImage("https://i.pravatar.cc/48");
//     setName("");
//   }
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("https://i.pravatar.cc/48");
//   return (
//     <form action="" className="form-add-friend" onSubmit={handleSubmit}>
//       <label>🧑‍🤝‍🧑Friend Name</label>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <label>😶‍🌫️Image URL</label>
//       <input
//         type="text"
//         value={image}
//         onChange={(e) => setImage(e.target.value)}
//       />
//       <Button>Add</Button>
//     </form>
//   );
// }

// function FormSplitBill({ selectedFriend, onSplitbill }) {
//   const [bill, setBill] = useState("");
//   const [paidByUser, setPaidByUser] = useState("");
//   //derived state
//   const expFriend = bill ? bill - paidByUser : "";
//   const [whoisPaying, setWhoispaying] = useState("user");

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!bill || !paidByUser) return;
//     onSplitbill(whoisPaying === "user" ? expFriend : -paidByUser);
//   }
//   return (
//     <form onSubmit={handleSubmit} className="form-split-bill">
//       <h2>Split a bill with {selectedFriend.name}</h2>

//       <label>💵 Bill value</label>
//       <input
//         type="text"
//         value={bill}
//         onChange={(e) => setBill(Number(e.target.value))}
//       />

//       <label>😒 Your Expense</label>
//       <input
//         type="text"
//         value={paidByUser}
//         onChange={(e) =>
//           //dusra minus me naa jaee
//           setPaidByUser(
//             Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
//           )
//         }
//       />

//       <label>😍 {selectedFriend.name} Expense</label>
//       <input type="text" disabled value={expFriend} />

//       <label>🤑Who is paying the Bill</label>
//       <select
//         name=""
//         id=""
//         value={whoisPaying}
//         onChange={(e) => setWhoispaying(e.target.value)}
//       >
//         <option value="user">You</option>
//         <option value="friend">{selectedFriend.name}</option>
//       </select>
//       <Button>Split Bill</Button>
//     </form>
//   );
// }
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid for generating unique IDs

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

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [addFriend, setAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleDisplay() {
    setAddFriend(!addFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setAddFriend(false);
  }

  function handleSelect(friend) {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((currentFriends) =>
      currentFriends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelection={handleSelect}
          selectedFriend={selectedFriend}
        />

        {addFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleDisplay}>
          {addFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

export default App;

function FriendList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id} // Added key prop
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          Your friend {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are on equal terms</p>}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FormAddFriend({ onAddFriend }) {
  const id = uuidv4(); // Generate a unique ID
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const newFriend = {
      name,
      image: `${image}?u=${id}`, // Fixed the URL
      balance: 0,
      id,
    };
    onAddFriend(newFriend);

    setImage("https://i.pravatar.cc/48");
    setName("");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>😶‍🌫️Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;

    const value = whoIsPaying === "user" ? bill - paidByUser : -paidByUser; // checking who owes money to whom
    onSplitBill(value);
  }

  const expFriend = bill ? bill - paidByUser : "";

  return (
    <form onSubmit={handleSubmit} className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💵 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>😒 Your Expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>😍 {selectedFriend.name} Expense</label>
      <input type="text" disabled value={expFriend} />

      <label>🤑Who is paying the Bill</label>
      <select
        name=""
        id=""
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
