import { View, Text, Button, TouchableOpacity }  from "react-native"
import styles from "./ItemStyle"

const Item = (props) => {
  return (
    <TouchableOpacity onPress={props.modal.bind(this,props.id)}>
    <View style={styles.item} >
        <Text>{props.text}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default Item