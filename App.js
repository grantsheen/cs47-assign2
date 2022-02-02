// loads components being used in the app
import AppLoading from 'expo-app-loading';
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import NavBar from './components/navbar'
import Profile from './components/profile'
import Bottom from './components/bottom'

export default function App() {
  let [fontsLoaded] = useFonts({
    'Sydney': require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/
  
  return (
    <SafeAreaView style={styles.container}>
      <NavBar/>
      <Profile/>
      <Bottom/>
      <View style={{backgroundColor: "black", height: "10%"}}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
  }
});
