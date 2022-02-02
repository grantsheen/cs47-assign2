import { StyleSheet, View, TouchableOpacity, Image, ImageBackground, Text } from 'react-native';
import { Icons, Profiles, Themes } from '../assets/Themes';

export default function Profile() {
    return (
    <View style={styles.profile}>
        <ImageBackground style={[styles.picture, Themes.light.shadows]} imageStyle={styles.photo} source={Profiles.mtl.image}>
            <Text style={styles.name}> {Profiles.mtl.name} </Text>
            <Text style={styles.distance}> {Profiles.mtl.caption} </Text>
        </ImageBackground>
        <View style={styles.audio}>
          <Text style={styles.prompt}>My hottest take</Text>
          <View style={styles.response}> 
            <Image style={styles.play} source={Icons.player.light}/>
            <Image style={styles.wave} source={Icons.audioWave.light}/>
          </View>
        </View>
    </View>
    );    
}

const styles = StyleSheet.create({
    profile: {
        flexDirection: 'column',
        backgroundColor: Themes.light.bg,
        width: '100%',
        height: '80%',
        marginTop: 30,
        paddingHorizontal: 24
    },
    picture: {
        width: '100%',
        height: undefined,
        aspectRatio: 1 / 1.1,
        resizeMode: 'cover',
        position: 'relative',
    },
    photo: {borderRadius: 16},
    name: {
        fontFamily: 'Sydney', 
        fontSize: 44, 
        color: 'white',
        position: 'absolute',
        top: 16,
        left: 10
    },
    distance: {
        fontFamily: 'Sydney', 
        fontSize: 24, 
        color: 'white',
        position: 'absolute',
        bottom: 20,
        left: 10
    },
    prompt: {
        fontFamily: 'Sydney', 
        fontSize: 24, 
        color: 'black',
        position: 'absolute',
        top: 15,
        left: 15
    },
    audio: {
        backgroundColor: Themes.light.bgSecondary,
        borderRadius: 16,
        marginTop: 16,
    },
    response: {
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 16,
    },
    play: {
        resizeMode: "contain",
        width: "15%",
        marginRight: 8
    },
    wave: {
        width: "85%",
        resizeMode: "contain"
    }
});