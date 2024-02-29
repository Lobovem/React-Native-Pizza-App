import React, {
  TextInput,
  Image,
  StyleSheet,
  ViewStyle,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import { FC, memo, useRef, useState } from 'react';

import iconSearch from '../img/icon-search.png';
import iconClose from '../img/icon-close.png';
import iconFilter from '../img/icon-filter.png';

import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamListType } from '../../../navigation/HomeStackScreen';
import {
  AnimatedStyleProp,
  LightSpeedInLeft,
  LightSpeedOutLeft,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import ColorsVariable from '../../../utils/ColorsVariable';
import { CustomTouchable } from '../../../components/CustomTouchable';

interface IHeaderProps {
  setTextInput: (value: string) => void;
  textInput: string;
  animatedStyle: AnimatedStyleProp<ViewStyle>;
}

type ModalScreenNavigationPropType = NativeStackNavigationProp<
  RootStackParamListType,
  'Modal'
>;

export const Header: FC<IHeaderProps> = memo(
  ({ textInput, setTextInput, animatedStyle }) => {
    const navigation = useNavigation<ModalScreenNavigationPropType>();
    const [isActiveSearch, setIsActiveSearch] = useState(false);
    const inputRef = useRef<TextInput>(null);

    const handleActive = (): void => {
      setIsActiveSearch(true);
    };

    const handleInActive = (): void => {
      if (!textInput) {
        setIsActiveSearch(false);
        inputRef.current.blur();
      } else {
        setTextInput('');
      }
    };

    const handleFocus = () => {
      if (!inputRef.current.isFocused() && textInput.length < 1) {
        setIsActiveSearch(false);
      }
    };

    const openModalScreen = (): void => {
      navigation.navigate('Modal');
    };

    return (
      <Animated.View style={[styles.headerContainer, animatedStyle]}>
        <Animated.View
          entering={LightSpeedInLeft.duration(1000)}
          exiting={LightSpeedOutLeft.duration(1000)}
          style={styles.searchWrap}
        >
          <TextInput
            ref={inputRef}
            keyboardType="default"
            style={styles.textInput}
            placeholder="Search"
            onChangeText={setTextInput}
            value={textInput}
            onPressIn={handleActive}
            placeholderTextColor={ColorsVariable.grey}
            maxLength={20}
            onBlur={handleFocus}
            autoCapitalize="none"
            autoCorrect={false}
          />

          {/* <Image style={styles.searchIcon} source={iconSearch} /> */}
          <Feather
            style={styles.searchIcon}
            name="search"
            size={24}
            color={ColorsVariable.grey}
          />

          {isActiveSearch && (
            <TouchableOpacity onPress={handleInActive} style={styles.closeIcon}>
              {/* <Image source={iconClose} /> */}
              <Ionicons
                name="close-circle-outline"
                size={24}
                color={ColorsVariable.grey}
              />
            </TouchableOpacity>
          )}
        </Animated.View>

        <TouchableOpacity onPress={openModalScreen}>
          {/* <Image style={styles.iconFilter} source={iconFilter} /> */}
          <Feather
            style={styles.iconFilter}
            name="filter"
            size={30}
            color={ColorsVariable.grey}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
  },

  searchWrap: {
    flex: 1,
  },

  searchIconWrap: {
    flexDirection: 'column',
    // gap: 20,
    marginEnd: 10,
    marginBottom: 10,
  },

  searchIcon: {
    position: 'absolute',
    left: 8,
    top: 8,
    // width: 28,
    // height: 28,
  },

  closeIcon: {
    position: 'absolute',
    right: 10,
    //TODO opacity need change to color
    top: 7,
    // zIndex: 10,
  },

  iconFilter: {
    //TODO opacity need change to color
  },

  heartIcon: {
    width: 30,
    height: 30,
  },

  textInput: {
    height: 40,
    borderColor: ColorsVariable.grey,
    borderWidth: 2,

    borderRadius: 14,
    padding: 4,
    paddingLeft: 46,
    fontSize: 20,
    fontFamily: 'outfit-regular',
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
