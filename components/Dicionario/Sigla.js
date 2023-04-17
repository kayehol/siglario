import {StyleSheet, Text, View } from 'react-native';
import { cores } from '../UI/cores.js';

export default function Sigla({ titulo }) {
    return (
        <View style={styles.sigla}>
            <Text style={styles.titulo}>
                {titulo}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    sigla: {
        backgroundColor: cores.corBotao,
        padding: 20,
        marginVertical: 8,
        borderRadius: 10
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: cores.corTexto 
    },
});
