import React from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../../components/PlantDetail/Header';
import RenderFooter from '../../components/PlantDetail/RenderFooter';
import RenderRequirementBar from '../../components/PlantDetail/RenderRequirementBar';
import Requirements from '../../components/PlantDetail/Requirements';
import {images} from '../../utils';
import styles from './styles';

const PlantDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Banner Img */}
      <View style={styles.viewBanner}>
        <Image source={images.bannerBg} style={styles.banner}></Image>
      </View>
      <Header onPress={() => navigation.navigate('Home')}></Header>

      {/* Requirements */}
      <View style={styles.requirement}>
        <Text style={styles.label}>Requirements</Text>
        {RenderRequirementBar()}
        {Requirements()}
        {RenderFooter()}
      </View>
    </View>
  );
};

export default PlantDetail;
