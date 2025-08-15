import { StatusBar } from 'expo-status-bar';
import {Text,View,TextInput,Button, TouchableOpacity } from 'react-native';
import styles from './style';

export default function professorparametro(){
 
    return (
        <View style={styles.container}>
            
             <TextInput style={styles.caixa} placeholder='Digite o nome' 
            autoFocus={true}
            onChangeText = {text =>setProfessor(text)}/>



            <Text>pagina das consultas de parametros do professor</Text>

       

        

            <StatusBar Style="auto"/>
        </View>
    );
}