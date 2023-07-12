import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator,  } from "@react-navigation/native-stack";

import Routes from "./src/routes";
import AuthProvider from "./src/Context/auth";


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
