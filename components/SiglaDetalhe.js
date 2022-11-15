import {StyleSheet, Text, View } from 'react-native';
import { siglas } from '../utils/siglas.js';

export default function SiglaDetalhe({ route }) {
    const { id } = route.params;
    const siglaFiltrada = siglas.filter(sigla => sigla.id == id)

    const mostrarSigla = siglaFiltrada.map(sigla => {
        return (
            <View key={sigla.id}>
                <Text style={styles.sigla}>
                    {sigla.titulo}
                </Text>
                <Text style={ styles.significado }>
                    {sigla.significado}
                </Text>
            </View>
        )
    })
    return (
        <View style={styles.container}>
            { mostrarSigla }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#16a085',
      padding: 20,
      alignItems: 'flex-start', 
      justifyContent: 'flex-start'
    },
    sigla: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    },
    significado: {
        fontSize: 34,
        color: 'white',
        marginTop: 10
    }
});