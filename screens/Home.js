import React from 'react';
import {
  View,
  Text,
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
      img: require('../assets/images/plant_1.jpeg'),
      favourite: false,
    },
    {
      id: 1,
      name: 'Imli',
      img: require('../assets/images/plant_2.jpg'),
      favourite: true,
    },
    {
      id: 3,
      name: 'Beers',
      img: require('../assets/images/plant_3.jpg'),
      favourite: false,
    },
    {
      id: 4,
      name: 'Palav',
      img: require('../assets/images/plant_4.jpg'),
      favourite: true,
    },
    {
      id: 5,
      name: 'Reston',
      img: require('../assets/images/plant_5.jpg'),
      favourite: false,
    },
    {
      id: 6,
      name: 'Grass',
      img: require('../assets/images/plant_6.jpg'),
      favourite: true,
    },
    {
      id: 7,
      name: 'Grome',
      img: require('../assets/images/plant_2.jpg'),
      favourite: false,
    },
  ]);

  const [friendList, setFriendList] = React.useState([
    {
      id: 0,
      img: require('../assets/images/profile_1.jpg'),
    },
    {
      id: 1,
      img: require('../assets/images/profile_2.jpg'),
    },
    {
      id: 2,
      img: require('../assets/images/profile_3.jpg'),
    },
    {
      id: 3,
      img: require('../assets/images/profile_4.jpg'),
    },
    {
      id: 4,
      img: require('../assets/images/profile_5.jpg'),
    },
  ]);

  // Render Function
  function renderNewPlants(item, index) {
    return (
      <View
        key={index}
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          marginHorizontal: SIZES.base,
        }}>
        <Image
          source={item.img}
          resizeMethod="auto"
          style={{
            width: SIZES.width * 0.23,
            height: '80%',
            borderRadius: 15,
          }}
        />

        <View
          style={{
            position: 'absolute',
            bottom: '17%',
            right: 0,
            backgroundColor: COLORS.primary,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            paddingHorizontal: SIZES.base,
          }}>
          <Text style={{ color: COLORS.white, ...FONTS.h4 }}>{item.name}</Text>
        </View>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 15,
            left: 5,
            marginTop: SIZES.base,
          }}>
          <Image
            source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderFriend() {
    if (friendList.length == 0) {
      return <View></View>;
    } else if (friendList.length <= 3) {
      return friendList.map((item, index) => (
        <View
          key={`friends - ${index}`}
          style={index == 0 ? {} : { marginLeft: -20 }}>
          <Image
            source={item.img}
            resizeMode="cover"
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderColor: COLORS.primary,
              borderWidth: 2,
            }}
          />
        </View>
      ));
    } else {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {friendList.map((item, index) => {
            if (index <= 2) {
              return (
                <View
                  style={index == 0 ? {} : { marginLeft: -20 }}
                  key={`friend - ${index}`}>
                  <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      borderColor: COLORS.primary,
                      borderWidth: 2,
                    }}
                  />
                </View>
              );
            }
          })}
          <Text
            style={{ marginLeft: 5, color: COLORS.secondary, ...FONTS.body3 }}>
            +{friendList.length - 3} More
          </Text>
        </View>
      );
    }
  }

  return (
    <ScrollView style={styles.container}>
      {/* New Plants  */}
      <View style={{ height: 230, backgroundColor: COLORS.white }}>
        <View style={styles.MainPlantComponent}>
          <View style={styles.HeaderPlanComponent}>
            <Text style={styles.headerText}>New Plants</Text>

            <TouchableOpacity onPress={() => console.log('Scan Here...')}>
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
      <View style={{ backgroundColor: COLORS.white, height: 350 }}>
        <View
          style={{ flex: 1, marginBottom: 20, backgroundColor: COLORS.white }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{ ...FONTS.h2, marginStart: 15, marginTop: 10 }}>
              Today's Share
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  marginEnd: 10,
                  marginTop: 10,
                }}
                onPress={() => {
                  console.log('Show all Data');
                }}>
                See all
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              height: '88%',
              marginTop: SIZES.base,
            }}>
            <View style={{ flex: 1, backgroundColor: 'white', padding: 5 }}>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => {
                  console.log('Pressed...');
                }}>
                <Image
                  source={require('../assets/images/plant_5.jpg')}
                  resizeMode="cover"
                  style={{ height: '100%', width: '100%', borderRadius: 25 }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => {
                  console.log('Pressed...');
                }}>
                <Image
                  source={require('../assets/images/plant_6.jpg')}
                  resizeMode="cover"
                  style={{
                    height: '100%',
                    width: '100%',
                    marginTop: 5,
                    borderRadius: 25,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1.3, backgroundColor: 'red' }}>
              <View style={{ flex: 1, backgroundColor: 'white' }}>
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() => {
                    console.log('Pressed...');
                  }}>
                  <Image
                    source={require('../assets/images/plant_7.jpg')}
                    resizeMode="cover"
                    style={{
                      height: '100%',
                      width: '100%',
                      marginTop: 5,
                      borderRadius: 25,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Added Friend */}
      <View
        style={{
          backgroundColor: COLORS.lightGray,
          height: 180,
          marginTop: SIZES.radius,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.lightGray,
          }}>
          <View>
            <Text style={{ ...FONTS.h2, marginStart: 15, marginTop: 10 }}>
              Added Friend's
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.gray,
                marginStart: 15,
                marginTop: 3,
              }}>
              {friendList.length} Total
            </Text>

            {/* Friends */}
            <View
              style={{
                flexDirection: 'row',
                height: 100,
                marginStart: 10,
                marginEnd: 10,
              }}>
              <View
                style={{
                  flex: 1.3,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {renderFriend()}
              </View>

              {/* Add friends */}
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>Add Friends</Text>
                <TouchableOpacity
                  style={{
                    marginLeft: SIZES.base,
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.gray,
                  }}
                  onPress={() => {
                    console.log('Add friends Here ');
                  }}>
                  <Image
                    source={icons.plus}
                    resizeMode='contain'
                    style={{ height: 20, width: 20 }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
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
    justifyContent: 'space-between',
  },
  headerText: {
    color: COLORS.white,
    ...FONTS.h2,
  },
  focusSet: {
    height: 20,
    width: 20,
  },
});

export default Home;
