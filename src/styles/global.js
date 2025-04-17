import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  containerButtons: {
    width: '50%',
    justifyContent: 'space-between',
    gap: 10,
  },
  containerForm: {
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  textArea: {
    height: 120,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  noteContainer: {
    borderWidth: 1,
    borderRadius: 4,
    margin: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderColor: '#ccc',
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noteText: {
    fontSize: 16,
  },
});
export default styles;
