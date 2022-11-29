import { FlatList, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';

import Sigla from './Sigla.js';
import { Filtro } from './Filtro.js';
import { siglas } from '../../utils/siglas.js';

export default function Dicionario({ navigation }) {
    const [isFiltroOpen, setFiltroOpen] = useState(false);
    const [filtro, setFiltro] = useState('');

    const siglasTags = [...new Set(siglas.map(sigla => sigla.tag))];
    
    const siglasOrdenadas = siglas.sort((a,b) => a.titulo.localeCompare(b.titulo));
    const siglasFiltradas = filtro !== '' ? siglasOrdenadas.filter((sigla) => sigla.tag == filtro) : siglasOrdenadas;

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('SiglaDetalhe', { id: item.id })}>
            <Sigla titulo={item.titulo} />
        </TouchableOpacity>
    );

    const handleChange = (itemValue) => itemValue == 'default' ? setFiltro('') : setFiltro(itemValue);

    return (
        <View style={ styles.container }>
            <TouchableOpacity onPress={() => setFiltroOpen(!isFiltroOpen)}>
                <Filtro />
            </TouchableOpacity>
            {isFiltroOpen &&
                <View style={ styles.containerFiltro }>
                    <Picker
                        selectedValue={filtro}
                        onValueChange={(itemValue) => handleChange(itemValue)}
                        mode='dropdown'
                        dropdownIconColor='white'
                        style={ styles.picker }
                    >
                        <Picker.Item label='Nenhum' value='default' />
                        {siglasTags.map((tag) => <Picker.Item key={tag.indexOf()} label={tag} value={tag} />)}
                    </Picker>
                </View> 
            }
            <FlatList 
                data={siglasFiltradas}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={ styles.lista }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#16a085', 
        paddingVertical: 10 
    },
    containerFiltro: {
        paddingHorizontal: 10
    },
    lista: {
        flex: 1, 
        padding: 10
    },
    picker: {
        color: 'white'
    }
})