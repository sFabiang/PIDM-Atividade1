import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NomeCurso from './Cabecalho';
import Disciplina from './Disciplina';
import FotoAluno from './Corpo';

export default function App() {
  
  //const nome = "João";
  //const curso = "Design"
  //const disciplina = ["PIDM", "CDP", "Probabilidade e Estatística"];
  
  export default class InfoAluno extends Component {
    render() {
      return (
        <View style={{alignItems: 'center', top: 50}}>
          <NomeCurso nome='Roberto Ferreira' />
          <NomeCurso curso='Design Digital' />
        </View>
      );
    }
  }

  export default class ListarDisciplina extends Component {
    render() {
      return (
        <View style={{alignItems: 'center', top: 50}}>
          <Disciplina nome='CDP' />
          <Disciplina nome='Projeto' />
          <Disciplina nome='PIDM' />
        </View>
      );
    }
  }
  
  return (
    <View style={styles.container}>
      <Image>{FotoAluno}</Image>
      <Text>{InfoAluno}</Text>
      <Text>{ListarDisciplina}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
