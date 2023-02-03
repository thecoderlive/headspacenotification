import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const enableFeatureListItem = ({ item }) => (
<View style={styles.enable_feature_list_item}>
<Image
    style={styles.feature_icon}
    source={{uri: item.feature_icon}}
   />
<Text style={styles.feature_title}>{item.feature_title}</Text>
<Text style={styles.about_feature}>{item.about_feature}</Text>
<Image
    style={styles.cross_icon}
    source={{uri: item.cross_icon}}
   />
<Text style={styles.enable_feature}>{item.enable_feature}</Text>
</View>
  );

const EnableFeatureList = ({ item }) => (
<FlatList
    style={styles.enable_feature_list}
    data={item}
    renderItem={enableFeatureListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default EnableFeatureList;

const styles = StyleSheet.create({
feature_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
feature_title: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
about_feature: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
cross_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
enable_feature: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  }
});