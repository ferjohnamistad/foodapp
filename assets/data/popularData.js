const popularData = [
    {
        id: '1',
        image: require('../images/pizza1.png'),
        title: 'Primevera Pizza',
        weight: '540g',
        rating: '5.0',
        price: 5.99,
        sizeName: 'Medium',
        sizeNumber: 14,
        crust: 'Thin Crust',
        deliveryTime: 30,
        ingredients: [
        {
            id:'1',
            name: 'ham',
            image: require('../images/ham.png')
        },
        {
            id:'2',
            name: 'tomato',
            image: require('../images/tomato.png')
        },
        {
            id:'3',
            name: 'cheese',
            image: require('../images/cheese.png')
        },
        {
            id:'4',
            name: 'garlic',
            image: require('../images/garlic.png')
        },

         ]



    },
    {
        id: '2',
        image: require('../images/pizza2.png'),
        title: 'Vegetarian Pizza',
        weight: '450g',
        rating: '4.5',
        price: 2.99,
        sizeName: 'Medium',
        sizeNumber: 13,
        crust: 'Thin Crust',
        deliveryTime: 30,
        ingredients: [
        {
            id:'1',
            name: 'cheese',
            image: require('../images/cheese.png')
        },
        {
            id:'2',
            name: 'garlic',
            image: require('../images/garlic.png')
        },
        {
            id:'3',
            name: 'tomato',
            image: require('../images/tomato.png')
        },

         ]


    },
    {
        id: '3',
        image: require('../images/pizza3.png'),
        title: 'Pepperoni Pizza',
        weight: '700g',
        rating: '5.0',
        price: 3.99,
        sizeName: 'Large',
        sizeNumber: 16,
        crust: 'Thin Crust',
        deliveryTime: 30,
        ingredients: [
        {
            id:'1',
            name: 'tomato',
            image: require('../images/tomato.png')
        },
        {
            id:'2',
            name: 'cheese',
            image: require('../images/cheese.png')
        },
        {
            id:'3',
            name: 'ham',
            image: require('../images/ham.png')
        },

         ]


    },
];

export default popularData;