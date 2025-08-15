import { StatusBar } from 'expo-status-bar';
import {Text,View,Button, TextInput, StyleSheet, Image,TouchableHighlight, TouchableOpacity} from 'react-native';

import bandeirafj from '/expo/app-exemplo/img/bandeirafj.png';
import foguinho from '/expo/app-exemplo/img/fogueira.png';

import styles from './style.js';
import { useNavigation } from '@react-navigation/native';



export default function Home(){
    
    const navigation = useNavigation();

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

            <TouchableOpacity onPress={ () => navigation.navigate('professor')}>
                <View style = {styles.botao}>
                    <Text style={styles.texto}>
                        PROFESSOR
                    </Text>
                </View>
            </TouchableOpacity >

            <TouchableOpacity  onPress={ () => navigation.navigate('aluno')}>
            <View style = {styles.botao}>
                   <Text style={styles.texto}>
                        ALUNO
                    </Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={ () => navigation.navigate('visitante')}>
            <View style = {styles.botao}>
                   <Text style={styles.texto}>
                        VISITANTE
                    </Text>
                </View>
            </TouchableOpacity>
            <StatusBar Style="auto"/>


            </View>
            <View style={styles.image2}>
                      <Image            
                        style={styles.image2}
                        source={foguinho}        
                      />
                   </View>



     
        </View>
        
    );
    
}