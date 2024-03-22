import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  input: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 8,
    paddingBottom: 8,
    paddingStart: 8,
    backgroundColor: 'white',
    borderRadius: 8,

    shadowColor: '#ccc', // Optional: shadow color (default is black)
    shadowOffset: { width: 3, height: 3 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity (0 - 1)
    shadowRadius: 4, // Shadow blur radius
    elevation: 4,
  },
});

export default styles;