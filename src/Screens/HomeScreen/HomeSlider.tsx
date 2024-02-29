import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
} from 'react-native';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import GlobalApi from '../../utils/GlobalApi';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// const [banners, setBanners] = useState([]);

// useEffect(() => {
//   getSliders();
// }, []);

// const getSliders = () => {
//   GlobalApi.getBanners().then((resp) => {
//     setBanners(resp?.banners);
//   });
// };

import { FlatList as RNFlatList } from 'react-native';
import { IItemSliderImgProps, ItemSliderImg } from './components/ItemSliderImg';
import { IMockDataImg } from './components/MochData';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamListType } from '../../navigation/HomeStackScreen';
import ColorsVariable from '../../utils/ColorsVariable';

type ModalScreenNavigationPropType = NativeStackNavigationProp<
  RootStackParamListType,
  'Modal'
>;

export const HomeSlider: FC = () => {
  const [iconSliderIndex, setIconSliderIndex] = useState(0);
  const [banners, setBanners] = useState([]);

  const ref = useRef<RNFlatList>(null);

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = () => {
    GlobalApi.getBanners().then((resp) => {
      setBanners(resp?.banners);
    });
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // If current index dont last then slider will be +1
  //     if (iconSliderIndex < banners.length - 1) {
  //       ref.current.scrollToIndex({ index: iconSliderIndex + 1, animated: true });
  //     } else {
  //       // If current slider is last then slider move to start
  //       ref.current.scrollToIndex({ index: 0, animated: true });
  //     }
  //   }, 3000);

  //   //Cleat interval after unmount. This do important that dont have side effects
  //   return () => clearInterval(interval);
  // }, [iconSliderIndex]);

  const onScrollSlider = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    const slider = Math.round(
      event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
    );

    setIconSliderIndex(slider);
  };

  const pressDotsSlider = (index: number): void => {
    ref.current.scrollToIndex({ index: index, animated: true });
  };

  const renderSliderDots: ListRenderItem<IMockDataImg> = useCallback(
    ({ index }) => {
      return (
        <Pressable onPress={() => pressDotsSlider(index)}>
          <View
            style={
              index === iconSliderIndex ? styles.sliderDotsActive : styles.sliderDots
            }
          />
        </Pressable>
      );
    },
    [iconSliderIndex]
  );

  const renderImgItem = ({ item }: IItemSliderImgProps) => {
    return (
      <View style={{ marginHorizontal: 10 }}>
        <Image style={styles.sliderImage} source={{ uri: item?.image.url }} />
      </View>
    );
  };

  return (
    <View style={styles.sliderContainer}>
      <FlatList
        style={styles.sliderList}
        data={banners}
        renderItem={renderImgItem}
        keyExtractor={(item) => item.id}
        ref={ref}
        horizontal
        pagingEnabled
        onScroll={onScrollSlider}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.sliderDotsContainer}>
        <FlatList
          data={banners}
          renderItem={renderSliderDots}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    marginHorizontal: -10,
    // alignItems: 'center',
    // flex: 1,
    // backgroundColor: 'red',
  },

  sliderList: {},
  // bannerList: { width: 400, height: 300 },

  sliderImage: {
    width: 350,
    height: 150,
    borderRadius: 20,
    // objectFit: 'contain',
  },

  sliderDotsContainer: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    // top: 10,
    alignItems: 'center',
  },
  sliderDots: {
    width: 15,
    height: 15,
    margin: 5,
    borderRadius: 10,
    borderWidth: 2,
  },
  sliderDotsActive: {
    width: 15,
    height: 15,
    margin: 5,
    borderRadius: 10,
    backgroundColor: ColorsVariable.black,
  },
});
