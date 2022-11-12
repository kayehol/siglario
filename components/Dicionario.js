import {StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { siglas } from '../utils/siglas.js';

const Sigla = ({ titulo }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{titulo}</Text>
    </View>
)

export default function Dicionario() {
    const renderItem = ({ item }) => (
        <Sigla titulo={item.titulo}></Sigla>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={siglas}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    item: {
        backgroundColor: '#16a085',
        color: '#fff',
        padding: 20,
        marginVertical: 8,
    },
    title: {
        fontSize: 32,
        color: '#fff'
    },
});