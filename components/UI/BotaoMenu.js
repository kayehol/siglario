import {StyleSheet, View, Text} from 'react-native';
import { cores } from './cores.js';
import { IconeBusca, IconeQuiz, IconeGamepad, IconeOpcoes, IconeLista } from './icones.js';


export default function BotaoMenu({ nomeIcone, texto }) {
  let icone = '';
  switch (nomeIcone) {
    case 'busca':
      icone = <IconeBusca />
      break;
    case 'quiz':
      icone = <IconeQuiz />
      break;
    case 'gamepad':
      icone = <IconeGamepad />
      break;
    case 'opcoes':
      icone = <IconeOpcoes />
      break;
    case 'lista':
      icone = <IconeLista />
      break;
  }
  return (
    <View style={ styles.menuItem }>
      { icone && icone }
      <Text style={ styles.menuItemText }>
        { texto }  
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  menuItem: {
        backgroundColor: cores.corBotao,
        padding: 20,
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    menuItemText: {
        color: cores.corTexto,
        fontSize: 28,
        marginLeft: 10,
        alignSelf: 'center'
    },
});
