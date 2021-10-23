import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTS, icons, SIZES} from '../constant';

const Home = () => {
  return (
      
    <ScrollView style={styles.container}>
      {/* New Plants  */}

      <View style={{height: 180, backgroundColor: COLORS.white}}>

        <View style={styles.MainPlantComponent}>
          {/* Header Set  */}

          <View
            style={styles.HeaderPlanComponent}>

            <Text style={styles.headerText}>New Plants</Text>

            <TouchableOpacity onPress={() => console.log('Click to Scan')}>
              <Image source={icons.focus} style={styles.focusSet} />
            </TouchableOpacity>

          </View>

        </View>

      </View>

      {/* Today Share */}
      <View></View>

      {/* Added Friend */}
      <View></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  MainPlantComponent: {
    flex: 1,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    backgroundColor: COLORS.primary,
  },
  HeaderPlanComponent: {
    marginTop: SIZES.radius,
    marginHorizontal: SIZES.radius,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  headerText:{
    color: COLORS.white, ...FONTS.h2
  },    
  focusSet: {
    height: 20,
    width: 20,
  },
});

export default Home;
