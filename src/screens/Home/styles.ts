import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexView: {flex: 1},
  containerSpace: {
    paddingHorizontal: 4,
  },
  headerView: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  headerText: {
    color: '#000',
    fontSize: 22,
  },
  mainViewItem: {
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 4,
    backgroundColor: '#fff',
  },
  pokemonImage: {
    height: Dimensions.get('screen').width / 3,
    width: Dimensions.get('screen').width / 3,
    borderRadius: 16,
  },
  pokemonName: {
    color: '#fff',
  },
  footerView: {
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
