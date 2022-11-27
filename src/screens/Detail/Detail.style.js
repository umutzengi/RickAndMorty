import {Dimensions, StyleSheet} from 'react-native';
var fullWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: fullWidth,
    alignContent: 'center',
  },
  text: {
    padding: 20,
    backgroundColor: '',
    marginTop: fullWidth * 0.01,
    fontSize: fullWidth * 0.05,
  },
  text_container: {
    borderColor: '#82CD47',
    borderWidth: 1,
    borderRadius: 15,
    margin: fullWidth * 0.01,
  },
});
