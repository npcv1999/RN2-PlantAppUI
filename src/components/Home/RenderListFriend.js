import {TestScheduler} from '@jest/core';
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../utils';

const renderFriendsComponent = listFriend =>
  listFriend.length <= 0 ? (
    <View></View>
  ) : listFriend.length <= 3 ? (
    listFriend.map((item, index) => (
      <View
        style={
          index == 0
            ? {flexDirection: 'row'}
            : {flexDirection: 'row', marginLeft: -20}
        }>
        <Image source={item.image}></Image>
      </View>
    ))
  ) : (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {listFriend.map((item, index) =>
        index <= 2 ? (
          <View
            key={`friend-${index}`}
            style={index == 0 ? {} : {marginLeft: -20}}
            style={
              index == 0
                ? {flexDirection: 'row'}
                : {flexDirection: 'row', marginLeft: -20}
            }>
            <Image style={styles.avt} source={item.img}></Image>
          </View>
        ) : (
          <View></View>
        ),
      )}
      <Text style={{marginLeft: 5, color: COLORS.secondary, ...FONTS.body3}}>
        +{listFriend.length - 3} More
      </Text>
    </View>
  );

export default renderFriendsComponent;
const styles = StyleSheet.create({
  avt: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: COLORS.primary,
  },
});
