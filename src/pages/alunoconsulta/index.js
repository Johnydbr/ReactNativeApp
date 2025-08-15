import { StatusBar } from 'expo-status-bar';
import {Text,View,FlatList,ActivityIndicator} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './style';





export default function alunoconsulta(){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getAluno = async () => {
      try {
       const response = await fetch('http://localhost:8080/projeto-evento/aluno-json.php');
       const json = await response.json();
       setData(json.aluno);
     } catch (error) {
       console.error(error);
     } finally {
       setLoading(false);
     }
   }
  
   useEffect(() => {
     getAluno();
   }, []);
    return (
        <View style={styles.container}>
            <Text>pagina para consultar dados do aluno</Text>

            
            {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ idAluno }, index) => idAluno}
          renderItem={({ item }) => (
            <Text>{item.idAluno}, {item.nomeAluno}</Text>
          )}
        />
      )}
            
            

            <StatusBar Style="auto"/>
        </View>
    );
}