import { View, Text, TouchableOpacity } from "react-native";

export default function Game() {
    return (
        <View>
            <View>
                <Text>PTS</Text>
                <Text>TMP</Text>
            </View>
            <View>
                <Text>Sigla sorteada</Text>
            </View>
            <View>
                <Text>Input:</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Pular</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}