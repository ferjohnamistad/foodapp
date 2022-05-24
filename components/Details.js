import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import popularData from '../assets/data/popularData';


const Details = ({route, navigation}) => {

const {item} = route.params;

const renderIngredientsItem = ({ item }) => {
    return (
        <View style={[styles.ingredientsItemWrapper, {
            marginLeft: item.id === '1' ? 20 : 0,
        }
        ]}>
            <Image source={item.image} style={styles.ingredientsImage}/>
        </View>
    )
};
// onClickOrder = (id) 

const createTwoButtonAlert = () =>{
    Alert.alert(
      "Your ORDER has been placed",
      "Click Confirm to continue",
      [
        {
          text: "Confirm",
          onPress: () => navigation.navigate('Cart',{
            item: route.params.item,
          }),
          style: "cancel"
        },
        { text: "Cancel", onPress: () => console.log("Cancelled") }
      ]
    )
}

    return (
        <View style={styles.container}>
            {/* header */}
            <ScrollView contentInsetAdjustmentBehavior='automatic' 
            showsVerticalScrollIndicator={false}>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.headerLeft}>
                        <Feather name="chevron-left" size={12} color={colors.textDark}/>
                    </View>
                    </TouchableOpacity>

                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons name="star" size={12} color={colors.white}/>
                    </View>
                </View>
            </SafeAreaView>

            {/* Title */}
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{item.title}</Text>
            </View>

            {/* Prices */}
            <View style={styles.priceWrapper}>
                <Text style={styles.priceText}>${item.price}</Text>
            </View>
            {/* Pizza Info */}
            <View style={styles.infoWrapper}>
                <View style={styles.infoLeftWrapper}>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Size</Text>
                        <Text style={styles.infoItemText}>{item.sizeName} {item.sizeNumber}"</Text>
                    </View>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Crust</Text>
                        <Text style={styles.infoItemText}>{item.crust}</Text>
                    </View>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Delivery in</Text>
                        <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
                    </View>
                </View>
                <View style={styles.infoRightWrapper}>
                    <Image source={item.image} style={styles.itemImage}/>
                </View>
            </View>
            {/* Ingredients */}
            <View style={styles.ingredientsWrapper}>
                <Text style={styles.ingredientsTitle}>Ingredients</Text>
                <View style={styles.ingredientsListWrapper}>
                    <FlatList
                        data={item.ingredients}
                        renderItem={renderIngredientsItem}
                        keyExtractor={item => item.id}
                        horizontal= {true}
                        showsHorizontalScrollIndicator={false}
                        />
                </View>
            </View>
            {/* Place an order */}
            <TouchableOpacity key={item.id} onPress={createTwoButtonAlert} backgroundColor={colors.white}>
                <View style={styles.orderWrapper}>
                    <Text style={styles.orderText}>Place an order</Text>
                    <Feather name="chevron-right" size={18} color={colors.black}/>
                </View>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
};

export default Details;

const styles = StyleSheet.create({
   container: {
       flex: 1,
   },
   headerWrapper:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
   },
   headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
   },
   headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 2,
   },
   titleWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
   },
   title:  {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    width: '100%',
   },
   priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
   },
   priceText: {
    color: colors.price,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 32,
   },
   infoWrapper: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   },
   infoLeftWrapper: {
    paddingLeft: 20,
   },
   infoItemText: {
    color: colors.textDark,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
   },
   infoItemTitle: {
    color: colors.textLight,
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
   },
   itemImage: {
    resizeMode: 'contain',
    marginLeft: 40,
   },
   ingredientsWrapper: {
    marginTop: 40,   
   },
   ingredientsTitle:{
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark, 
   },
   ingredientsListWrapper: {
    paddingVertical: 20,
   },
   ingredientsItemWrapper: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginRight: 15,
    borderRadius: 26,
    shadowColor: colors.black,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
   },
   ingredientsImage: {
    resizeMode: 'contain',
   },
   orderWrapper: {
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    flexDirection: 'row',
   },
   orderText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginRight: 10,
    color: colors.black,
   }
   

});