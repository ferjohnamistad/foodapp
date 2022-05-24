import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import colors from '../assets/colors/colors';


const Payment = ({route,navigation}) => {
    const {totalPrice} = route.params;

    
   
       
    return (
        <View style={styles.paymentWrapper}>
            <ScrollView>
            {/* Title */}
            <View style={styles.titleWrapper}>
                <Text style={styles.titleTile}>Mama Mia</Text>
                <Text style={styles.titleTiles}>Pizzaria®</Text>
                <Text style={styles.titleSubtitle}>Freshly Baked from the oven.</Text>
            </View>
            {/* Total Price */}
            <View style={styles.totalPriceWrapper}>
            <Text style={styles.totalPriceTitle}>Total Price: </Text>
            <Text style={styles.totalPricePrice}>${totalPrice}</Text>
            </View>

            {/* Choice of Payment*/}
            <Text style={styles.choiceTitle}>Choose method of payment</Text>
            <View style={styles.choiceWrapper}>
                <View style={styles.choiceOne}>
                    <TouchableOpacity style={styles.choiceBg}>
                    <Image style={styles.choiceImage} source={require('../assets/images/codMotor.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.choiceOne}>
                    <TouchableOpacity style={styles.choiceBg}>
                    <Image style={styles.choiceImage} source={require('../assets/images/paypal.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.choiceWrapper}>
                <View style={styles.choiceOne}>
                    <TouchableOpacity style={styles.choiceBg}>
                    <Image style={styles.choiceImage} source={require('../assets/images/pokemon.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.choiceOne}>
                    <TouchableOpacity style={styles.choiceBg}>
                    <Image style={styles.choiceImage} source={require('../assets/images/atm.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default Payment;

const styles = StyleSheet.create({
    paymentWrapper:{
        flex: 1,
    },
    titleWrapper: {
        marginTop: 30,
        paddingHorizontal: 10,
        borderTopLeftRadius: 35,
        borderBottomRightRadius: 35,
        alignSelf: 'center',
        backgroundColor: colors.primary,
        
    },
    titleSubtitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        color: colors.textDark,
        marginBottom: 5,
    },
    titleTile: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 50,
        color: colors.textDark,
        marginTop: 5,
 
    },
    titleTiles: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 50,
        color: colors.textDark,
    },
    totalPriceWrapper: {
        marginTop: 25,
        paddingLeft: 15,
    },
    totalPriceTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 25,
        color: colors.textDark,
    },
    totalPricePrice: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
        color: colors.secondary,
    },
    choiceTitle: {
        marginTop: 15,
        paddingLeft: 15,
        fontFamily: 'Montserrat-Regular',
        color: colors.textDark,
        fontSize: 18,
    },
    choiceWrapper: {
        marginTop: 30,
        // paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    choiceBg: {
        backgroundColor: colors.white,
        borderRadius: 30,
    },
    choiceImage: {
        resizeMode: 'contain',
        width: 160,
        height: 160,
    }

})