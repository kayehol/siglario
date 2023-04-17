import {StyleSheet, TouchableOpacity, View } from 'react-native';
import BotaoMenu from '../UI/BotaoMenu';
import { cores } from '../UI/cores.js';

export default function Quiz({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Game')}>
                <BotaoMenu nomeIcone="gamepad" texto="Iniciar" />
            </TouchableOpacity>
            {}<TouchableOpacity>
                <BotaoMenu nomeIcone="opcoes" texto="Opções" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Ranking')}>
                <BotaoMenu nomeIcone="lista" texto="Ranking" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: cores.corFundo, 
        padding: 10,
    },
});
