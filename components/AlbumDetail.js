import React from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";

import Card from "./Card";
import CardSection from "./CardSection";

import Button from "./Button";

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailImageStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.headerContainerStyle}>
          <Text style={styles.headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button
          onPress={() => {
            Linking.openURL(url);
          }}
        >
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
  },

  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  thumbnailImageStyle: {
    height: 50,
    width: 50,
  },

  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },

  imageStyle: {
    height: 300,
    width: null,
    flex: 1,
  },
});

export default AlbumDetail;
