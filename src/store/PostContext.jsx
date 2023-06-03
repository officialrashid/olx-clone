import React, { createContext, useState } from "react";

export const postContext = createContext(null);

function Post({ children }) {
  const [postDetails, setPostDetails] = useState(null);
  return (
    <postContext.Provider value={{ postDetails, setPostDetails }}>
      {children}
    </postContext.Provider>
  );
}

export default Post;
