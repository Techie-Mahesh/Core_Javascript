const API_URL = "https://api.github.com/users/Techie-Mahesh";
const fetchUser = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
fetchUser();
