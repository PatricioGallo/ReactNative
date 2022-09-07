import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    modal:{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 70
    },
    modalTitle: {
      width: '100%',
      height: 50,
      marginTop: 70,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    textModalTitle: {
      fontSize: 30
    },
    modalQuestion: {
      marginTop: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: 30,
      marginBottom: 20
    },
    questionText:{
      fontSize: 17
    },
    modalButton:{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalNombre:{
      width: '100%',
      height: 30,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 50,
    }
  });

export default styles;