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
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />

        <FormAddfriend />

        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;

function FriendList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((i) => (
        <Friend friend={i} key={i.id} image={i.image} balance={i.balance} />
      ))}
    </ul>
  );
}

function Friend({ friend, image }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">Your friend ows you {Math.abs(friend.balance)}</p>
      )}

      {friend.balance === 0 && (
        <p>You and your {friend.name} are on equal terms</p>
      )}
      <Button>Select</Button>
    </li>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}
function FormAddfriend() {
  return (
    <form action="" className="form-add-friend">
      <label>🧑‍🤝‍🧑Friend Name</label>
      <input type="text" />

      <label>😶‍🌫️Image URL</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form action="" className="form-split-bill">
      <h2>Split a bill with X</h2>
    </form>
  );
}
