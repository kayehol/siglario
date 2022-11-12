import {StyleSheet, View, Button } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Button
                title="Dicionário"
                onPress={() => navigation.navigate('Dicionario')}
                style={ styles.button }
            />
            <Button 
                title="Quiz"
                onPress={() => navigation.navigate('Quiz')}
                style={ styles.button }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center',
      backgroundColor: '#95a5a6',
      padding: 10,
      marginVertical: 8,
    },
    button: {
        backgroundColor: '#16a085',
        color: '#fff',
        marginVertical: 20,
    }
});