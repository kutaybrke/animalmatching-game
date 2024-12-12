import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, Animated } from 'react-native';
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/native';  // useNavigation import et

import levels from '../seviyeler/AnimalGame/Levels'; // Tüm seviyeler buradan gelir

export default function GameScreen() {
    const navigation = useNavigation();  // Navigation hook'u
    const [currentLevel, setCurrentLevel] = useState(0);
    const [currentAnimal, setCurrentAnimal] = useState(null);
    const [score, setScore] = useState(0);
    const [usedAnimals, setUsedAnimals] = useState([]);
    const [sound, setSound] = useState(null);
    const moveAnim = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const [isAnimating, setIsAnimating] = useState(false);

    const playLevelUpSound = async () => {
        if (sound) {
            await sound.stopAsync();
            sound.unloadAsync();
        }

        const { sound: levelUpSound } = await Audio.Sound.createAsync(require('../../assets/mp3/levelup.mp3'));
        setSound(levelUpSound);
        await levelUpSound.playAsync();
    };

    const chooseNextAnimal = () => {
        const currentLevelData = levels[currentLevel];
        const remainingAnimals = currentLevelData.animals.filter(animal => !usedAnimals.includes(animal.id));
        if (remainingAnimals.length > 0) {
            const nextAnimal = remainingAnimals[0];
            setCurrentAnimal(nextAnimal);
        } else {
            if (currentLevel < levels.length - 1) {
                Alert.alert('Tebrikler', 'Level atladınız!');
                playLevelUpSound();
                setCurrentLevel(currentLevel + 1);
                setUsedAnimals([]);
            } else {
                Alert.alert('Oyun Bitti', 'Tüm seviyeleri tamamladınız!');
            }
        }
    };

    useEffect(() => {
        chooseNextAnimal();
    }, [currentLevel, usedAnimals]);

    useEffect(() => {
        if (currentAnimal) {
            playAnimalSound(currentAnimal.sound);
            resetAnimation();
        }
    }, [currentAnimal]);

    const resetAnimation = () => {
        moveAnim.setValue({ x: 0, y: 0 });
    };

    const playAnimalSound = async (soundFile) => {
        if (sound) {
            await sound.stopAsync();
            sound.unloadAsync();
        }

        const { sound: newSound } = await Audio.Sound.createAsync(soundFile);
        setSound(newSound);
        await newSound.playAsync();
    };

    const playFeedbackSound = async (isCorrect) => {
        const soundFile = isCorrect
            ? require('../../assets/mp3/success.mp3')
            : require('../../assets/mp3/failure.mp3');

        if (sound) {
            await sound.stopAsync();
            sound.unloadAsync();
        }

        const { sound: feedbackSound } = await Audio.Sound.createAsync(soundFile);
        setSound(feedbackSound);
        await feedbackSound.playAsync();
    };

    const animateAnimalToFood = (foodIndex) => {
        const selectedFood = currentLevelData.foods[foodIndex];
        if (!selectedFood) return; // Geçersiz bir seçim yapılırsa animasyonu başlatma

        setIsAnimating(true);

        const { targetX, targetY } = selectedFood;
        console.log(`Moving to X: ${targetX}, Y: ${targetY}`);

        Animated.timing(moveAnim, {
            toValue: { x: targetX, y: targetY },
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            setTimeout(() => {
                setIsAnimating(false);
                resetAnimation();
                setUsedAnimals([...usedAnimals, currentAnimal.id]);
                chooseNextAnimal();
            }, 500);
        });
    };

    const handleFoodSelect = (food, index) => {
        const isCorrect = currentAnimal && food.name === currentAnimal.food;
        if (isCorrect) {
            setScore(score + 1);
            playFeedbackSound(true);
            // Animasyon sonunda daha doğru bir konumda olmasını sağlamak için animasyonu yeniden başlatabilirsiniz.
            animateAnimalToFood(index);
        } else {
            playFeedbackSound(false);
        }
    };

    const currentLevelData = levels[currentLevel];

    return (
        <View style={styles.container}>
            <Text style={styles.levelText}>LEVEL {currentLevel + 1}</Text>
            <Text style={styles.instructionText}>Ekranda çıkan hayvanı doğru yiyecekle eşleştir</Text>

            {currentAnimal && (
                <View style={styles.animalSection}>
                    <Animated.View
                        style={[styles.animalContainer, {
                            transform: [{ translateX: moveAnim.x }, { translateY: moveAnim.y }]
                        }]}>
                        <Image source={currentAnimal.image} style={styles.animalImage} />
                        <Text style={styles.animalName}>{currentAnimal.name}</Text>
                    </Animated.View>
                </View>
            )}

            <View style={styles.foodSection}>
                {currentLevelData.foods.map((food, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleFoodSelect(food, index)}
                        onLayout={(event) => {
                            const { x, y } = event.nativeEvent.layout;
                            console.log(`Food: ${food.name}, X: ${x}, Y: ${y}`);
                        }}
                    >
                        <View style={styles.foodContainer}>
                            <Image source={food.image} style={styles.foodImage} />
                            <Text style={styles.foodText}>{food.name}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.scoreSection}>
                <Text style={styles.scoreText}>Puan: {score}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B8E0F2',
        paddingHorizontal: 20,
        paddingVertical: 100,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    levelText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#444',
    },
    instructionText: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginVertical: 10,
    },
    animalSection: {
        alignItems: 'center',
        marginVertical: 20,
        height: 200,
    },
    animalContainer: {
        alignItems: 'center',
    },
    animalImage: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    animalName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },
    foodSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    foodContainer: {
        alignItems: 'center',
        margin: 10,
    },
    foodImage: {
        width: 60,
        height: 60,
        marginBottom: 5,
    },
    foodText: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
    },
    scoreSection: {
        marginTop: 20,
    },
    scoreText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
});
