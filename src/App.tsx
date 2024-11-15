// src/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { MenuProvider } from './context/MenuContext';

export default function App() {
  return (
    <NavigationContainer>
      <MenuProvider>
        <AppNavigator />
      </MenuProvider>
    </NavigationContainer>
  );
}
