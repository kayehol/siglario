import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function GameOver({ route, navigation }) {
    const { pontos } = route.params;

    return (
        <View style={ styles.container }>
            <Text style={ styles.menuItemText }>VOCÊ FEZ {pontos} PONTOS</Text>
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('EnviarPlacar', {total: pontos})}
                    style={ styles.menuItem }
                >
                    <Text style={ styles.menuItemText }>Enviar resultado</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Quiz')} 
                    style={ styles.menuItem }
                >
                    <Text style={ styles.menuItemText }>Voltar para menu</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center',
      backgroundColor: '#16a085',
      paddingHorizontal: 10,
    },
    menuItem: {
        backgroundColor: '#127a66',
        padding: 20,
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    menuItemText: {
        color: 'white',
        fontSize: 28,
        marginLeft: 10,
        alignSelf: 'center'
    },
    menuItemIcon: {
        alignSelf: 'center'
    },
    menuItemTitle: {
        color: 'white',
        fontSize: 100,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
});
