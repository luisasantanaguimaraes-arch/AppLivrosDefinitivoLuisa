import { useColorScheme } from 'react-native';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return {
    colors: {
      background: isDark ? '#121212' : '#FFFFFF',
      text: isDark ? '#FFFFFF' : '#000000',
      primary: '#6200EE',
      card: isDark ? '#1E1E1E' : '#F5F5F5',
    },
    isDark,
  };
};