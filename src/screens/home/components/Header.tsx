import React, { TextInput, View, Image, StyleSheet, Pressable } from 'react-native';
import { CustomTouchable } from '../../../components/CustomTouchable';
import { FC, memo, useState } from 'react';

import iconHeart from '../img/icon-heart.png';
import iconSearch from '../img/icon-search.png';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamListType } from '../../../navigation/HomeStackScreen';

interface IHeaderProps {
  setTextInput: (value: string) => void;
  textInput: string;
}

type ModalScreenNavigationPropType = NativeStackNavigationProp<
  RootStackParamListType,
  'Modal'
>;

export const Header: FC<IHeaderProps> = memo(({ textInput, setTextInput }) => {
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const navigation = useNavigation<ModalScreenNavigationPropType>();
  const onSearch = (): void => {
    setIsActiveSearch(!isActiveSearch);
  };

  const openModalScreen = () => {
    navigation.navigate('Modal');
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

        <CustomTouchable withoutFeedback={true} onPress={openModalScreen}>
          <Image style={styles.heartIcon} source={iconHeart}></Image>
        </CustomTouchable>
      </View>
    </View>
  );
});

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

  heartIcon: {
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
