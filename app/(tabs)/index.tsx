import { StyleSheet, Platform, View, Text, SafeAreaView} from 'react-native';
import {StatusBar} from "expo-status-bar";

export default function HomeScreen() {
  return (
   <SafeAreaView className={"color-amber-600"}>
       <Text>Hello amine mourid you are amazing dude</Text>
     <StatusBar style={"auto"} />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
