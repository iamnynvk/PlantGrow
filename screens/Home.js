import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS, icons, images, SIZES } from '../constant';

const Home = () => {

  // Dummy Data
  const [newPlants, setnewPlants] = React.useState([
    {
      id: 0,
      name: 'Tulsi',
      img: require("../assets/images/plant_1.jpeg"),
      favourite: false
    },
    {
      id: 1,
      name: 'Imli',
      img: require('../assets/images/plant_2.jpg'),
      favourite: true
    },
    {
      id: 3,
      name: 'Beers',
      img: require('../assets/images/plant_3.jpg'),
      favourite: false
    },
    {
      id: 4,
      name: 'Palav',
      img: require('../assets/images/plant_4.jpg'),
      favourite: true
    },
    {
      id: 5,
      name: 'Reston',
      img: require('../assets/images/plant_5.jpg'),
      favourite: false
    },
    {
      id: 6,
      name: 'Grass',
      img: require('../assets/images/plant_6.jpg'),
      favourite: true
    },
  ])

  // Render Function
  function renderNewPlants(item, index) {
    return (
      <View key={index} style={{ alignContent: 'center', justifyContent: 'center', marginHorizontal: SIZES.base }}>
        <Image source={item.img}
          resizeMethod="auto"
          style={{
            width: SIZES.width * 0.23,
            height: "80%",
            borderRadius: 15,
          }} />

        <View
          style={{
            position: 'absolute',
            bottom: "17%",
            right: 0,
            backgroundColor: COLORS.primary,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            paddingHorizontal: SIZES.base
          }}>
          <Text style={{ color: COLORS.white, ...FONTS.h4 }}>{item.name}</Text>
        </View>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 15,
            left: 5,
            marginTop: SIZES.base
          }}>
          <Image
            source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
            style={{
              width: 20,
              height: 20
            }} />
        </TouchableOpacity>

      </View>
    )
  }


  return (

    <ScrollView style={styles.container}>
      {/* New Plants  */}
      <View style={{ height: 230, backgroundColor: COLORS.white }}>

        <View style={styles.MainPlantComponent}>
          <View
            style={styles.HeaderPlanComponent}>

            <Text style={styles.headerText}>New Plants</Text>

            <TouchableOpacity onPress={() => console.log('Click to Scan')}>
              <Image source={icons.focus} style={styles.focusSet} />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: SIZES.base }}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={newPlants}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item, index }) => renderNewPlants(item, index)}
            />
          </View>
        </View>
      </View>


      {/* Today Share */}
      <View style={{ backgroundColor: COLORS.lightGray, height: 300 }}>
        <View style={{ flex: 1, borderBottomLeftRadius:50,borderBottomRightRadius:50, backgroundColor: COLORS.white }}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={{ ...FONTS.h2, marginStart: 15, marginTop: 10 }}>Today's Share</Text>
            <TouchableOpacity>
              <Text style={{
                marginEnd:10,
                marginTop: 10

              }}>See all</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>



      {/* Added Friend */}
      <View style={{ backgroundColor: COLORS.black, height: 1000 }}></View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    color: COLORS.white, ...FONTS.h2
  },
  focusSet: {
    height: 20,
    width: 20,
  },
});

export default Home;
