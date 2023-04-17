import { View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import React from "react";
import { siglas } from '../../utils/siglas.js';
import { cores } from '../UI/cores.js';

export default function Game({ navigation }) {
    const [pontos, setPontos] = useState(0);
    const [segundos, setSegundos] = useState(0);
    const [text, onChangeText] = useState('');
    const [sigla, setSigla] = useState({});
    const [respondido, setRespondido] = useState(false);
    const [correto, setCorreto] = useState(false);

    const buscarSiglaAleatoria = siglas[Math.floor(Math.random() * siglas.length)];
    const formatar = input => input.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""); // remove acentos

    const handleEnviar= () => {
        const resposta = formatar(text);
        const significado = formatar(sigla.significado);
        const ponto = 100;
        
        if (resposta == significado) { 
            setCorreto(true); 
            setPontos(pontos + ponto);
        } else { 
            setCorreto(false); 
        }

        setRespondido(true);
        setTimeout(() => handlePular(), 1000);
    }
    const handlePular = () => {
        onChangeText('');
        setCorreto(false);
        setRespondido(false);
        setSigla(buscarSiglaAleatoria);
    }

    useFocusEffect(
        React.useCallback(() => {
            setSigla(buscarSiglaAleatoria);
            setPontos(0);
            setSegundos(0);

            const timer = setInterval(() => {
                setSegundos(segs => segs+1);
            }, 1000);

            return () => clearInterval(timer);
        }, [])
    );

    useEffect(() => {
        const timeout = 60;

        if (segundos > timeout) { 
            setSegundos(0);
            navigation.navigate("GameOver", { pontos: pontos });
        }
    }, [segundos]);

    return (
        <View style={styles.container} >
            <View style={styles.pontosETempo}>
                <View style={styles.pontos}>
                    <AntDesign name="star" size={24} color="white" />
                    <Text style={styles.pontos.valor}>{pontos}</Text>
                </View>
                <View style={styles.tempo}>
                    <FontAwesome5 name="clock" size={24} color="white" />
                    <Text style={styles.tempo.valor}>{segundos}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.sigla}>{sigla.titulo}</Text>
            </View>
            <View>
                { respondido && <Text style={styles.resultado}>{ correto ? 'Correto!' : 'Incorreto!' }</Text>}
            </View>
            <View style={styles.input}>
                <SafeAreaView>
                    <TextInput
                        value={text}
                        onChangeText={onChangeText}
                        placeholder={'Resposta'}
                        style={styles.input}
                    />
                </SafeAreaView>
            </View>
            <View style={styles.btns}>
                <TouchableOpacity onPress={handleEnviar}>
                    <Text style={styles.btns.enviar}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePular}>
                    <Text style={styles.btns.pular}>Pular</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: cores.corFundo,
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
            color: cores.corTexto,
            marginLeft: 10,
            fontWeight: 'bold'
        }
    },
    tempo: {
        flexDirection: 'row',
        alignItems: 'center',
        valor: {
            fontSize: 30,
            color: cores.corTexto,
            marginLeft: 10,
            fontWeight: 'bold'
        }
    },
    sigla: {
        alignSelf: 'center',
        padding: 40,
        color: cores.corTexto,
        fontSize: 50,
        fontWeight: 'bold',
        backgroundColor: cores.corBotao,
        borderRadius: 40,
        width: '100%',
        textAlign: 'center'
    },
    btns: {
        alignSelf: 'center',
        width: '100%',
        enviar: {
            color: cores.corTexto,
            backgroundColor: cores.corBotao,
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
            color: cores.corTexto,
            backgroundColor: cores.corBotao,
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
        backgroundColor: cores.corTexto,
        padding: 10,
        borderRadius: 20,
        width: '100%'
    },
    resultado: {
        color: cores.corTexto,
        fontSize: 20,
        fontWeight: 'bold'
    }
});
