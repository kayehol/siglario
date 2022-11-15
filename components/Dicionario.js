import { FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import Sigla from './Sigla.js';
import { siglas } from '../utils/siglas.js';

export default function Dicionario({ navigation }) {
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('SiglaDetalhe', { id: item.id })}>
            <Sigla titulo={item.titulo} />
        </TouchableOpacity>
    );
    const siglasOrdenadas = siglas.sort((a,b) => a.titulo.localeCompare(b.titulo));

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList 
                data={siglasOrdenadas}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ flex: 1, padding: 10}}
            />
        </SafeAreaView>
    );
}
