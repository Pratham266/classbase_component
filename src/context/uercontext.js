import React from "react";

const UserContext = React.createContext("code by pratham"); //"code by pratham" is a default value if we want to give

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserConsumer, UserProvider };

export default UserContext;