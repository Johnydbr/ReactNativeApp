import { StatusBar } from 'expo-status-bar';
import {Text,View,TouchableOpacity, Image} from 'react-native';
import bandeirafj from '/expo/app-exemplo/img/bandeirafj.png';
import foguinho from '/expo/app-exemplo/img/fogueira.png';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function Aluno(){
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
            <Text>pagina aluno</Text>

            <View style = {styles.botoes}>

            <TouchableOpacity onPress={ () => navigation.navigate('alunoinserir')}>
                <View style = {styles.botao}>
                <Text style={styles.texto}>
                        INSERIR
                    </Text>
                </View>
            </TouchableOpacity >

            <TouchableOpacity onPress={ () => navigation.navigate('alunoconsulta')}>
                <View style = {styles.botao}>
                <Text style={styles.texto}>
                        CONSULTAR
                    </Text>
                </View>
            </TouchableOpacity >

            <TouchableOpacity onPress={ () => navigation.navigate('alunoparametro')}>
                <View style = {styles.botao}>
                <Text style={styles.texto}>
                        CONSULTAR PARAMETRO
                    </Text>
                </View>
            </TouchableOpacity >
        </View>
            <StatusBar Style="auto"/>


            <View style={styles.image2}>
                      <Image            
                        style={styles.image2}
                        source={foguinho}        
                      />
                   </View>
        </View>
    );
}