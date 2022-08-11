import React, { useState, useEffect } from "react";
import { NavBar as UINavBar } from "../ui-components";
import { Divider, Menu, MenuItem, Authenticator, Icon, useAuthenticator } from "@aws-amplify/ui-react";
import { Category } from "../models";
import { DataStore, SortDirection, Predicates } from "@aws-amplify/datastore";
import { useNavigate } from "react-router-dom";

export default function NavBar({cartItems}) {
  let navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  // handle navigation changes
  const routeChange = (e) => {
    let path = `/category/${e.target.textContent}`;
    navigate(path);
  };

  // Query categories for building the menu
  async function queryCategories() {
    try {
      const categories = await DataStore.query(Category, Predicates.ALL, {
        sort: (c) => c.name(SortDirection.ASCENDING),
      });
      setCategories(categories);
    } catch (error) {
      console.log("Error retrieving categories", error);
    }
  }

  useEffect(() => {
    queryCategories();
  }, [categories, cartItems]);

  // Build the menu items
  const menuItems = categories.map((category) => (
    <MenuItem key={category.name} onClick={routeChange}>
      {category.name}
    </MenuItem>
  ));

  function GetTrigger() {
    const { user } = useAuthenticator((context) => [context.user]);
    let pathData = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"
    if (user !== undefined) {
      pathData = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
    }
    return <Icon
        pathData={pathData}
        viewBox={{width: "24", height: "24"}}
        ariaLabel="avatar"
        width="64px"
        height="64px"
      />
  }

  // overrides
  const overrides = {
    Menu: {
      children: <Menu>{menuItems}</Menu>,
    },
    Badge: {
      children: cartItems.reduce((t, v) => (t = t + v.quantity), 0),
    },
    Avatar: {
      children: 
        <Menu
          trigger={GetTrigger()}
        >
          <Authenticator>
            {({ signOut, _ }) => (
              <MenuItem onClick={signOut}>Sign Out</MenuItem>
            )}
          </Authenticator>
        </Menu>,
    },
  };

  return (
    <div>
      <UINavBar width={"100vw"} overrides={overrides} />
      <Divider />
    </div>
  );
}
