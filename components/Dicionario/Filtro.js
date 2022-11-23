import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Filtro = () => (
    <View
        style={{ paddingHorizontal: 14, paddingVertical: 8, flexDirection: 'row' }}
    >
        <Ionicons name="filter" size={24} color="white" />
        <Text style={{ marginLeft: 10, alignSelf: 'center', color: 'white'}}>
            FILTRO
        </Text>
    </View>
) 