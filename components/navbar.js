import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { Icons, Themes } from '../assets/Themes';

export default function NavBar() {
    return (
    <View style={styles.bar}>
        <TouchableOpacity>
            <Image style={styles.image} source={Icons.menu.light}/> 
        </TouchableOpacity>
        <Text style={styles.text}>ensom</Text>
        <TouchableOpacity>
            <Image style={styles.image} source={Icons.sun}/> 
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: Themes.light.bg,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? 41 : 54,
        width: '100%',
        marginTop: 16
    },
    image: {
        height: 50,
        width: 50
    },
    text: {
        fontSize: 36,
        fontFamily: 'Sydney-Bold',
        color: Themes.light.text
    }
});

