import { FlatList, View, Button} from 'react-native';
import styles from './ListStyle';
import Item from '../Item/Item';

const ItemListContainer = (props) => {
  return (

        <View style={styles.container}>
            <FlatList style={styles.listStyle}
                data= {props.Lista}
                renderItem = { data => (
                 <Item modal={props.modal} key={data.item.id} text={data.item.nombre} id={data.item.id}/>
                )}
                keyExtractor={(item) => item.id}/>
        </View>
    )
}

export default ItemListContainer