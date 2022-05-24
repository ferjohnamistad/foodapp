import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image , StyleSheet, Button} from 'react-native';
import colors from '../assets/colors/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Counter from 'react-native-counters';





const CartCatOne = ({route, navigation}) => {

    const {item} = route.params;
    const [price, setPrice] = useState(item.cattwoPrice);
    const [counter, setCounter] = useState(1);
    const totalPrice = price + 3;
    
    const onClickServices = () => {
        navigation.navigate('Payment', {totalPrice: totalPrice});
        
        }


    const onChange = (number, type) => {
        if(type === '+'){
            setCounter(1);
            setPrice(item.cattwoPrice * number);
        }else {
            setCounter(counter + 1);
            setPrice(item.cattwoPrice * number);
        }
      }

    

    return (
        <View style={styles.cartWrapper}>
            {/* Header */}
            <View style={styles.cartHeadWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.cartBack}>
                        <Feather name="chevron-left" size={12} color={colors.textDark}/>
                    </View>
                    </TouchableOpacity>
                    
                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons name="star" size={12} color={colors.white}/>
                    </View>
            </View>
            {/* Item */}
            <View style={styles.cartItemWrapper}>
                <Image style={styles.cartImage} source={item.image}/>
                <Text style={styles.cartTitle}>{item.title}</Text>
                <Text style={styles.cartPrice}>${price.toFixed(2)}</Text>
           </View>
            {/* Counter */}
            <View style={styles.cartCounterWrapper}>
            <Counter style={styles.cartCounter}  start={1} max={50} min={1} onChange={(number, type) => onChange(number, type)} />
            </View>
            {/* Order Button */}
            <View style={styles.orderButtonWrapper}>
                <TouchableOpacity style={styles.orderButton} onPress={onClickServices}>
                    <Text style={styles.orderText}>Add to cart</Text>
                </TouchableOpacity>
            </View>
            {/* Total Price */}
            <View style={styles.totalWrapper}>
                <Text style={styles.totalText}>Order:               ${price.toFixed(2)}</Text>
                <Text style={styles.totalTextUnderline}>Delivery Fee:   $3.00</Text>
                <Text style={styles.totalText}>Total Price:       <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text></Text>

            </View>

        </View>
    )
} 

export default CartCatOne;

const styles = StyleSheet.create({
    cartWrapper: {
        flex: 1,    
    },
    cartHeadWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,     
    },
    cartBack: {
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
    cartItemWrapper: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartImage: {

    },
    cartTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 25,
        color: colors.textDark,
    },
    cartPrice: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 35, 
        color: colors.price,
    },
    cartCounterWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartCounter: {
        color: colors.black,
    },
    orderButtonWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    orderButton: {
        backgroundColor: colors.primary,
        borderRadius: 26,
        padding: 10,
    },
    orderText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: colors.textDark,
    },
    totalWrapper: {
        marginTop: 30,
        paddingLeft: 20,
    },
    totalText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
    },
    totalTextUnderline:{
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        textDecorationLine: 'underline',
        textDecorationColor: colors.black,
    },
    totalPrice: {
        color: colors.price,
    }
})