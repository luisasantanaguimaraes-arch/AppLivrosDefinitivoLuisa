import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#6200EE' }}>
      <Tabs.Screen 
        name="index" 
        options={{ title: 'Loja', tabBarIcon: ({color}) => <Ionicons name="book" size={24} color={color} /> }} 
      />
      <Tabs.Screen 
        name="user" 
        options={{ title: 'Perfil', tabBarIcon: ({color}) => <Ionicons name="person" size={24} color={color} /> }} 
      />
    </Tabs>
  );
}