import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import {StyleSheet} from 'react-native';

export const IconeBusca = () => (
  <FontAwesome 
    name="search" 
    size={24} 
    color="white" 
    style={ styles.menuItemIcon } 
  />
);

export const IconeQuiz = () => (
  <MaterialCommunityIcons 
    name="comment-question" 
    size={24} 
    color="white"
    style={ styles.menuItemIcon } 
  />
);

export const IconeGamepad = () => (
  <FontAwesome 
      name="gamepad" 
      size={24} 
      color="white" 
      style={ styles.menuItemIcon } 
  />
);

export const IconeOpcoes = () => (
  <Feather 
    name="settings" 
    size={24} 
    color="white" 
    style={ styles.menuItemIcon } 
  />
);

export const IconeLista = () => (
  <FontAwesome 
    name="list-ul" 
    size={24} 
    color="white" 
    style={ styles.menuItemIcon } 
  />
);

const styles = StyleSheet.create({
  menuItemIcon: {
    alignSelf: 'center'
  },
});
