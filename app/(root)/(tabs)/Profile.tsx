import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className={"m-auto"}>
      <Text
        className={
          "flex justify-center m-auto text-xl text-red-500 align-middle"
        }
      >
        profile
      </Text>
    </SafeAreaView>
  );
};
export default Profile;
