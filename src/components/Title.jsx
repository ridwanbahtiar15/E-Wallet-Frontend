import { useEffect } from "react";

function Title({ title, children }) {
  useEffect(() => {
    document.title = `E-Wallet | ${title}`;
  }, []);
  return children;
}

export default Title;
