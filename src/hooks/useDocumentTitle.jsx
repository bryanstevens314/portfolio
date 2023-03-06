import React, { useEffect } from "react";

export default function useDocumentTitle() {
  const pathname = window?.location?.pathname;

  useEffect(() => {
    switch (pathname) {
      case "/":
        document.title = "Home";
        break;
      case "/apps":
        document.title = "Apps";
        break;
      case "/donate":
        document.title = "Donate";
        break;
      case "/about":
        document.title = "About";
        break;
      case "/supporters":
        document.title = "Supporters";
        break;
      default:
    }
  }, [pathname]);

  return null;
}
