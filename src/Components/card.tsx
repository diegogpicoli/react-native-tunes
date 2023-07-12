import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface CardProps {
  id: string;
  image: string;
  artista: string;
  name: string;
}

type RootStackParamList = {
  Detalhes: { id: string };
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Detalhes"
>

const Card: React.FC<CardProps> = ({ id, image, artista, name }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleCardPress = (id: string) => {
    navigation.navigate('Detalhes', { id: id });
  };

  return (
    <View style={styles.cardView}>
      <TouchableOpacity style={styles.card} onPress={() => handleCardPress(id)}>
        <View>
          <Image source={{ uri: image }} style={styles.cardImage} />
          <Text style={styles.cardName}>{`Musica: ${name.length > 15 ? name.split(' ')[0] : name}`}</Text>
          <Text style={styles.cardName}>{`Artista: ${artista.length > 15 ? artista.split(' ')[0] : artista}`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    margin: 10,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: 200,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Card;