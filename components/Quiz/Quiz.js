import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

export default function Quiz({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Game')}>
                <View style={ styles.menuItem }>
                        <FontAwesome 
                            name="gamepad" 
                            size={24} 
                            color="white" 
                            style={ styles.menuItemIcon } 
                        />
                        <Text style={ styles.menuItemText }>
                            Iniciar
                        </Text>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={ styles.menuItem }>
                        <Feather 
                            name="settings" 
                            size={24} 
                            color="white" 
                            style={ styles.menuItemIcon } 
                        />
                        <Text style={ styles.menuItemText }>
                            Opções
                        </Text>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Ranking')}>
                <View style={ styles.menuItem }>
                        <FontAwesome 
                            name="list-ul" 
                            size={24} 
                            color="white" 
                            style={ styles.menuItemIcon } 
                        />
                        <Text style={ styles.menuItemText }>
                            Ranking
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
        backgroundColor: '#16a085',
        padding: 10,
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
      }
});