import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";

export default function GameOver({ route, navigation }) {
    const [nome, onChangeText] = useState("");
    const { total } = route.params;

    const handleEnviar = async (nome, total) => {
        try {
            const placar = { nome: nome, total: total };
            const jsonPlacar = JSON.stringify(placar);
            const retorno = await AsyncStorage.setItem('placar', jsonPlacar);

            retorno !== null && navigation.navigate('Ranking');
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <View style={ styles.container }>
            <View style={ styles.container }>
                <SafeAreaView>
                    <TextInput
                        value={nome}
                        onChangeText={onChangeText}
                        placeholder={'Resposta'}
                        style={styles.input}
                    />
                </SafeAreaView>
                <TouchableOpacity 
                    onPress={() => handleEnviar(nome,total)}
                    style={ styles.menuItem }
                >
                    <Text 
                        style={ styles.menuItemText }
                    >
                        Enviar pontuação
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center',
      backgroundColor: '#16a085',
      paddingHorizontal: 10,
    },
    menuItem: {
        backgroundColor: '#127a66',
        padding: 20,
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    menuItemText: {
        color: 'white',
        fontSize: 28,
        marginLeft: 10,
        alignSelf: 'center'
    },
    menuItemIcon: {
        alignSelf: 'center'
    },
    menuItemTitle: {
        color: 'white',
        fontSize: 100,
        fontWeight: 'bold',
        alignSelf: 'center',
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
