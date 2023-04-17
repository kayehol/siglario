import { FlatList, View, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { useState } from 'react';

import Sigla from './Sigla.js';
import { siglasOrdenadas } from '../../utils/siglas.js';
import { cores } from '../UI/cores.js';

export default function Dicionario({ navigation }) {
    const [busca, setBusca] = useState('');
    const siglasFiltradas = siglasOrdenadas.filter(sigla => sigla.titulo.toLowerCase().includes(busca.toLowerCase()));
    const renderSiglas= busca != '' ? siglasFiltradas : siglasOrdenadas;

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('SiglaDetalhe', { id: item.id })}>
            <Sigla titulo={item.titulo} />
        </TouchableOpacity>
    );

    return (
        <View style={ styles.container }>
            <View style={ styles.busca } >
               <SafeAreaView>
                    <TextInput 
                        value={busca}
                        onChangeText={setBusca}
                        placeholder="Buscar uma sigla"
                        style={styles.input}
                    />
                </SafeAreaView> 
            </View>
            <FlatList 
                maxToRenderPerBatch={10}
                updateCellsBatchingPeriod={50}
                initialNumToRender={10}
                windowSize={11}
                data={renderSiglas}
                renderItem={renderItem}
                keyExtractor={(item, index) => String(index)}
                style={ styles.lista }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: cores.corFundo, 
        padding: 10 
    },
    containerFiltro: {
        paddingHorizontal: 10
    },
    lista: {
        flex: 1, 
    },
    input: {
        alignSelf: 'center',
        alignContent: 'flex-end',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        width: '100%',
        paddingLeft: 20
    },
    busca: {
        paddingVertical: 10
    }
})
