import { View, Text } from "react-native";
import React, { useEffect } from "react";

interface Props {
  listing: any[];
  category: string;
}

const Listings = ({ listing, category }: Props) => {
  useEffect(() => {
    console.log(category);
  }, [category]);
  return (
    <View>
      <Text>Listings</Text>
    </View>
  );
};

export default Listings;
