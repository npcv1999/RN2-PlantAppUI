import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {icons, SIZES} from '../../utils';

const Header = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={onPress}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255,255,255,0.5)',
            }}>
            <Image
              source={icons.back}
              resizeMode="contain"
              style={{width: 15, height: 15}}></Image>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}
          onPress={() => {
            console.log('Focus on pressed');
          }}>
          <Image
            source={icons.focus}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: SIZES.padding,
    right: SIZES.padding,
  },
});
