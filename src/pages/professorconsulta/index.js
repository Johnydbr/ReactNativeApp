  import { StatusBar } from 'expo-status-bar';
import {Text,View,FlatList,ActivityIndicator} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './style';



    

export default function professorconsulta(){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getProfessor = async () => {
      try {
       const response = await fetch('http://localhost:8080/projeto-evento/professor-json.php');
       const json = await response.json();
       setData(json.professor);
     } catch (error) {
       console.error(error);
     } finally {
       setLoading(false);
     }
   }
  
   useEffect(() => {
     getProfessor();
   }, []);
  
      
      return (
        <View style={styles.container}>
            <Text>pagina para consultar dados do professor</Text>

            {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ idProfessor }, index) => idProfessor}
          renderItem={({ item }) => (
            <Text>{item.idProfessor}, {item.nomeProfessor}</Text>
          )}
        />
      )}
            

            <StatusBar Style="auto"/>
        </View>
    );
}