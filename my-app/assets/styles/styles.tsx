import { StyleSheet, Platform } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    letterSpacing: 0.5,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif', // Estilo clássico de livro
  },
  card: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    borderLeftWidth: 5,
    borderLeftColor: '#6200EE', // Marca lateral do livro
    // Sombras para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // Sombras para Android
    elevation: 4,
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  },
  bookAuthor: {
    fontSize: 14,
    opacity: 0.7,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  input: {
    height: 55,
    borderWidth: 1.5,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  button: {
    height: 55,
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#6200EE',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    opacity: 0.8,
  }
});

// import { StyleSheet } from 'react-native';

// export const globalStyles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   card: { padding: 15, borderRadius: 10, marginBottom: 15, elevation: 3 },
//   bookTitle: { fontSize: 18, fontWeight: '600' },
//   input: { borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 10 },
//   button: { backgroundColor: '#6200EE', padding: 15, borderRadius: 5, alignItems: 'center' },
//   buttonText: { color: 'white', fontWeight: 'bold' }
// });