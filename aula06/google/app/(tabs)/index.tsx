import { Image, StyleSheet, Text, Button, Alert, Pressable} from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { TextInput } from 'react-native-gesture-handler';
import React from 'react';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.body}>
      <Image source={require('../../assets/images/google_logo.svg')} style={styles.image} />
      <ThemedView style={styles.bar}>
        <Image source={require('../../assets/images/search.svg')} style={styles.image1} />
        <TextInput
          style={styles.input}
          placeholder="Pesquise aqui..."
          keyboardType="text"
        />
        <Image source={require('../../assets/images/keyb3.png')} style={styles.image2} />
        <Image source={require('../../assets/images/google-microphone-icon.svg')} style={styles.image2} />
        <Image source={require('../../assets/images/Google_Lens_Icon.svg')} style={styles.image2} />
      </ThemedView>

      <ThemedView style={styles.btns}>
      <Pressable>
        <Text>
          receba
        </Text>
        <Text>
          receba2
        </Text>
      </Pressable>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,  // Ocupa toda a tela
    backgroundColor: 'white',  // Cor de fundo como se fosse o body

    alignItems: 'center',  // Centraliza o conteúdo horizontalmente
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  image: {
    width: 400,
    height: 200,
    marginTop: 50,
    resizeMode: 'contain',  // Ajusta a imagem proporcionalmente
  },

  image1: {
    width: 30,
    height: 30,
    resizeMode: 'contain',  // Ajusta a imagem proporcionalmente
    marginLeft: 10,
  },

  image2: {
    width: 30,
    height: 30,
    resizeMode: 'contain',  // Ajusta a imagem proporcionalmente
    marginRight: 10,
  },

  bar: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: 'white',
    textAlignVertical: "center",
    textAlign: "center",
    alignItems: "center",
    width: 750,
    height: 60,
    borderRadius: 32,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  input: {
    height: 40,
    width: 500,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
  },

  btns: {
    marginTop: 30,
    width: 450,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "white",    
  },


});
