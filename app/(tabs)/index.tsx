import { View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import ListingsMap from "@/components/ListingsMap";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");
  const [listingsData, setListingsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/records?limit=100&refine=country%3A%22Switzerland%22&refine=city%3A%22Geneva%22"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setListingsData(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const memoizedListingsData = useMemo(
    () => listingsData as any,
    [listingsData]
  );

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      {/* <Listings listings={memoizedListingsData} category={category} /> */}
      <ListingsMap listings={memoizedListingsData} />
    </View>
  );
};

export default Page;
