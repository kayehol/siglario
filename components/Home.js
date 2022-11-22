import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Dicionario')}>
                <View style={ styles.menuItem }>
                    <FontAwesome 
                        name="search" 
                        size={24} 
                        color="white" 
                        style={ styles.menuItemIcon } 
                    />
                    <Text style={ styles.menuItemText }>
                        Dicionário
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
                <View style={ styles.menuItem }>
                    <MaterialCommunityIcons 
                        name="comment-question" 
                        size={24} 
                        color="white"
                        style={ styles.menuItemIcon } 
                    />
                    <Text style={ styles.menuItemText }>
                        Quiz
                    </Text>
                </View>
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
        padding: 20,
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row'
    },
    menuItemText: {
        color: 'white',
        fontSize: 28,
        marginLeft: 20,
        alignSelf: 'center'
    },
    menuItemIcon: {
        alignSelf: 'center'
    }
});