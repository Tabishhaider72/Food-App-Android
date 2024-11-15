import React from 'react';
import { View, Text } from 'react-native';

type ModalProps = {
  visible: boolean;
  content: string;
};

export default function Modal({ visible, content }: ModalProps) {
  return visible ? (
    <View>
      <Text>{content}</Text>
    </View>
  ) : null;
}
