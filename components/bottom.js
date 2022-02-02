import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { Icons } from '../assets/Themes';

export default function Bottom() {
    return (
    <View style={styles.bar}>
        <TouchableOpacity>
          <Image style={styles.button} source={Icons.discover.light}/> 
          <Text style={styles.text}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.button} source={Icons.heart.light}/> 
          <Text style={styles.text}>Matches</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.button} source={Icons.messages.light}/> 
          <Text style={styles.text}>DMs</Text>
        </TouchableOpacity>
      </View>
    );
}

export const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        backgroundColor: 'black',
        width: '100%',
        height: '10%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        resizeMode: 'contain',
        width: '100%',
        height: '40%'
    },
    text: {
        fontFamily: 'Sydney', 
        fontSize: 20, 
        color: 'white',
    }
});