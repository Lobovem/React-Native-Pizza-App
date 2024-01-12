import React, { MutableRefObject, useCallback, useRef, useState } from 'react';
import {
  ListRenderItem,
  Modal,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  View,
  StyleSheet,
} from 'react-native';
import { IMockDataImgType, mockDataImg } from './components/MochData';
import { FlatList } from 'react-native-gesture-handler';
import { IItemSliderImgProps, ItemSliderImg } from './components/ItemSliderImg';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ModalScreen = () => {
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

  const onVisible = (): void => {
    setModalVisible(!modalVisible);
  };

  const handleCloseModal = (): void => {
    setModalVisible(!modalVisible);
    setIconSliderIndex(0);
  };

  const renderSliderDots: ListRenderItem<IMockDataImgType> = useCallback(
    ({ index }) => {
      return (
        <Pressable onPress={() => pressDotsSlider(index)}>
          <View
            style={index === iconSliderIndex ? styles.dotsActive : styles.dots}
          />
        </Pressable>
      );
    },
    [iconSliderIndex]
  );

  const renderImgItem = ({ item }: IItemSliderImgProps) => {
    return <ItemSliderImg item={item} />;
  };

  return (
    <SafeAreaView>
      {/* <View style={styles.searchIconWrap}> */}
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onVisible}
      > */}
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

      {/* <View style={styles.wrapDots}>
        <FlatList
          data={mockDataImg}
          renderItem={renderSliderDots}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View> */}

      {/* <CustomTouchable
        withoutFeedback={true}
        onPress={onVisible}
        style={styles.customWrapper}
      >
        <Image
          style={styles.modalIconClose}
          source={require('../home/img/icon-close.png')}
        />
      </CustomTouchable> */}
      {/* </View>
    </View> */}
      {/* </TouchableWithoutFeedback> */}
      {/* <Image source={require('../img/')}></Image> */}
      {/* </Modal> */}
      {/* <CustomTouchable withoutFeedback={true} onPress={handleCloseModal}>
        <Image style={styles.searchHeart} source={iconHeart}></Image>
      </CustomTouchable> */}
    </SafeAreaView>
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
