import React, { FC, useCallback, useRef, useState } from 'react';
import {
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { IMockDataImg, mockDataImg } from './components/MochData';
import { IItemSliderImgProps, ItemSliderImg } from './components/ItemSliderImg';
import { StatusBar } from 'expo-status-bar';
import { CustomTouchable } from '../../components/CustomTouchable';
import { FlatList } from 'react-native-gesture-handler';
import { FlatList as RNFlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamListType } from '../../navigation/HomeStackScreen';
import { generateUniqueKey } from '../../common/generateUniqueKey';

type ModalScreenNavigationPropType = NativeStackNavigationProp<
  RootStackParamListType,
  'Modal'
>;

export const ModalScreen: FC<{ navigation: ModalScreenNavigationPropType }> = ({
  navigation,
}) => {
  const [iconSliderIndex, setIconSliderIndex] = useState(0);

  const ref = useRef<RNFlatList>(null);

  const onScrollSlider = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    const slider = Math.round(
      event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
    );
    setIconSliderIndex(slider);
  };

  const pressDotsSlider = (index: number): void => {
    ref.current.scrollToIndex({ index: index, animated: true });
  };

  const closeModal = (): void => {
    navigation.navigate('Home');
    setIconSliderIndex(0);
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
    <View>
      <FlatList
        style={styles.wrapBanner}
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

      <CustomTouchable
        withoutFeedback={true}
        onPress={closeModal}
        style={styles.customWrapper}
      >
        <Image
          style={styles.modalIconClose}
          source={require('../home/img/icon-close.png')}
        />
      </CustomTouchable>
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrap: {
    flexDirection: 'row',
    margin: 10,
  },

  searchIconWrap: {
    marginLeft: 'auto',
    flexDirection: 'row',
    gap: 20,
    marginEnd: 10,
    marginBottom: 10,
  },

  searchIcon: {
    width: 30,
    height: 30,
  },

  searchHeart: {
    width: 30,
    height: 30,
  },

  textInput: {
    height: 40,
    width: 280,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
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

  wrapBanner: {},
  wrapDots: {
    position: 'absolute',
    bottom: 60,
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
