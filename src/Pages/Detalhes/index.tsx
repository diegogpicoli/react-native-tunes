import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Sound from "react-native-sound";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import Play from "../../Components/play";

interface Item {
      previewUrl: string;
			trackName: string;
  }

export default function Detalhes({ route }: { route: any }) {
  const { id } = route.params;
  const [musics, setMusics] = useState<Item[]>([]);
	const [play, setPlay] = useState<boolean>(false)

	const [playbackObject, setPlaybackObject] = useState<Audio.Sound | null>(null)
  useEffect(() => {
    const getMusics = async (id: string) => {
        const request = await fetch(
          `https://itunes.apple.com/lookup?id=${id}&entity=song`
        );
        const requestJson = await request.json();

        setMusics(requestJson.results.slice(1, 10));
      };
      
    getMusics(id).then(() => {
        // console.log(musics);
    })
    
  }, []);

	const isPlay = (value: boolean) => {
		setPlay(value)
	}

	const setObjectPlay = (value: Audio.Sound | null) => {
		setPlaybackObject(value)
	}

  return (
		<View>
			{musics.length > 0 ? musics.map((item) => {
				return (
				<Play 
				key={item.previewUrl}
				play={play} 
				playbackObject={playbackObject} 
				setObjectPlay={setObjectPlay} 
				isPlay={isPlay} 
				previewUrl={item.previewUrl} 
				trackName={item.trackName} />
				)
			}) : <Text  style={styles.playButtonText}>Sem musica</Text> }
		
		</View>
	);
}

const styles = StyleSheet.create({
  musicPlayer: {
    marginBottom: 10,
  },
  trackName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  playButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  playButtonText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});
