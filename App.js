import { View} from 'react-native';
import styles from './AppStyle/AppeStyle';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Input from './TextInput/Input';
import { useState } from 'react';
import ModalFile from './Modal/ModalFile';

export default function App() {
  const [Lista, setLista] = useState([]);
  const [text, settext] = useState();
  const[ItemSelected, setItemSelected] = useState([{id:2,nombre:'hola'}]);
  const [ModalVisible, setModalVisible] = useState(false);

  const onHandlerChangeItem = (text) => settext(text);
  const functionAdd = () =>{
    setLista(currentList => [
      ...currentList,{
        id : currentList.length,
        nombre: text
      }
    ]);
    settext();
  }

  const onHandlerDelete = id =>{
    setLista(currentItem => currentItem.filter(item => item.id !== id))
    setItemSelected([{id:2,nombre:''}]);
    setModalVisible(!ModalVisible);
  }
  const onHandlerModal = id =>{
      setItemSelected(Lista.filter(item => item.id === id))
      setModalVisible(!ModalVisible)
  }
  const closeModal =() =>{
    setModalVisible(!ModalVisible);
  }


  return (
    <View style={styles.container}>
      <ModalFile ModalVisible={ModalVisible} cerrar={closeModal} onHandlerDelete={onHandlerDelete} item={ItemSelected}/>
      <Input text={text} change={onHandlerChangeItem} click={functionAdd}/>
      <ItemListContainer Lista={Lista} modal={onHandlerModal}/>
    </View>
  );
}
