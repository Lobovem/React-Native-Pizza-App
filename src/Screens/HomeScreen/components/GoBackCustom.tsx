import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import iconBack from '../img/icon-back.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const GoBack: FC = () => {
  const navigation = useNavigation();
  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.btnBack} onPress={onBack}>
        <Image source={iconBack} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnBack: {
    marginTop: 10,
  },
});
