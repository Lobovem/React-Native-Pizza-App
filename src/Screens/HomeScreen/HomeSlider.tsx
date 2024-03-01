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
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

import { IItemSliderImgProps } from './components/ItemSliderImg';
import { ISlider } from './components/MochData';
import ColorsVariable from '../../utils/ColorsVariable';
import { observer } from 'mobx-react';
import OrdersStore from '../../store/store';

const HomeSlider: FC = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const ref = useRef<FlatList>(null);

  useEffect(() => {
    OrdersStore.fetchHomeSliders();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlider();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const changeSlider = () =>
    setSliderIndex((prevIndex) => {
      if (prevIndex < OrdersStore.slidersList.length - 1) {
        prevIndex += 1;
      } else {
        prevIndex = 0;
      }

      ref.current.scrollToIndex({ index: prevIndex, animated: true });
      return prevIndex;
    });

  const onScrollSlider = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    const slider = Math.round(
      event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
    );

    setSliderIndex(slider);
  };

  const pressDotsSlider = (index: number): void => {
    ref.current.scrollToIndex({ index: index, animated: true });
  };

  const renderSliderDots: ListRenderItem<ISlider> = useCallback(
    ({ index }) => {
      return (
        <Pressable onPress={() => pressDotsSlider(index)}>
          <View
            style={index === sliderIndex ? styles.sliderDotsActive : styles.sliderDots}
          />
        </Pressable>
      );
    },
    [sliderIndex]
  );

  if (OrdersStore.status === 'pending' || OrdersStore.status === 'init') {
    return (
      <BarIndicator style={{ minHeight: 120 }} color={ColorsVariable.orange} size={30} />
    );
  }

  if (OrdersStore.status === 'error') {
    return <Text>Error...</Text>;
  }

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
        data={OrdersStore.slidersList}
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
          data={OrdersStore.slidersList}
          renderItem={renderSliderDots}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
    </View>
  );
};

export default observer(HomeSlider);

const styles = StyleSheet.create({
  sliderContainer: {
    marginHorizontal: -10,
  },

  sliderList: {},

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
    alignItems: 'center',
  },
  sliderDots: {
    width: 15,
    height: 15,
    margin: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: ColorsVariable.greyLight,
  },
  sliderDotsActive: {
    width: 15,
    height: 15,
    margin: 5,
    borderRadius: 10,
    backgroundColor: ColorsVariable.orange,
  },
});
