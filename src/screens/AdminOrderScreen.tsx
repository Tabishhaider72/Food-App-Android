import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AdminOrderScreen({ route }) {
  const { selectedMeals } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍴 Admin Order View</Text>
      <Text style={styles.caption}>Meals Selected by the Student:</Text>

      <FlatList
        data={selectedMeals}
        renderItem={({ item }) => (
          <View style={styles.mealItem}>
            <Text style={styles.mealText}>{item}</Text>
            <MaterialIcons name="check-circle" size={24} color="#4caf50" />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Two columns
        columnWrapperStyle={styles.row} // Space between rows
      />
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
  mealText: {
    fontSize: 16,
    color: '#333',
  },
});
