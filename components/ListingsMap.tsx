import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";
import { defaultStyles } from "@/constants/Styles";
import { Listing } from "@/interfaces/listing";
import { useRouter } from "expo-router";
import MapView from "react-native-map-clustering";

interface Props {
  listings: Listing[];
}

const INITIAL_REGION = {
  latitude: 46.204391,
  longitude: 6.143158,
  latitudeDelta: 0.09,
  longitudeDelta: 0.04,
};

const ListingsMap = ({ listings }: Props) => {
  const router = useRouter();

  const onMarkerSelected = (item: Listing) => {
    router.push(`/listing/${item.id}`);
  };

  const renderCluster = (cluster: any) => {
    const { id, geometry, onPress, properties } = cluster;
    const points = properties.point_count;
    return (
      <Marker
        key={`cluster-${id}`}
        onPress={onPress}
        coordinate={{
          longitude: geometry.coordinates[0],
          latitude: geometry.coordinates[1],
        }}
      >
        <View style={styles.marker}>
          <Text
            style={{
              color: "#000",
              textAlign: "center",
              fontFamily: "MontserratSemiBold",
            }}
          >
            {points}
          </Text>
        </View>
      </Marker>
    );
  };

  return (
    <View style={defaultStyles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        showsUserLocation
        showsMyLocationButton
        initialRegion={INITIAL_REGION}
        clusterColor="#fff"
        clusterTextColor="#000"
        clusterFontFamily="MontserratBold"
        renderCluster={renderCluster}
      >
        {listings.map((item: Listing) => (
          <Marker
            key={item.id}
            onPress={() => onMarkerSelected(item)}
            coordinate={{
              latitude: +item.latitude,
              longitude: +item.longitude,
            }}
          >
            <View style={styles.marker}>
              <Text style={styles.markerText}>₣ {item.price}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  marker: {
    backgroundColor: "#fff",
    padding: 6,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  markerText: {
    fontSize: 14,
    fontFamily: "MontserratBold",
  },
});

export default ListingsMap;
