export const getCommits = () => {
  let response = new Promise((resolve) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://nestjs-commit.herokuapp.com/commits", requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => console.log("error", error));
  });
  return response;
};
