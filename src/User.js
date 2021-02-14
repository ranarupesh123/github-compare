import React from "react";

function User({ data: { login, id, avatar_url } }) {
  console.log(login, id, avatar_url);
  return (
    <div classNam="user">
      <p>{login}</p>
      <p>{id}</p>
      <img src={avatar_url} alt="" />
    </div>
  );
}

export default User;
