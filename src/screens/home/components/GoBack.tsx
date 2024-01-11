import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import iconBack from '../img/icon-back.png';
import ColorsVariable from '../../../components/Colors';

export const GoBack: FC = () => {
  const navigation = useNavigation();
  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Pressable style={styles.btnBack} onPress={onBack}>
        <Image source={iconBack}></Image>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnBack: {
    marginTop: 10,
  },
});
