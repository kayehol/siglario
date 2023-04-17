import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { FontAwesome } from '@expo/vector-icons';

import { cores } from '../UI/cores.js';
import BotaoMenu from '../UI/BotaoMenu';

export default function Ranking({ navigation }) {
    const [ranking, setRanking] = useState([]);
    const getData = async () => {
        try {
            const jsonPlacar = await AsyncStorage.getItem('placar')
            jsonPlacar !== null && setRanking([JSON.parse(jsonPlacar)]); 
        } catch(e) {
            console.log(e)
        }
    }
    function fillPlacar() {
        getData()
    }
    useEffect(() => fillPlacar(), []);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                <FontAwesome name="trophy" size={40} color="gold" />
            </Text>
            { ranking.length > 0 && ranking.map((user, idx) => (
                <View key={idx} style={styles.linha(idx)}>
                    <Text style={styles.nome} key={idx}> {idx+1} - {user.nome}</Text>
                    <Text style={styles.pontos}>{user.total}</Text>
                </View>
            ))
            }          
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
                <BotaoMenu texto="Menu" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: cores.corFundo,
        padding: 20,
    },
    titulo: {
        textAlign: 'center',
        marginBottom: 20,
    },
    linha: idx => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: idx % 2 == 0 ? 'grey' : 'darkgrey',
        padding: 10
    }),
    nome: {
        color: '#fff',
        fontSize: 20,
    },
    pontos: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        alignContent: 'flex-end'
    }
})
