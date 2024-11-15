// src/navigation/AppNavigator.tsx
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AdminMenuScreen from '../screens/AdminMenuScreen';
import AdminOrderScreen from '../screens/AdminOrderScreen';
import StudentMenuScreen from '../screens/StudentMenuScreen';
import StudentOrderScreen from '../screens/StudentOrderScreen';
import OrderStatusScreen from '../screens/OrderStatusScreen';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AdminMenu" component={AdminMenuScreen} />
      <Stack.Screen name="AdminOrder" component={AdminOrderScreen} />
      <Stack.Screen name="StudentMenu" component={StudentMenuScreen} />
      <Stack.Screen name="StudentOrder" component={StudentOrderScreen} />
      <Stack.Screen name="OrderStatus" component={OrderStatusScreen} />
    </Stack.Navigator>
  );
}
