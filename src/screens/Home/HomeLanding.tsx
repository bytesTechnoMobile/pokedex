import {
  ActivityIndicator,
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {API_CONFIG, stringList} from '../../constants';
import {styles} from './styles';

export const HomeLanding = () => {
  const [pokemonData, setPokemonData] = useState<Array<object>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [config, setConfig] = useState<any>({});

  /**
   * generate Color Function
   * @returns Random Color Value
   */
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  /**
   * API call for Get Initial pokemon data
   */
  useEffect(() => {
    axios
      .get(`${API_CONFIG.BASE_URL}?limit=20&offset=0`)
      .then(res => {
        setPokemonData(res.data.results);
        let configValue = {
          nextPageAPI: res.data.next,
          totalCount: res.data.count,
        };
        setConfig(configValue);
      })
      .catch(err => {
        Alert.alert(err?.message);
      });
  }, []);

  /**
   * On END Pagination API
   */
  const nextPageAPI = async () => {
    setLoading(true);
    await axios
      .get(config.nextPageAPI)
      .then(res => {
        setPokemonData([...pokemonData, ...res.data.results]);
        let configValue = {
          nextPageAPI: res.data.next,
          totalCount: res.data.count,
        };
        setConfig(configValue);
      })
      .catch(err => {
        Alert.alert(err?.data || 'Something went wrong');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  /**
   * Render Item for List of pokemon
   * @param param0
   * @returns
   */
  const renderItem = ({item, index}: any) => {
    let imageURL = `${stringList.POKEMON_IMAGE}${index + 1}.png`;
    if (item?.color == null) {
      item.color = generateColor();
    }
    return (
      <View style={[styles.mainViewItem, {backgroundColor: item.color}]}>
        <FastImage
          style={[styles.pokemonImage]}
          source={{
            uri: imageURL,
            priority: FastImage.priority.normal,
          }}
        />
        <Text style={styles.pokemonName}>{item?.name}</Text>
      </View>
    );
  };

  /**
   * Show loading when pagination
   * @returns Footer Loader
   */
  const listFooterComponent = () => {
    return (
      <>
        {loading ? (
          <View style={styles.footerView}>
            <ActivityIndicator size={'large'} />
          </View>
        ) : null}
      </>
    );
  };

  /**
   * Main Render Function
   */
  return (
    <SafeAreaView style={styles.flexView}>
      <View style={styles.flexView}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Pokedex</Text>
        </View>
        <FlatList
          data={pokemonData}
          numColumns={2}
          initialNumToRender={20}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.containerSpace}
          ListFooterComponent={listFooterComponent}
          onEndReached={() => {
            if (
              !loading &&
              config.nextPageAPI &&
              config.totalCount !== pokemonData.length
            ) {
              nextPageAPI();
            }
          }}
          onEndReachedThreshold={1}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};
