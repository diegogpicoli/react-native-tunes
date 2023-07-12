import React, { useContext, useEffect, useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { MyContext } from "../../Context/auth";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps  } from '@react-navigation/native-stack';

type RootStackParamList = {
  Tab: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Tab"
>

export default function LoginScreen() {
  const { updateName } = useContext(MyContext)
  const [username, setUsername] = useState("");
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleLogin = () => {
    updateName(username)
    navigation.navigate('Tab');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.imageView}>
          <Image
              source={require('../../../assets/logo.png')}
              style={styles.image}
            />
          </View>
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "80%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#8C52FF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  imageView: {
    alignItems: 'center'
  }
});
