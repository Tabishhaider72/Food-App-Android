import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Image outside the card */}
      <Image
        source={{ uri: 'https://img.freepik.com/premium-vector/healthy-food-design_24877-10599.jpg' }}
        style={styles.image}
      />

      {/* Card containing buttons */}
      <View style={styles.card}>
        <Text style={styles.title}>E-Canteen Facility</Text>

        {/* Button 1: Go to Admin Menu */}
        <Animated.View style={[styles.buttonContainer, { transform: [{ scale: scaleAnim }] }]}>
          <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => navigation.navigate('AdminMenu')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Go to Admin Menu</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Button 2: Go to Student Menu */}
        <Animated.View style={[styles.buttonContainer, { transform: [{ scale: scaleAnim }] }]}>
          <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => navigation.navigate('StudentMenu')}
            style={[styles.button, styles.buttonSpacing]}
          >
            <Text style={styles.buttonText}>Go to Student Menu</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Headline at the bottom */}
        <Text style={styles.headline}>Aapka Khaana Ab Aur Bhi Aasaan!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  card: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 12,
    backgroundColor: '#4CAF50',
    borderRadius: 25,  // Rounded button with 50% of height for full-rounded effect
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSpacing: {
    marginTop: 15,
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 20,
    textAlign: 'center',
  },
});
