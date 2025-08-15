import { StatusBar } from 'expo-status-bar';
import {Text,View,TextInput,Button,Image,TouchableOpacity } from 'react-native';
import styles from './style';
import React, {useState} from 'react';  
import bandeirafj from '/expo/app-exemplo/img/bandeirafj.png';
import foguinho from '/expo/app-exemplo/img/fogueira.png';

export default function professorinserir(){

  const [convidado,setConvidado] = useState()
  const [dados,setDados] = useState()



  const verificar = ()=>{   
    const valores = convidado
    
		fetch('http://localhost:8080/projeto-evento/convidado-inserir.php', {
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				convidado: convidado,				
			})			
		})
    setDados(valores)        
  } 
 
    return (
        <View style={styles.container}>
                                <View style={styles.image}>
                      <Image            
                        style={styles.image}
                        source={bandeirafj}        
                      />
                   </View>

                   <Text style={styles.etec}>
                       <p> NA </p>
                     ETEC GUAIANASES
                  </Text>
    <View style = {styles.botoes}>
            <Text>Inserir o Convidado</Text>

            <TextInput style={styles.caixa} placeholder='Digite o nome'  
            autoFocus={true}
            onChangeText = {text =>setConvidado(text)}/>       

            <TouchableOpacity onPress={  ()=> verificar()}>
            <View style = {styles.botao}>
            <Text style={styles.texto}>
                        Salvar
                    </Text>
                    
                </View>
                <View style={{margin:15}}>
                <Text> {dados}  </Text>

                </View>
            </TouchableOpacity >

        
    </View>
    <View style={styles.image2}>
                      <Image            
                        style={styles.image2}
                        source={foguinho}        
                      />
                   </View>
            <StatusBar Style="auto"/>
        </View>
    );
}