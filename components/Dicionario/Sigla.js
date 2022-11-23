import {StyleSheet, Text, View } from 'react-native';

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
        backgroundColor: '#127a66',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10
    },
    titulo: {
        fontSize: 32,
        color: '#fff'
    },
});