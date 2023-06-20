import React, { useState } from 'react';
import { Dimensions, FlatList, Image } from "react-native";

const { width, height } = Dimensions.get('window');

export default function index() {
  const [banners, setBanners] = useState<string[]>([
    require('../../../assets/1.png'),
    require('../../../assets/2.png'),
    require('../../../assets/3.png'),
    require('../../../assets/4.png')
  ]);

  return (
    <FlatList
      data={banners}
      renderItem={({ item }) => (
        <Image
          source={item}
          style={{ width: width, height: height * 0.30, resizeMode: "stretch", margin: 0 }}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment={"center"}
      decelerationRate={"fast"}
    />
  );
}
