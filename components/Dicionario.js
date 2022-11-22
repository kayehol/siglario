import { FlatList, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

import Sigla from './Sigla.js';
import { Filtro } from './Filtro.js';
import { siglas } from '../utils/siglas.js';

export default function Dicionario({ navigation }) {
    const [isFiltroOpen, setFiltroOpen] = useState(false);
    const [filtro, setFiltro] = useState('');
    const siglasOrdenadas = siglas.sort((a,b) => a.titulo.localeCompare(b.titulo));
    const siglasTags = [...new Set(siglas.map(sigla => sigla.tag))];
    const siglasFiltradas = siglasOrdenadas.filter((sigla) => sigla.tag == filtro);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('SiglaDetalhe', { id: item.id })}>
            <Sigla titulo={item.titulo} />
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity 
                onPress={() => setFiltroOpen(!isFiltroOpen)}
            >
                <Filtro />
            </TouchableOpacity>
            {isFiltroOpen && 
                <Picker
                    selectedValue={filtro}
                    onValueChange={(itemValue, itemIndex) => setFiltro(itemValue)}
                >
                    {siglasTags.map((tag) => <Picker.Item key={tag.indexOf()} label={tag} value={tag.toLocaleLowerCase()} />)}
                </Picker>
            }
            <FlatList 
                data={siglasOrdenadas}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ flex: 1, padding: 10}}
            />
        </View>
    );
}
