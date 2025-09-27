import React, { useState, useEffect } from "react";
import axios from "axios";

function Axios() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("https://randomuser.me/api/");
        console.log(res)
        setUser(res.data.results[0]);
      } catch (err) {
        setError(err.message);
      }
    };
    getUser();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Axios User</h2>
      <img src={user.picture.large} alt={user.name.first} />
      <p>{user.name.title} {user.name.first} {user.name.last}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Axios;
