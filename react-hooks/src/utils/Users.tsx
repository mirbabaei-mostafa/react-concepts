import axios from "axios";

const UserApi: string = "https://jsonplaceholder.typicode.com/users";

export const getUsers = () => {
  async () => {
    await axios.get(UserApi);
  };
};
