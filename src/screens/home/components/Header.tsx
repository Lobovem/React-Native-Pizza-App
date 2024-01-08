import React, {
  FlatList,
  Modal,
  TextInput,
  View,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Pressable,
  StyleSheet,
  ListRenderItem,
} from 'react-native';
import { CustomTouchable } from '../../../components/CustomTouchable';
import { StatusBar } from 'expo-status-bar';
import { FC, MutableRefObject, useCallback, useRef, useState } from 'react';
import { mockDataImg, mockDataImgType } from './MochData';

import iconSearch from '../img/icon-search.png';
import iconHeart from '../img/icon-heart.png';
import { IItemSliderImgProps, ItemSliderImg } from './ItemSliderImg';

interface IHeaderProps {
  setTextInput: (value: string) => void;
  textInput: string;
}

export const Header: FC<IHeaderProps> = ({ textInput, setTextInput }) => {
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [iconSliderIndex, setIconSliderIndex] = useState(0);

  const ref: MutableRefObject<FlatList> = useRef(null);

  const onScrollSlider = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    const slider = Math.round(
      event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
    );
    setIconSliderIndex(slider);
  };

  const pressDotsSlider = (index: number): void => {
    ref.current.scrollToIndex({ index: index, animated: true });
  };

  const renderSliderDots: ListRenderItem<mockDataImgType> = useCallback(
    ({ index }) => {
      return (
        <Pressable onPress={() => pressDotsSlider(index)}>
          <View style={index === iconSliderIndex ? styles.dotsActive : styles.dots} />
        </Pressable>
      );
    },
    [iconSliderIndex]
  );

  const handleCloseModal = (): void => {
    setModalVisible(!modalVisible);
    setIconSliderIndex(0);
  };

  const renderImgItem = ({ item }: IItemSliderImgProps) => {
    return <ItemSliderImg item={item} />;
  };

  const onSearch = (): void => {
    setIsActiveSearch(!isActiveSearch);
  };

  const onVisible = (): void => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.searchWrap}>
      {isActiveSearch && (
        <TextInput
          keyboardType="default"
          style={styles.textInput}
          placeholder="Search here"
          onChangeText={setTextInput}
          value={textInput}
        />
      )}

      <View style={styles.searchIconWrap}>
        <CustomTouchable withoutFeedback={true} onPress={onSearch}>
          <Image style={styles.searchIcon} source={iconSearch}></Image>
        </CustomTouchable>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={onVisible}
        >
          {/* <TouchableWithoutFeedback
          onPress={handleModalPress}
          style={styles.modalOverlay}
        > */}
          {/* <View style={styles.modalOverlay}>
            <View style={styles.modalContent}> */}

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
            onPress={onVisible}
            style={styles.customWrapper}
          >
            <Image
              style={styles.modalIconClose}
              source={require('../img/icon-close.png')}
            />
          </CustomTouchable>
          {/* </View>
          </View> */}
          {/* </TouchableWithoutFeedback> */}
          {/* <Image source={require('../img/')}></Image> */}
        </Modal>
        <CustomTouchable withoutFeedback={true} onPress={handleCloseModal}>
          <Image style={styles.searchHeart} source={iconHeart}></Image>
        </CustomTouchable>
      </View>
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
