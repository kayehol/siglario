import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Dicionario')}>
                <Text style={ styles.menuItem }>
                    Dicionário
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
                <Text style={ styles.menuItem }>
                    Quiz
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center',
      backgroundColor: 'lightgrey',
      padding: 10,
      marginVertical: 8,
    },
    menuItem: {
        backgroundColor: '#16a085',
        color: 'white',
        padding: 20,
        marginTop: 20,
        fontSize: 28,
        borderRadius: 10
    }
});