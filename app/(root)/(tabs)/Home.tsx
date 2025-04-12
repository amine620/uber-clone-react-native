import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className={"m-auto"}>
      <Text
        className={
          "flex justify-center m-auto text-xl text-red-500 align-middle"
        }
      >
        home
      </Text>
    </SafeAreaView>
  );
};
export default Home;
