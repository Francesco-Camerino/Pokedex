import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 25,
  },
  image: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },
  titolo: {
    fontSize: 18,
    color: 'black',
    flex: 1,
    marginLeft: 10
  },
  elimina: {
    width: 24,
  },
});

export default styles;
