import React, { memo } from 'react';
import { Button, Text, View } from 'react-native';

interface Props {
  linksText: { link: string; link2: string };
  reset: () => void;
}

export const Link = memo(function Link({ linksText, reset }: Props) {
  // console.log('link');

  return (
    <View>
      <Text>{linksText.link}</Text>
      <Text>{linksText.link2}</Text>
      <Button title="reset" onPress={reset}></Button>
    </View>
  );
});
