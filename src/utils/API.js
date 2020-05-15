import axios from "axios";
// gets Employees from the github API
export default {
  getEmployees: function () {
    return new Promise((resolve, reject) => {
      axios
        .get("https://api.github.com/orgs/github/public_members")
        .then((res) => {
          const users = res.data;
          const results = users.map((user) => {
            return {
              login: user.login,
              image: user.avatar_url,
              email: user.email,
            };
          });
          resolve(results);
        })
        .catch((err) => reject(err));
    });
  },
};
