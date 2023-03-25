import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import React from "react";
import { siglas } from '../../utils/siglas.js';

export default function Game() {
    const [resposta, setResposta] = useState('');
    const [sigla, setSigla] = useState({});
    const buscarSiglaAleatoria = siglas[Math.floor(Math.random() * siglas.length)];

    useFocusEffect(
        React.useCallback(() => {
            const resultado = buscarSiglaAleatoria;
            setSigla(resultado);
        }, [])
    );

    return (
        <View style={styles.container} >
            <View style={styles.pontosETempo}>
                <View style={styles.pontos}>
                    <AntDesign name="star" size={24} color="white" />
                    <Text style={styles.pontos.valor}>10000</Text>
                </View>
                <View style={styles.tempo}>
                    <FontAwesome5 name="clock" size={24} color="white" />
                    <Text style={styles.tempo.valor}>0</Text>
                </View>
            </View>
            <View>
                <Text style={styles.sigla}>{sigla.titulo}</Text>
            </View>
            <View style={styles.input}>
                <TextInput
                    value={resposta}
                    onChangeText={(resposta) => setResposta(resposta)}
                    placeholder={'Resposta'}
                    style={styles.input}
                />
            </View>
            <View style={styles.btns}>
                <TouchableOpacity>
                    <Text style={styles.btns.enviar}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSigla(buscarSiglaAleatoria)}>
                    <Text style={styles.btns.pular}>Pular</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16a085',
        padding: 20,
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%'

    },
    pontosETempo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 10
    },
    pontos: {
        flexDirection: 'row',
        alignItems: 'center',
        valor: {
            fontSize: 30,
            color: '#fff',
            marginLeft: 10,
            fontWeight: 'bold'
        }
    },
    tempo: {
        flexDirection: 'row',
        alignItems: 'center',
        valor: {
            fontSize: 30,
            color: '#fff',
            marginLeft: 10,
            fontWeight: 'bold'
        }
    },
    sigla: {
        alignSelf: 'center',
        padding: 40,
        color: '#fff',
        fontSize: 50,
        fontWeight: 'bold',
        backgroundColor: '#127a66',
        borderRadius: 40,
        width: '100%',
        textAlign: 'center'
    },
    btns: {
        alignSelf: 'center',
        width: '100%',
        enviar: {
            color: '#fff',
            backgroundColor: '#127a66',
            fontSize: 30,
            paddingHorizontal: 30,
            paddingVertical: 15,
            marginBottom: 30,
            borderRadius: 20,
            textAlign: 'center',
            width: '75%',
            alignSelf: 'center'
        },
        pular: {
            color: '#fff',
            backgroundColor: '#127a66',
            fontSize: 20,
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 20,
            textAlign: 'center',
            width: '50%',
            alignSelf: 'center'
        }
    },
    input: {
        alignSelf: 'center',
        alignContent: 'flex-end',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        width: '100%'
    }
});
