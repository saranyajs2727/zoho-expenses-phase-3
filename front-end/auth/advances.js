export const getAdvances = async (email) => {
    const { token } = isAutheticated();
    // let email = user.email;
    console.log(token);
    try {
      const response = await fetch(
        `https://zoho-expense.herokuapp.com/api/advancesofuser/${email}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.email);
      return await response.json();
    } catch (err) {
      return console.log(err);
    }
}