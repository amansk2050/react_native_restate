import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-3xl text-violet-500 my-10 font-rubik">
        Welcome to restate
      </Text>
      <Link href="/sign-in" className="font-rubik">
        Sign In
      </Link>
      <Link href="/explore" className="font-rubik">
        Explore
      </Link>
      <Link href="/profile" className="font-rubik">
        Profile
      </Link>
      <Link href="/properties/1" className="font-rubik">
        Property
      </Link>
    </View>
  );
}
