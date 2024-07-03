const logOut = () => {
  const logout = (e) => e.preventDefault();
  {
    axios
      .get("http://localhost:8001/api/logout/")
      .then((response) => {
        // Handle response
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error signing in", error);
      });
  }

  return (
    <div>
      <h1>This is the logout button</h1>

      <button onClick={logOut}></button>
    </div>
  );
};

export default logOut;
