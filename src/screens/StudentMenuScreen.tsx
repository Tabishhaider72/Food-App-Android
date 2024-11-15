import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const meals = [
  "Energy Breakfast 🍳🥪",
  "Veggie Wraps 🥬🌯",
  "Snack Attack 🍟🍿",
  "Mega Meal Combo 🍔🍟🥤",
  "Fresh Smoothies 🥤🍓🍌",
  "Classic Pizza 🍕🍅",
  "Spice Biryani 🍚🍗",
  "Fresh Salads 🥗🥒",
  "Sweet Treats 🍩🍰",
  "Thirst Quenchers 🥤🍹",
  "Crispy Chicken Bites 🍗🍟",
  "Pasta Delight 🍝🧄",
  "Sizzling Sandwiches 🥪🔥",
  "Loaded Nachos 🧀🌶️",
  "Ice Cream Heaven 🍦🍫",
  "Fruit Bowls 🍉🍍🍇",
  "Momo Mania 🥟🌶️",
  "Grilled Cheese Bliss 🧀🍞",
  "Protein Shakes 🥛🍌💪",
  "Garlic Breadsticks 🥖🧄",
];

export default function StudentMenuScreen() {
  const navigation = useNavigation();
  const [selectedMeals, setSelectedMeals] = useState<string[]>([]);

  const toggleMealSelection = (meal: string) => {
    setSelectedMeals((prev) =>
      prev.includes(meal) ? prev.filter((item) => item !== meal) : [...prev, meal]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍴 Student Menu</Text>
      <Text style={styles.caption}>Tap to select your meals for the order:</Text>

      {/* Meal Items in Grid Layout */}
      <FlatList
        data={meals}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.mealItem,
              selectedMeals.includes(item) && styles.selectedMealItem,
            ]}
            onPress={() => toggleMealSelection(item)}
          >
            <View style={styles.mealContent}>
              <Text style={styles.mealText}>{item}</Text>
              {selectedMeals.includes(item) && (
                <MaterialIcons name="check-circle" size={24} color="#fff" />
              )}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Two columns
        columnWrapperStyle={styles.row} // Space between rows
      />

      {/* Bottom Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.placeOrderButton}
          onPress={() => navigation.navigate('AdminOrder', { selectedMeals })}
        >
          <Text style={styles.buttonText}>
            Place Order ({selectedMeals.length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.orderStatusButton}
          onPress={() => navigation.navigate('OrderStatus')}
        >
          <Text style={styles.buttonText}>Order Status</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  caption: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  mealItem: {
    flex: 1,
    margin: 5,
    padding: 15,
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  selectedMealItem: {
    backgroundColor: '#4caf50',
    shadowColor: '#4caf50',
  },
  mealContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mealText: {
    fontSize: 16,
    color: '#333',
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  placeOrderButton: {
    flex: 1,
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
    shadowColor: '#4caf50',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  orderStatusButton: {
    flex: 1,
    backgroundColor: '#2196f3',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#2196f3',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
