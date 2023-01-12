import axios from "axios";

const getData = async (userId) => {
  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );

  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?id=${userId}`
  );

  users.posts= posts

  try {
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

export default getData;
