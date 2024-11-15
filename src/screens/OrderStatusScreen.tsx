import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

export default function OrderStatusScreen() {
  const [celebration, setCelebration] = useState(false);
  const cannonRef = useRef<any>(null);

  // Function to trigger confetti with smoother control
  const triggerConfetti = () => {
    if (cannonRef.current) {
      cannonRef.current.start(); // Start the cannon animation
    }
    setCelebration(true);
    setTimeout(() => setCelebration(false), 1500); // Reset after 1.5 seconds for smooth animation
  };

  useEffect(() => {
    const interval = setInterval(triggerConfetti, 3000); // Trigger every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Status</Text>
      <Text style={styles.caption}>🎉 Your order has been placed successfully! 🎉</Text>

      {/* Confetti Cannon */}
      <ConfettiCannon
        ref={cannonRef}
        count={200}
        origin={{ x: 0, y: 0 }}
        explosionSpeed={600} // Adjust speed for smoother animation
        fadeOut={true}
        duration={1500} // Confetti stays on screen for a smooth duration
      />

      {/* Bottom Image */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://cdni.iconscout.com/illustration/premium/thumb/order-confirm-illustration-download-in-svg-png-gif-file-formats--online-booking-placed-shopping-pack-e-commerce-illustrations-5902811.png?f=webp',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  caption: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'contain',
  },
});
