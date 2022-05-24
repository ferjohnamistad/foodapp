

const categoriesData = [
    {
        id: 1,
        image: require('../images/pizza-icon.png'),
        title: 'Pizza',
        selected: true,
        categoryOne: require('../images/pizzaSliceNoBg.png'),
        catoneName: 'Pizza Slice',
        catoneDes: 'Hungry for a snack? Have a slice',
        catonePrice: '0.59',
        categoryTwo: require('../images/wholepizza.png'),
        cattwoName: 'Whole Pizza',
        cattwoDes: 'Enjoy pizza with the family',
        cattwoPrice: '3.99',
    },
    {
        id: 2,
        image: require('../images/shrimp-icon.png'),
        title: 'Seafood',
        selected: false,
        categoryOne: require('../images/shrimpNoBG.png'),
        catoneName: 'Marinated Shrimp',
        catoneDes: 'Juicy, sweet and spicy shrimp',
        catonePrice: '2.99',
        categoryTwo: require('../images/shrimpPlatter.png'),
        cattwoName: 'Shrimp Platter',
        cattwoDes: 'Satisfy your cravings with a bucket of shimps',
        cattwoPrice: '5.99',

    },
    {
        id: 3,
        image: require('../images/soda-icon.png'),
        title: 'Soft Drinks',
        selected: false,
        categoryOne: require('../images/sodaMedium.png'),
        catoneName: 'Soft Drinks Medium',
        catoneDes: 'Refresh your mouth with a cold drink',
        catonePrice: '0.39',
        categoryTwo: require('../images/cokeLiterBg.png'),
        cattwoName: 'Soft Drinks Liter',
        cattwoDes: "Thirsty for more? Here's a Liter",
        cattwoPrice: '0.99',
    },
];

export default categoriesData;