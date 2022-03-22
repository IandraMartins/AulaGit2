
import { StyleSheet, Text, View } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';

import Cabecalho from "./src/components/cabecalho";

import Botao from "./src/components/botao";

export default function App() {

  return (

    <View style={{backgroundColor:'#D3D3D3', flex:1}}>

      <Cabecalho></Cabecalho>

      <Botao Logo="ios-logo-android" texto="Jogos" cor="green"
      Logo2="ios-musical-notes" texto2="Musicas" cor2="blue"/>

      <Botao Logo="ios-journal" texto="Livros" cor="orange"
       Logo2="video-camera" texto2="Filmes" cor2="pink"/>
     

     </View>

  );
  }