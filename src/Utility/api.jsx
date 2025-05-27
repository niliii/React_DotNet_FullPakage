import axios from "axios";

const getRandomUser = async () => {
  return await axios.get("https://randomuser.me/api/?results=1");
};

export { getRandomUser };
