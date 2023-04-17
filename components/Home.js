import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import BotaoMenu from './UI/BotaoMenu.js';
import { cores } from './UI/cores.js';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={ styles.menuItemTitle }>
                SIG
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Dicionario')}>
                <BotaoMenu nomeIcone="busca" texto="Dicionário" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
                <BotaoMenu nomeIcone="quiz" texto="Quiz" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center',
      backgroundColor: cores.corFundo,
      paddingHorizontal: 10,
    },
    menuItemTitle: {
        color: cores.corTexto,
        fontSize: 100,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
});
