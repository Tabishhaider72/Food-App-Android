import React from 'react';
import { View, Text } from 'react-native';

type CardProps = {
  title: string;
  content: string;
};

export default function Card({ title, content }: CardProps) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{content}</Text>
    </View>
  );
}
