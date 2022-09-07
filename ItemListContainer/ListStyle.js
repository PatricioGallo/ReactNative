import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container:{
        width: '90%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 20,
        borderRadius: 10,
    },
    listStyle: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding:  20,
    }
  });

export default styles;