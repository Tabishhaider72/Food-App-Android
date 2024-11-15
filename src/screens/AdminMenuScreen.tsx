import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';  // Add this import

const menuItems = [
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

export default function AdminMenuScreen() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const navigation = useNavigation();  // Initialize navigation

  const toggleItem = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSave = () => {
    if (selectedItems.length < 10) {
      Alert.alert('Selection Required', 'Please select at least 10 items.');
    } else {
      Alert.alert('Menu Saved', 'Menu has been successfully saved!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Admin Menu Management 👨‍🍳</Text>
      <Text style={styles.caption}>Select at least 10 items to include in the menu:</Text>

      {/* Menu Items (Grid View) */}
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, selectedItems.includes(item) && styles.selectedItem]}
            onPress={() => toggleItem(item)}
          >
            <View style={styles.itemContent}>
              <Text style={styles.itemText}>{item}</Text>
              {selectedItems.includes(item) && (
                <MaterialIcons name="check-circle" size={24} color="#fff" />
              )}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        numColumns={2} // Set the number of columns to 2
        columnWrapperStyle={styles.row} // Style for rows
      />

      {/* Save Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Menu</Text>
        </TouchableOpacity>
      </View>

      {/* Admin Order Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.adminOrderButton}
          onPress={() => navigation.navigate('AdminOrder')}  // Navigation to AdminOrderScreen
        >
          <Text style={styles.adminOrderButtonText}>View Orders</Text>
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
  item: {
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
  selectedItem: {
    backgroundColor: '#4caf50',
    shadowColor: '#4caf50',
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#4caf50',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  saveButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  adminOrderButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#007bff',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  adminOrderButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
