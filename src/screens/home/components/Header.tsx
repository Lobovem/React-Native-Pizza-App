import React, {
  TextInput,
  Image,
  StyleSheet,
  ViewStyle,
  Pressable,
  Keyboard,
} from 'react-native';
import { FC, memo, useRef, useState } from 'react';

import iconSearch from '../img/icon-search.png';
import iconClose from '../img/icon-close.png';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamListType } from '../../../navigation/HomeStackScreen';
import {
  AnimatedStyleProp,
  LightSpeedInLeft,
  LightSpeedOutLeft,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import ColorsVariable from '../../../components/ColorsVariable';

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

    // const handleInActive = (): void => {
    //   if (
    //     (inputRef.current.isFocused() && textInput.length > 0) ||
    //     (!inputRef.current.isFocused() && textInput.length > 0)
    //   ) {
    //     setTextInput('');
    //   } else {
    //     setIsActiveSearch(false);
    //     inputRef.current.blur();
    //   }
    // };

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

    // const handleModalPress = (event: GestureResponderEvent): void => {
    //   /*Функция handleModalPress проверяет, было ли нажатие на сам
    // компонент TouchableWithoutFeedback, а не на его содержимое.
    // Если event.target (элемент, на котором произошло событие) равен
    // event.currentTarget (компонент TouchableWithoutFeedback), это
    // означает, что нажатие произошло вне содержимого модального окна,
    // и в этом случае вызывается setModalVisible(!modalVisible), что
    // изменит видимость модального окна.*/
    //   if (event.target !== event.currentTarget) {
    //     return;
    //   }
    //   setIsActiveSearch(false);
    //   inputRef.current.blur();
    // };

    // const openModalScreen = (): void => {
    //   navigation.navigate('Modal');
    // };

    // const handlePressKey = (event: { nativeEvent: { key: string } }) => {
    //   console.log(event.nativeEvent);

    //   if (event.nativeEvent.key === 'Enter' || event.nativeEvent.key === 'Escape') {
    //     setTextInput('');
    //     inputRef.current.blur();
    //   }
    // };

    return (
      <Animated.View style={[styles.searchWrap, animatedStyle]}>
        {/* {isActiveSearch && ( */}

        <Animated.View
          entering={LightSpeedInLeft.duration(1000)}
          exiting={LightSpeedOutLeft.duration(1000)}
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
          />

          <Image style={styles.searchIcon} source={iconSearch} />
          {isActiveSearch && (
            <Pressable onPress={handleInActive} style={styles.closeIcon}>
              <Image source={iconClose} />
            </Pressable>
          )}
        </Animated.View>

        {/* <View style={styles.searchIconWrap}> */}
        {/* <CustomTouchable withoutFeedback={true} onPress={onSearch}> */}
        {/* </CustomTouchable> */}

        {/* <CustomTouchable withoutFeedback={true} onPress={openModalScreen}>
              <Image style={styles.heartIcon} source={iconHeart}></Image>
            </CustomTouchable> */}
        {/* </View> */}
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  searchWrap: {
    // flexDirection: 'row',

    margin: 20,
  },

  searchIconWrap: {
    marginLeft: 'auto',
    flexDirection: 'row',
    gap: 20,
    marginEnd: 10,
    marginBottom: 10,
  },

  searchIcon: {
    position: 'absolute',
    left: 8,
    top: 6,
    opacity: 0.4,
    width: 28,
    height: 28,
  },

  closeIcon: {
    position: 'absolute',
    width: 24,
    height: 24,
    right: 10,
    top: 10,
    // zIndex: 10,
  },

  heartIcon: {
    width: 30,
    height: 30,
  },

  textInput: {
    height: 40,
    // width: 320,
    backgroundColor: ColorsVariable.greyLight,
    borderRadius: 14,
    padding: 10,
    paddingLeft: 46,
    fontSize: 20,
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
