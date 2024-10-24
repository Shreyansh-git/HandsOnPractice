import { useContext } from "react";
import UserProvider from ".";

const Language = () => {
  const contextValue = useContext(UserProvider);
  return <div>this is written in {contextValue.chosenLanguage}</div>;
};
export default Language;
