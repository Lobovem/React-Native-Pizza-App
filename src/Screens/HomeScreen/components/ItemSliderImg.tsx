import React, { FC } from 'react';
import { Pressable, Share, Image, Dimensions, Alert } from 'react-native';
import { ISlider } from './MochData';

export interface IItemSliderImgProps {
  item: ISlider;
  // index: number;
}

const windowDimensions = Dimensions.get('window');

export const ItemSliderImg: FC<IItemSliderImgProps> = ({ item }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Special proposal',
        url: item.link,
        title: 'Link to google',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log('Shared successfully');
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log('Share dismissed');
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <Pressable onPress={onShare}>
      <Image
        style={{
          height: windowDimensions.height,
          width: windowDimensions.width,
        }}
        source={item.image}
      />
    </Pressable>
  );
};
