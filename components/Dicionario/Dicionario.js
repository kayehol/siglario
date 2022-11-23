import { FlatList, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';

import Sigla from './Sigla.js';
import { Filtro } from './Filtro.js';
import { siglas } from '../../utils/siglas.js';

export default function Dicionario({ navigation }) {
    const [isFiltroOpen, setFiltroOpen] = useState(false);
    const [filtro, setFiltro] = useState('');

    const siglasOrdenadas = siglas.sort((a,b) => a.titulo.localeCompare(b.titulo));
    const siglasTags = [...new Set(siglas.map(sigla => sigla.tag))];
    const siglasFiltradas = filtro !== '' ? siglasOrdenadas.filter((sigla) => sigla.tag == filtro) : siglasOrdenadas;

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('SiglaDetalhe', { id: item.id })}>
            <Sigla titulo={item.titulo} />
        </TouchableOpacity>
    );

    useEffect(() => {
        if (!isFiltroOpen) setFiltro('');
    }, [isFiltroOpen])

    return (
        <View style={{ flex: 1, backgroundColor: '#16a085', paddingVertical: 10 }}>
            <TouchableOpacity onPress={() => setFiltroOpen(!isFiltroOpen)}>
                <Filtro />
            </TouchableOpacity>
            {isFiltroOpen &&
                <View style={{ paddingHorizontal: 10 }}>
                    <Picker
                        selectedValue={filtro}
                        onValueChange={(itemValue, itemIndex) => setFiltro(itemValue)}
                        mode='dropdown'
                        dropdownIconColor='white'
                        style={{ color: 'white'}}
                    >
                        {siglasTags.map((tag) => <Picker.Item key={tag.indexOf()} label={tag} value={tag} />)}
                    </Picker>
                </View> 
            }
            <FlatList 
                data={siglasFiltradas}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ flex: 1, padding: 10}}
            />
        </View>
    );
}
