import React from "react";

const App = () => {
  localStorage.setItem("user", "vishal");
  localStorage.setItem("user2", "piyush");
  localStorage.setItem("age", 23);
  const user = localStorage.getItem("user");
  const age = localStorage.getItem("age");
  localStorage.removeItem("user2");
  const userdetails = {
    username: "Vishal Mishra",
    age: 23,
    city: "UP",
  };
  localStorage.setItem("userdetails", JSON.stringify(userdetails));

  const userdetail = JSON.parse(localStorage.getItem("userdetails"));
  return (
    <div>
      Radhe Radhe
      <h1>{user}</h1>
      <h2>{age}</h2>
      <h1>{userdetail.username}</h1>
      <h1>{userdetail.age}</h1>
      <h1>{userdetail.city}</h1>
    </div>
  );
};

export default App;
