import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Filtro = () => (
    <View
        style={{ paddingHorizontal: 14, paddingVertical: 8, flexDirection: 'row' }}
    >
        <Ionicons name="filter" size={24} color="black" />
        <Text style={{ marginLeft: 10, alignSelf: 'center' }}>
            FILTRO
        </Text>
    </View>
) 