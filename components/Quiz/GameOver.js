import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BotaoMenu from "../UI/BotaoMenu";
import { cores } from "../UI/cores";

export default function GameOver({ route, navigation }) {
    const { pontos } = route.params;

    return (
        <View style={ styles.container }>
            <Text style={ styles.chamadaPontos }>VOCÊ FEZ {pontos} PONTOS</Text>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('EnviarPlacar', {total: pontos})}>
                    <BotaoMenu texto="Enviar resultado" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
                    <BotaoMenu texto="Menu" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center',
      backgroundColor: cores.corFundo,
      paddingHorizontal: 10,
    },
    chamadaPontos: {
        fontSize: 28,
        color: cores.corTexto,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});
