import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Ranking() {
    // fetch with react-query or fetch api
    const rankingMock = [
        { nome: 'Kaye', total: '130000'},
        { nome: 'Mari', total: '100000'},
        { nome: 'Gabriela', total: '50200'},
        { nome: 'Pedrinho', total: '90350'},
        { nome: 'José', total: '1000'},
        { nome: 'Maria', total: '500'},
        { nome: 'João', total: '200'},
        { nome: 'Marcos', total: '50'},
        { nome: 'Rodolfo', total: '30'},
        { nome: 'Smhir', total: '20'},
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                <FontAwesome name="trophy" size={40} color="gold" />
            </Text>
            {rankingMock.map((user, idx) => (
                <View key={idx} style={styles.line(idx)}>
                    <Text style={styles.nome} key={idx}> {idx+1} - {user.nome}</Text>
                    <Text style={styles.pontos}>{user.total}</Text>
                </View>
            ))
            }          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: '#16a085',
        padding: 20,
    },
    title: {
        textAlign: 'center',
        marginBottom: 20,
    },
    line: idx => ({
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