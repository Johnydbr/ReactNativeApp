import { StatusBar } from 'expo-status-bar';
import {Text,View,ActivityIndicator,FlatList} from 'react-native';
import React, {useState,useEffect} from 'react';  
import styles from './style.js';





export default function visitanteconsultar(){

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getConvidado = async () => {
      try {
       const response = await fetch('http://localhost:8080/projeto-evento/convidado-json.php');
       const json = await response.json();
       setData(json.convidado);
     } catch (error) {
       console.error(error);
     } finally {
       setLoading(false);
     }
   }
  
   useEffect(() => {
     getConvidado();
   }, []);3
    return (
        <View style={styles.container}>
            <Text>pagina para consultar dados do visitante</Text>

            {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ idConvidado }, index) => idConvidado}
          renderItem={({ item }) => (
            <Text>{item.idConvidado}, {item.nomeConvidado}</Text>
          )}
        />
      )}
            

            <StatusBar Style="auto"/>
        </View>
    );
}