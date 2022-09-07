import styles from './ModalStyle';
import { View, Modal ,Text, Button} from 'react-native';

const ModalFile = (props) => {
  return (
    <Modal animationType='slide'
    visible={props.ModalVisible} style={styles.modal}>
      <View style={styles.modalTitle}>
        <Text style={styles.textModalTitle}>Mi Modal</Text>
      </View>
      <View style={styles.modalQuestion}>
        <Text style={styles.questionText}>¿Estas seguro que deseas borrar? </Text> 
      </View>
      <View style={styles.modalNombre}>
        <Text>{props.item[0].nombre}</Text>
      </View>
      <View style={styles.modalButton}>
        <Button title='CONFIRMAR' onPress={props.onHandlerDelete.bind(this,props.item[0].id)}/> 
        <Button title='CERRAR' onPress={props.cerrar}/>    
      </View>
  </Modal>
  )
}

export default ModalFile