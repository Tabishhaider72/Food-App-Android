import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function StudentOrderScreen() {
  const route = useRoute();
  const { selectedMeals } = route.params || { selectedMeals: [] };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Selected Orders</Text>
      <View style={styles.card}>
        {selectedMeals.length > 0 ? (
          <FlatList
            data={selectedMeals}
            renderItem={({ item }) => <Text style={styles.mealItem}>{item}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text style={styles.emptyMessage}>No items selected yet!</Text>
        )}
      </View>
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  mealItem: {
    fontSize: 18,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  emptyMessage: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});
