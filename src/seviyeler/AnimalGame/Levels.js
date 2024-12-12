import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const levels = [
    {
        id: 1,
        animals: [
            { id: 1, name: 'Arı', image: require('../../../assets/image/animal/bee.png'), food: 'Bal', sound: require('../../../assets/mp3/bee.mp3') },
            { id: 2, name: 'Ayı', image: require('../../../assets/image/animal/bear.png'), food: 'Petek', sound: require('../../../assets/mp3/bear.mp3') },
            { id: 3, name: 'İnek', image: require('../../../assets/image/animal/cow.png'), food: 'Saman', sound: require('../../../assets/mp3/cow.mp3') },
        ],
        foods: [
            { name: 'Bal', image: require('../../../assets/image/food/honey.png'), targetX: width * -0.3, targetY: height * 0.32 },
            { name: 'Petek', image: require('../../../assets/image/food/honeycomb.png'), targetX: width * 0, targetY: height * 0.32 },
            { name: 'Saman', image: require('../../../assets/image/food/hay-bale.png'), targetX: width * 0.3, targetY: height * 0.32 },
        ],
    },
    {
        id: 2,
        animals: [
            { id: 4, name: 'Kedi', image: require('../../../assets/image/animal/cat.png'), food: 'Süt', sound: require('../../../assets/mp3/cat.mp3') },
            { id: 5, name: 'Kaplumbağa', image: require('../../../assets/image/animal/turtle.png'), food: 'Marul', },
            { id: 6, name: 'At', image: require('../../../assets/image/animal/horse.png'), food: 'Yulaf', sound: require('../../../assets/mp3/horse.mp3') },
        ],
        foods: [
            { name: 'Süt', image: require('../../../assets/image/food/milk.png'), targetX: width * -0.3, targetY: height * 0.32 },
            { name: 'Marul', image: require('../../../assets/image/food/lettuce.png'), targetX: width * 0, targetY: height * 0.32 },
            { name: 'Yulaf', image: require('../../../assets/image/food/oats.png'), targetX: width * 0.3, targetY: height * 0.32 },
        ],
    },
    {
        id: 3,
        animals: [
            { id: 7, name: 'Tavuk', image: require('../../../assets/image/animal/chicken.png'), food: 'Mısır', sound: require('../../../assets/mp3/chicken.mp3') },
            { id: 8, name: 'Aslan', image: require('../../../assets/image/animal/lion.png'), food: 'Et', sound: require('../../../assets/mp3/lion.mp3') },
            { id: 9, name: 'Maymun', image: require('../../../assets/image/animal/monkey.png'), food: 'Muz', sound: require('../../../assets/mp3/monkey.mp3') },
        ],
        foods: [
            { name: 'Muz', image: require('../../../assets/image/food/banana.png'), targetX: width * -0.3, targetY: height * 0.32 },
            { name: 'Et', image: require('../../../assets/image/food/meat.png'), targetX: width * 0, targetY: height * 0.32 },
            { name: 'Mısır', image: require('../../../assets/image/food/corn.png'), targetX: width * 0.3, targetY: height * 0.32 },
        ],
    },
    {
        id: 4,
        animals: [
            { id: 10, name: 'Köpek', image: require('../../../assets/image/animal/dog.png'), food: 'Kemik', sound: require('../../../assets/mp3/dog.mp3') },
            { id: 11, name: 'Penguen', image: require('../../../assets/image/animal/penguin.png'), food: 'Balık', sound: require('../../../assets/mp3/penguin.mp3') },
            { id: 12, name: 'Zürafa', image: require('../../../assets/image/animal/giraffe.png'), food: 'Yaprak', sound: require('../../../assets/mp3/giraffe.mp3') },
        ],
        foods: [
            { name: 'Kemik', image: require('../../../assets/image/food/bone.png'), targetX: width * -0.3, targetY: height * 0.32 },
            { name: 'Yaprak', image: require('../../../assets/image/food/leaf.png'), targetX: width * 0, targetY: height * 0.32 },
            { name: 'Balık', image: require('../../../assets/image/food/fish.png'), targetX: width * 0.3, targetY: height * 0.32 },
        ],
    },
    {
        id: 5,
        animals: [
            { id: 13, name: 'Fil', image: require('../../../assets/image/animal/elephant.png'), food: 'Yaprak', sound: require('../../../assets/mp3/elephant.mp3') },
            { id: 14, name: 'Fare', image: require('../../../assets/image/animal/mouse.png'), food: 'Peynir', sound: require('../../../assets/mp3/mouse.mp3') },
            { id: 15, name: 'Timsah', image: require('../../../assets/image/animal/crocodile.png'), food: 'Balık', sound: require('../../../assets/mp3/crocodile.mp3') },
        ],
        foods: [
            { name: 'Balık', image: require('../../../assets/image/food/fish.png'), targetX: width * -0.3, targetY: height * 0.32 },
            { name: 'Peynir', image: require('../../../assets/image/food/cheese.png'), targetX: width * 0, targetY: height * 0.32 },
            { name: 'Yaprak', image: require('../../../assets/image/food/leaf.png'), targetX: width * 0.3, targetY: height * 0.32 },
        ],
    },
    {
        id: 6,
        animals: [
            { id: 16, name: 'Yılan', image: require('../../../assets/image/animal/snake.png'), food: 'Böcek', sound: require('../../../assets/mp3/snake.mp3') },
            { id: 17, name: 'Dinazor', image: require('../../../assets/image/animal/dinosaur.png'), food: 'Yaprak', sound: require('../../../assets/mp3/dinosaur.mp3') },
            { id: 18, name: 'Tavşan', image: require('../../../assets/image/animal/rabbit.png'), food: 'Havuç', sound: require('../../../assets/mp3/rabbit.mp3') },
        ],
        foods: [
            { name: 'Havuç', image: require('../../../assets/image/food/carrot.png'), targetX: width * -0.3, targetY: height * 0.32 },
            { name: 'Böcek', image: require('../../../assets/image/food/bug.png'), targetX: width * 0, targetY: height * 0.32 },
            { name: 'Yaprak', image: require('../../../assets/image/food/leaf.png'), targetX: width * 0.3, targetY: height * 0.32 },
        ],
    },
    {
        id: 7,
        animals: [
            { id: 19, name: 'Kuş', image: require('../../../assets/image/animal/bird.png'), food: 'Tohum', sound: require('../../../assets/mp3/bird.mp3') },
            { id: 20, name: 'Koala', image: require('../../../assets/image/animal/koala.png'), food: 'Yaprak', sound: require('../../../assets/mp3/koala.mp3') },
            { id: 21, name: 'Panda', image: require('../../../assets/image/animal/panda.png'), food: 'Bambu', sound: require('../../../assets/mp3/panda.mp3') },
        ],
        foods: [
            { name: 'Bambu', image: require('../../../assets/image/food/bamboo.png'), targetX: width * -0.3, targetY: height * 0.32 },
            { name: 'Tohum', image: require('../../../assets/image/food/tohum.png'), targetX: width * 0, targetY: height * 0.32 },
            { name: 'Yaprak', image: require('../../../assets/image/food/eucalyptus.png'), targetX: width * 0.3, targetY: height * 0.32 },
        ],
    },
    {
        id: 8,
        animals: [
            { id: 22, name: 'Bukalemun', image: require('../../../assets/image/animal/chameleon.png'), food: 'Böcek', sound: require('../../../assets/mp3/chameleon.mp3') },
            { id: 23, name: 'Tilki', image: require('../../../assets/image/animal/fox.png'), food: 'Balık', sound: require('../../../assets/mp3/fox.mp3') },
            { id: 24, name: 'Koyun', image: require('../../../assets/image/animal/sheep.png'), food: 'Ot', sound: require('../../../assets/mp3/sheep.mp3') },
        ],
        foods: [
            { name: 'Balık', image: require('../../../assets/image/food/fish.png'), targetX: width * -0.3, targetY: height * 0.32 },
            { name: 'Böcek', image: require('../../../assets/image/food/bug.png'), targetX: width * 0, targetY: height * 0.32 },
            { name: 'Ot', image: require('../../../assets/image/food/grass.png'), targetX: width * 0.3, targetY: height * 0.32 },
        ],
    },
    {
        id: 9,
        animals: [
            { id: 25, name: 'Kurbağa', image: require('../../../assets/image/animal/frog.png'), food: 'Sinek', sound: require('../../../assets/mp3/frog.mp3') },
            { id: 26, name: 'Karga', image: require('../../../assets/image/animal/crow.png'), food: 'Tohum', sound: require('../../../assets/mp3/crow.mp3') },
            { id: 27, name: 'Deve', image: require('../../../assets/image/animal/camel.png'), food: 'Saman', sound: require('../../../assets/mp3/camel.mp3') },
        ],
        foods: [
            { name: 'Tohum', image: require('../../../assets/image/food/tohum.png'), targetX: width * -0.3, targetY: height * 0.32 },
            { name: 'Sinek', image: require('../../../assets/image/food/fly.png'), targetX: width * 0, targetY: height * 0.32 },
            { name: 'Saman', image: require('../../../assets/image/food/hay-bale.png'), targetX: width * 0.3, targetY: height * 0.32 },
        ],
    },
    {
        id: 10,
        animals: [
            { id: 28, name: 'Gergedan', image: require('../../../assets/image/animal/gergedan.png'), food: 'Ot', sound: require('../../../assets/mp3/gergedan.mp3') },
            { id: 29, name: 'Sincap', image: require('../../../assets/image/animal/squirrel.png'), food: 'Fındık', sound: require('../../../assets/mp3/squirrel.mp3') },
            { id: 30, name: 'Eşşek', image: require('../../../assets/image/animal/donkey.png'), food: 'Saman', sound: require('../../../assets/mp3/donkey.mp3') },
        ],
        foods: [
            { name: 'Ot', image: require('../../../assets/image/food/grass.png'), targetX: width * -0.3, targetY: height * 0.32 },
            { name: 'Fındık', image: require('../../../assets/image/food/hazelnut.png'), targetX: width * 0, targetY: height * 0.32 },
            { name: 'Saman', image: require('../../../assets/image/food/hay-bale.png'), targetX: width * 0.3, targetY: height * 0.32 },
        ],
    },
];

export default levels;
