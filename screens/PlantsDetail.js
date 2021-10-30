import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constant';

const RequirementBars = ({icon, barPercentage}) => {
  return (
    <View style={{height: 60, alignItems: 'center', marginLeft:20}}>
      <View
        style={{
          borderColor: COLORS.gray,
          borderWidth: 1,
          borderRadius: 10,
          padding: 5,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <Image
          source={icon}
          resizeMode="cover"
          style={{width: 30, height: 30, tintColor: COLORS.secondary}}
        />
      </View>

      {/* Bar  */}

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width:"100%",
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.gray,
        }}>
        </View>

        <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width:barPercentage,
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.primary,
        }}>
        </View>
    </View>
  );
};

const RequirementBarsDetail = ({icon,label,detail}) => {
    return(
        <View style={{flexDirection:'row'}}>
            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                <Image 
                    source={icon}
                    resizeMode="cover"
                    style={{
                        tintColor:COLORS.secondary,
                        width:30,
                        height:30
                    }} />

                <Text style={{marginLeft:SIZES.base,color:COLORS.secondary, ...FONTS.h2}}>{label}</Text>
            </View>
            <View style={{flex:1,alignItems:'flex-end'}}>
                <Text style={{marginLeft:SIZES.base,color:COLORS.gray,...FONTS.h2}}>{detail}</Text>
            </View>

        </View>
    )
}

const PlantsDetail = () => {
  function RequirementBar() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.radius,
        }}>
        <RequirementBars icon={icons.sun} barPercentage="50%"/>
        <RequirementBars icon={icons.drop} barPercentage="25%"/>
        <RequirementBars icon={icons.temperature} barPercentage="50%"/>
        <RequirementBars icon={icons.garden} barPercentage="10%"/>
        <RequirementBars icon={icons.seed} barPercentage="90%"/>
      </View>
    );
  }

  function renderRequirements() {
      return (
          <View style={{
            flex:2.5,marginTop:SIZES.padding,paddingHorizontal:SIZES.padding,justifyContent:'space-around'
          }}>

          <RequirementBarsDetail 
            icon={icons.sun}
            label = "Sunlight"
            detail = "15 C"
          />

<RequirementBarsDetail 
            icon={icons.drop}
            label = "Water"
            detail = "250 ML Daily"
          />

<RequirementBarsDetail
            icon={icons.temperature}
            label = "Temperature"
            detail = "25 C"
          />

<RequirementBarsDetail 
            icon={icons.garden}
            label = "Soil"
            detail = "3 Kg"
          />

<RequirementBarsDetail 
            icon={icons.seed}
            label = "Fertilizer"
            detail = "150 Mg"
          />
          </View>
      )
  }

  return (
    <View style={style.container}>
      {/* Banner Image Set  */}
      <View
        style={{
          height: '35%',
        }}>
        <Image
          source={require('../assets/images/banner_bg.jpg')}
          resizeMode="cover"
          style={style.bannerImg}
        />
      </View>

      {/* Requirements  */}

      <View
        style={{
          flex: 1,
          marginTop: -40,
          backgroundColor: COLORS.lightGray,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingVertical: SIZES.padding,
        }}>
        <Text
          style={{
            color: COLORS.secondary,
            ...FONTS.h2,
            paddingHorizontal: SIZES.padding,
          }}>
          Requirement
        </Text>

        {RequirementBar()}

        {renderRequirements()}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  bannerImg: {
    width: '100%',
    height: '100%',
  },
});

export default PlantsDetail;
