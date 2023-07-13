import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, TextInput, Button, FlatList, StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";
import Card from "../../Components/card";
import { searchAlbumsAPI, Album} from "../../utils";
import SoundPlayer from 'react-native-sound-player';

interface Item {
  Object: {
    artistId: string;
    artistName: string;
    artistViewUrl: string;
    collectionId: number;
    collectionName: string;
  };
}

const SearchComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Album[]>([]);

  const handleSearch = async (artistNameURL: string) => {
    const data = await searchAlbumsAPI(artistNameURL);
    setSearchResults(data);
  };

  const playAudio = () => {
    try {
      SoundPlayer.playSoundFile('nome_do_arquivo', 'mp3');
    } catch (error) {
      console.log('Erro ao reproduzir o áudio:', error);
    }
  };


  return (
    <View>
      <View style={styles.searchView}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Nome do artista"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
          <TouchableOpacity style={styles.button} onPress={() => handleSearch(searchQuery)}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
      </View>
      <SafeAreaView>
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.collectionId.toString()}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
              id={item.collectionId.toString()}
              image={item.artworkUrl100}
              artista={item.artistName}
              name={item.collectionName}
            />
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputSearch: {
      width: '80%',
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#8C52FF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: "50%"
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  searchView: {
    alignItems: 'center'
  }
});


export default SearchComponent;
