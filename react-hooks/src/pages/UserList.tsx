import React, { useEffect, useState } from "react";
import "../utils/Users";
import { getUsers } from "../utils/Users";
import axios from "axios";

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserList = () => {
  console.log("ok");
  const [userList, setUser] = useState<Users>();
  const [error, setError] = useState<string>("");
  useEffect(() => {
    const controller = new AbortController();
    async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setUser(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          setError(err.message);
        });
    };
  }, []);
  return <div></div>;
};

export default UserList;
