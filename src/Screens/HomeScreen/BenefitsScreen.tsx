import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import {
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CustomTouchable } from '../../components/CustomTouchable';
import { FlatList as RNFlatList } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamListType } from '../../navigation/HomeStackScreen';
import { FlatList } from 'react-native';
import { IMockDataImg, mockDataImg } from './components/MochData';
import { IItemSliderImgProps, ItemSliderImg } from './components/ItemSliderImg';

type ModalScreenNavigationPropType = NativeStackNavigationProp<
  RootStackParamListType,
  'Modal'
>;

export const BenefitsScreen: FC = () => {
  const [iconSliderIndex, setIconSliderIndex] = useState(0);

  const ref = useRef<RNFlatList>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // If current index dont last then slider will be +1
      if (iconSliderIndex < mockDataImg.length - 1) {
        ref.current.scrollToIndex({ index: iconSliderIndex + 1, animated: true });
      } else {
        // If current slider is last then slider move to start
        ref.current.scrollToIndex({ index: 0, animated: true });
      }
    }, 3000);

    //Cleat interval after unmount. This do important that dont have side effects
    return () => clearInterval(interval);
  }, [iconSliderIndex]);

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
          <View style={index === iconSliderIndex ? styles.dotsActive : styles.dots} />
        </Pressable>
      );
    },
    [iconSliderIndex]
  );

  const renderImgItem = ({ item }: IItemSliderImgProps) => {
    return <ItemSliderImg item={item} />;
  };

  return (
    <View style={styles.wrapBanner}>
      <FlatList
        style={styles.bannerList}
        data={mockDataImg}
        renderItem={renderImgItem}
        keyExtractor={(item) => item.id}
        ref={ref}
        horizontal
        pagingEnabled
        onScroll={onScrollSlider}
        showsHorizontalScrollIndicator={false}
      />
      <StatusBar style="light" />

      <View style={styles.wrapDots}>
        <FlatList
          data={mockDataImg}
          renderItem={renderSliderDots}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapBanner: {
    // alignItems: 'center',
    // flexDirection: 'row',
    // flex: 1,
    // backgroundColor: 'red',
  },
  modalIconClose: {
    position: 'absolute',
    right: 30,
    top: 60,
    width: 30,
    height: 30,
    borderRadius: 10,
  },

  customWrapper: {
    // borderRadius: 120,
  },

  bannerList: {},
  // bannerList: { width: 400, height: 300 },
  wrapDots: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  dots: {
    width: 20,
    height: 20,
    margin: 5,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  dotsActive: {
    width: 20,
    height: 20,
    margin: 5,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 10,
  },
});
