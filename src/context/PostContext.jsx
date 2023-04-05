import { createContext, useState } from "react";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [code, setCode] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [joinedUsers, setJoinedUsers] = useState([]);
  const [outputDetails, setOutputDetails] = useState(null);
  const [errorDetails, setErrorDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <PostContext.Provider
      value={{
        code,
        setCode,
        selectedLanguage,
        setSelectedLanguage,
        joinedUsers,
        setJoinedUsers,
        outputDetails,
        setOutputDetails,
        errorDetails,
        setErrorDetails,
        loading,
        setLoading,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
