import {Dimensions, StyleSheet} from 'react-native';
var fullWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#bdbdbd',
    backgroundColor: '#e0e0e0',
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: fullWidth * 0.3,
    height: fullWidth * 0.3,
  },
  body_container: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: fullWidth * 0.03,
    flex: 1,
    backgroundColor: '#F6F6C9',
  },
  name: {
    paddingTop: fullWidth * 0.08,
    paddingLeft: fullWidth * 0.05,
    fontWeight: 'bold',
    fontSize: fullWidth * 0.05,
  },
});
