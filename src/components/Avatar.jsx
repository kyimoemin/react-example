import React from "react";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
};

export function Avatar() {
  return (
    <div>
      <h3>{user.name}</h3>
      <img src={user.imageUrl} alt={user.name} />
    </div>
  );
}
