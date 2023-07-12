import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from './Pages/LoginScreen';
import Home from './Pages/Home';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Favoritas from './Pages/Favoritas';
import Perfil from './Pages/Perfil';



const Tab = createMaterialTopTabNavigator();

const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
      <NavigationContainer independent={true}>
        <Tab.Navigator style={{marginTop: 30}}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Favoritas" component={Favoritas} />
          <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

function Routes() {
 return (
  <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
   <Stack.Screen name="Tab" component={HomeTabs} options={{ headerShown: false }} />
  </Stack.Navigator>
  );
}


export default Routes;