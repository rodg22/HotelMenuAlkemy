import { createContext, useState, useContext } from "react";

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);

  const addItem = (item) => {
    const newmenuItem = [...menu, item];
    setMenu(newmenuItem);
  };

  //   const isInmenu = (item) => {
  //     return menu.some((menuItem) => menuItem.id === item.id);
  //   };

  //   const removeItem = (itemId) => {
  //     const deleteItem = menu.filter((item) => item.id !== itemId);
  //     setMenu(deleteItem);
  //   };

  //   const countItems = () => {
  //     if (menu.length > 0) {
  //       let totalItems = 0;
  //       menu.map((item) => (totalItems += item.quantity));
  //       return totalItems;
  //     }
  //   };

  const menuTotal = () => {
    let totalPrice = 0;
    menu.map((item) => (totalPrice += item.pricePerServing));
    return totalPrice;
  };

  const MenuContextValues = {
    menu,
    setMenu,
    addItem,
    // removeItem,
    // clear,
    // countItems,
    menuTotal,
  };

  return (
    <MenuContext.Provider value={MenuContextValues}>
      {children}
    </MenuContext.Provider>
  );
};
