import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, TextInput, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';
import { Menu, Divider, Provider } from 'react-native-paper';





Feather.loadFont();
MaterialCommunityIcons.loadFont();

const Home = ({navigation}) => {
    const renderCategoryItem = ({item}) => {
        return (
            <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Categories',
            {
                item:item,
            })}>
            <View style={[styles.categoryItemWrapper, 
            {   
                backgroundColor: item.selected ? colors.primary : colors.white,
                marginLeft: item.id == 1 ? 20 : 0,
            }
            ]}>
                <Image source={item.image} style={styles.categoryItemImage}/>
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={[styles.categroySelectWrapper,
                {
                    backgroundColor: item.selected ? colors.background : colors.secondary,
                }
                ]}>
                    <Feather 
                    name="chevron-right" 
                    size={8}
                    style={styles.categorySelectIcon}
                    color={item.selected ? colors.black : colors.white}
                    />
                </View>
            </View>
            </TouchableOpacity>
        );
    };

    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);


    return (
        
        <View style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior='automatic' 
            showsVerticalScrollIndicator={false}
            >
            {/* Header */}
            <SafeAreaView style={styles.menuContainer}>
                <View style={styles.headWrapper}>
                    <Image 
                    source={require('../assets/images/profile.png')} 
                    style={styles.profileImage}/>
                <Provider >
                <View style={styles.menuWrapper}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<TouchableOpacity onPress={openMenu} color={colors.black} ><Feather name="menu" color={colors.black} size={30}/></TouchableOpacity>}>
                    <Menu.Item onPress={() => {Alert.alert("Ferjohn")}} title="Profile" />
                    <Menu.Item onPress={() => {Alert.alert("May money ka ba?")}} title="Order" />
                    <Menu.Item onPress={() => {Alert.alert("You got 20 points")}} title="Reedem Points"  />
                    <Divider/>
                    <Menu.Item onPress={() => { Alert.alert(
                        "Signing Out",
                        "Are you sure?",
                        [
                        {
                            
                            text: "OK", onPress: () => navigation.navigate('Login'), style: "ok",
                        },
                        { 
                            text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel"
                        }
                        ])}} 
                        title="Sign out"
                        
                    />
                </Menu>
                </View>
                </Provider>
                
                </View>
            </SafeAreaView>
            {/* title */}
            <View style={styles.titleWrapper}>
                <Text style={styles.titleTile}>Mama Mia</Text>
                <Text style={styles.titleTiles}>Pizzaria®</Text>
                <Text style={styles.titleSubtitle}>Freshly Baked from the oven.</Text>
            </View>
            {/* search */}
            <View style={styles.searchWrapper}>
                <Feather name="search" size={16} color={colors.textDark}/>
                <View style={styles.search}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Type here to search"
                        placeholderTextColor={colors.textLight}
                        onChangeText={newText => setText(newText)}
                        defaultValue={text}
                        color={colors.textDark}
                    />
                </View>
            </View>
            {/* categories */}
            <View style={styles.categoriesWrapper}>
                <Text style={styles.categoriesTitle}>Categories</Text>
                <View style={styles.categoriesListWrapper}>
                    <FlatList
                    data={categoriesData}
                    renderItem={renderCategoryItem}
                    keyExtractor={item => item.id}
                    horizontal= {true}
                    />
                </View>
            </View>
            {/* popular */}
            <View style={styles.popularWrapper}>
                <Text style={styles.popularTitle}>Popular</Text>
                {popularData.map(item => (
                    <TouchableOpacity  key={item.id} onPress={() => navigation.navigate('Details',
                    {
                        item: item,
                    })}>
                    <View 
                    style={[styles.popularCardWrapper,
                    {
                        marginTop: item.id == 1 ? 10 : 20,
                    },
                    ]}>
                        <View>
                            <View>
                                <View style={styles.popularTopWrapper}>
                                    <MaterialCommunityIcons name="crown" size={12} color={colors.primary}/>
                                    <Text style={styles.popularTopText}>Top of the week</Text>
                                </View>
                                <View style={styles.popularTitlesWrapper}>
                                    <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                    <Text style={styles.popularTitlesWeight}>Weight {item.weight}</Text>
                                </View>
                            </View>
                            <View style={styles.popularCardBottom}>
                                <View style={styles.addPizzaButton}>
                                    <Feather name="plus" size={10} color={colors.textDark}/>
                                </View>
                                <View style={styles.ratingWrapper}>
                                    <MaterialCommunityIcons name="star" size={10} color={colors.textDark} />
                                    <Text style={styles.rating}>{item.rating}</Text>
                                </View>
                            </View>
                        </View> 

                        <View style={styles.popularCardRight}>
                            <Image source={item.image} style={styles.popularCardImage}/>
                        </View>
                      
                    </View>
                    </TouchableOpacity>

                    
                ))}
            
            </View>
            </ScrollView>




        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    headWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'flex-start',

    },
    profileImage: {
        height: 35,
        width: 35,
        borderRadius: 40,
        marginBottom: 5,
    
    },
    titleWrapper: {
        marginTop: 30,
        paddingHorizontal: 10,
        borderTopLeftRadius: 35,
        borderBottomRightRadius: 35,
        alignSelf: 'center',
        elevation: -3,
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
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,

    },
    searchInput: {
      fontSize: 20, 
    },
    search: {
        flex: 1,
        marginLeft: 12,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 3,

    },
    categoriesWrapper: {
        marginTop: 30,
    },
    categoriesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        paddingHorizontal: 20,
        color: colors.textDark
    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
        

    },
    categoryItemWrapper: {
        backgroundColor: colors.primary,
        marginRight: 20,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,

    },
    categoryItemTitle: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 10,
        color: colors.black,

    },
    categroySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 30,
        marginBottom: 20,

    },
    categorySelectIcon: {
        alignSelf: 'center',
    },
    popularWrapper: {
        paddingHorizontal: 20,

    },
    popularTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.textDark,
    },
    popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
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
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    popularTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.black,
    },
    popularTitlesWrapper: {
        marginTop: 20,
    },
    popularTitlesTitle: {
        color: colors.textDark,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
    },
    popularTitlesWeight: {
        color: colors.textDark,
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        marginTop: 5,
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    addPizzaButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    ratingWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    rating: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12, 
        color: colors.black,
        marginLeft: 5,

    },
    popularCardRight: {
        marginLeft: 40,
    },
    popularCardImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain',
    },
    menuWrapper: {
        alignSelf: 'flex-end',
        color: colors.textDark,
        elevation: 10,
        minHeight: 325,
        position: 'absolute',
    },
    menuContainer: {
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        
    },
    overFlow: {
        minHeight: 15,
        position: 'absolute',
       
    },
    
    
   
});

export default Home;