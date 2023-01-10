import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function GameOver() {
    return (
        <View>
            <Text>VOCÊ FEZ 125002 PONTOS</Text>
            <View>
                <TouchableOpacity>
                    <Text>Enviar resultado</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Voltar para menu</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}