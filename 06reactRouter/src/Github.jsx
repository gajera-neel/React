import React, { useEffect, useState } from 'react';

function Github() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/') 
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
      });
  }, []);

  if (!user) return <div className="text-center mt-10">Loading profile...</div>;

  return (
    <div className="text-center m-8 bg-green-500 text-white p-6 rounded-xl shadow-lg w-fit mx-auto">
      <h2 className="text-2xl font-bold mb-2">Random User Profile</h2>
      <img
        src={user.picture.large}
        alt="Profile"
        className="rounded-full w-28 h-28 mx-auto mb-4 border-4 border-white"
      />
      <p className="text-xl">{user.name.first} {user.name.last}</p>
      <p className="text-lg mt-1">{user.email}</p>
      <p className="text-md mt-1">Country: {user.location.country}</p>
    </div>
  );
}

export default Github