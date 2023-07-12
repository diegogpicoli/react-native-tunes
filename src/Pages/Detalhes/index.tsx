import { View, Text } from "react-native";



export default function Detalhes({ route }: { route: any}) {
const { id } = route.params;
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
}
