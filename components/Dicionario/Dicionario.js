import { FlatList, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState, useMemo } from 'react';

import Sigla from './Sigla.js';
import { Filtro } from './Filtro.js';
import { siglasTags, siglasOrdenadas } from '../../utils/siglas.js';

export default function Dicionario({ navigation }) {
    // const [isFiltroOpen, setFiltroOpen] = useState(false);
    // const [filtro, setFiltro] = useState('');

    const memoizedValue = useMemo(() => renderItem, siglasOrdenadas);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('SiglaDetalhe', { id: item.id })}>
            <Sigla titulo={item.titulo} />
        </TouchableOpacity>
    );
    // const handleChange = (itemValue) => itemValue == 'default' ? setFiltro('') : setFiltro(itemValue);
    
    // const siglasFiltradas = filtro !== '' ? siglasOrdenadas.filter((sigla) => sigla.tags.join(',') == filtro) : siglasOrdenadas;

    return (
        <View style={ styles.container }>
            {/* <TouchableOpacity onPress={() => setFiltroOpen(!isFiltroOpen)}>
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
                        {siglasTags.map((tags, idx) => <Picker.Item key={idx} label={tags.join(',')} value={tags.join(',')} />)}
                    </Picker>
                </View> 
            } */}
            <FlatList 
                // data={siglasFiltradas}
                maxToRenderPerBatch={10}
                updateCellsBatchingPeriod={50}
                initialNumToRender={10}
                windowSize={11}
                data={siglasOrdenadas}
                renderItem={renderItem}
                // renderItem={memoizedValue}
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