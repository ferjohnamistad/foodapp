import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Alert} from 'react-native';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Categories = ({route,navigation}) => {
    const {item} = route.params;

    const onClickOne = () => {
        navigation.navigate('Cart', {
            id: item.id,
            catoneName:item.catoneName,
            categoryOne:item.categoryOne,
            priceq  :item.catonePrice,
            catoneDes:item.catoneDes
        })
    }

    const onCLickTwo = () => {
        navigation.navigate('Cart', {
            id: item.id,
            cattwoName:item.cattwoName,
            price:item.cattwoPrice,
            cattwoDes:item.cattwoDes,
            categoryTwo: item.categoryTwo
        })
    }
    console.log(item);

    return (
        <View style={styles.categoriesBodyWrapper}>
            {/* Header */}
            <ScrollView contentInsetAdjustmentBehavior='automatic' 
            showsVerticalScrollIndicator={false}>
            <View>
                <View style={styles.categoriesBackWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.categoriesBack}>
                        <Feather name="chevron-left" size={12} color={colors.textDark}/>
                    </View>
                    </TouchableOpacity>
                    
                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons name="star" size={12} color={colors.white}/>
                    </View>
                </View>
                
                <View style={styles.categoriesLogoWrapper}>
                    <Image style={styles.categoriesLogo} source={item.image}/>
                    <Text style={styles.categorieText}>{item.title}</Text>
                </View>
            </View>
            {/* Choices */}
            <View style={styles.choicesWrapper}>
                <Text style={styles.choicesTitle}>Available</Text>
                <TouchableOpacity  onPress={onClickOne}>
                    <View style={styles.categoryOneWrapper}>
                        <View style={styles.descriptionWrapper}>
                            <Text style={styles.categoryOneText}>{item.catoneName}</Text>
                            <Text style={styles.categoryOneDes}>{item.catoneDes}</Text>
                            <Text style={styles.catPrice}>${item.catonePrice}</Text>
                        </View>
                        <View>
                            <Image style={styles.categoriesImage} source={item.categoryOne}/>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={onCLickTwo}>
                    <View style={styles.categoryOneWrapper}>
                        <View style={styles.descriptionWrapper}>
                            <Text style={styles.categoryOneText}>{item.cattwoName}</Text>
                            <Text style={styles.categoryOneDes}>{item.cattwoDes}</Text>
                            <Text style={styles.catPrice}>${item.cattwoPrice}</Text>
                        </View>
                        <View>
                            <Image style={styles.categoriesImage} source={item.categoryTwo}/>
                        </View>
                    </View>
                    </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    categoriesBodyWrapper: {
        flex: 1,
    },
    categoriesBackWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,     
    },
    categoriesLogoWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 100,
        
    },
    categoriesBack: {
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
    categorieText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
        color: colors.black,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    categoriesHeadWrapper: {
        justifyContent: 'flex-start',
        backgroundColor: colors.black,
    },
    categoriesLogo: {
       width: 80,
       height: 100,
       resizeMode: 'stretch',
    },
    categoriesBackText: {
        paddingLeft: 10,
    },
    choicesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,

    },
    choicesTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        paddingLeft: 15,
        paddingHorizontal: 20,
        color: colors.black,
        marginBottom: 20,
    },
    categoriesImage: {
        width: 140,
        height: 140,
        resizeMode: 'contain',
    },
    categoryOneText: {
        marginTop: 15,
        paddingLeft: 15,
        fontFamily: 'Montserrat-Meidum',
        fontSize: 15,
        color: colors.black,
    },
    categoryOneDes: {
        paddingLeft: 15,
        fontFamily: 'Montserrat-Meidum',
        fontSize: 13,
    },
    categoryOneWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        marginBottom: 30,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    descriptionWrapper: {
        width: '50%',
    },
    catPrice: {
        color: colors.secondary,
        fontFamily: 'Montserrat-Bold',
        fontSize: 25,
        marginTop: 5,
    }


})
export default Categories;