import { View, Text, FlatList } from 'react-native';
import { useTheme } from '../../hooks/UseTheme';
import { globalStyles } from '../../assets/styles/styles';

const BOOKS = [
  { id: '1', title: 'Dom Casmurro', author: 'Machado de Assis' },
  { id: '2', title: 'O Alquimista', author: 'Paulo Coelho' },
  { id: '3', title: 'Ensaio sobre a Cegueira', author: 'José Saramago' },
];

export default function StoreScreen() {
  const { colors } = useTheme();

  return (
    <View style={[globalStyles.container, { backgroundColor: colors.background }]}>
      <Text style={[globalStyles.title, { color: colors.text }]}>Nossa Livraria</Text>
      <FlatList
        data={BOOKS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[globalStyles.card, { backgroundColor: colors.card }]}>
            <Text style={[globalStyles.bookTitle, { color: colors.text }]}>{item.title}</Text>
            <Text style={{ color: colors.text }}>{item.author}</Text>
          </View>
        )}
      />
    </View>
  );
}