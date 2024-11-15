import React, { createContext, useContext, useState, ReactNode } from 'react';

export type MenuItem = {
  id: string;
  name: string;
};

type MenuContextType = {
  menu: MenuItem[];
  addMenuItem: (name: string) => void;
  editMenuItem: (id: string, name: string) => void;
  deleteMenuItem: (id: string) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState<MenuItem[]>([
    { id: '1', name: 'Energy Breakfast 🍳🥪' },
    { id: '2', name: 'Veggie Power Wraps 🥬🌯' },
    // Add the rest here as initial items...
  ]);

  const addMenuItem = (name: string) => {
    setMenu([...menu, { id: Date.now().toString(), name }]);
  };

  const editMenuItem = (id: string, name: string) => {
    setMenu(menu.map(item => (item.id === id ? { ...item, name } : item)));
  };

  const deleteMenuItem = (id: string) => {
    setMenu(menu.filter(item => item.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menu, addMenuItem, editMenuItem, deleteMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}
