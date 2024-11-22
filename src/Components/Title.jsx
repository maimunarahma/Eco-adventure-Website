import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "ECO Travel App"; // Default title

    if (location.pathname === "/") {
      title = "Home - ECO Travel App";
    } else if (location.pathname === "/about") {
      title = "About - ECO Travel App";
    } else if (location.pathname === "/myProfile") {
      title = "My Profile - ECO Travel App";
    } else if (location.pathname === "/experience") {
      title = "Experience - ECO Travel App";
    }

    document.title = title; // Update the title
  }, [location]); // Re-run whenever the location (route) changes
};

export default usePageTitle;
