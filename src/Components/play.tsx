import { View, Text, StyleSheet, TouchableOpacity  } from "react-native";
import Sound from 'react-native-sound';import { Audio } from 'expo-av';

interface Item {
    previewUrl: string;
    trackName: string;
		play: boolean;
		isPlay: (value: boolean) => void;
		playbackObject: Audio.Sound | null;
		setObjectPlay: (value: Audio.Sound | null) => void;
	
}

export default function Play({ play, isPlay, previewUrl, trackName, playbackObject, setObjectPlay }: Item) {
		
    const Play = async () => {
			if (playbackObject) {

				await playbackObject.pauseAsync()
				isPlay(false);
				setObjectPlay(null);
			} else {

				const { sound } = await Audio.Sound.createAsync(
					{ uri: previewUrl },
					{ shouldPlay: true }
				);
				setObjectPlay(sound);
				isPlay(true);
				await playbackObject!.playAsync()
			}
    }

  return (
    <View style={styles.viewPlay}>
    	<Text>{trackName}</Text>
      <TouchableOpacity onPress={Play} style={styles.playButton}>
        <Text style={styles.playButtonText}>{ play ? "Pausar" : "Reproduzir"}</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
	viewPlay: {
		alignItems: 'center',
	},
    playButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
			width: '50%'
    },
    playButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });