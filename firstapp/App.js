import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import DishCard from './assets/DishCard';
//View -> UIView
const dishes = [
  {
    id: '1',
    name: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
    image: 'https://example.com/spaghetti.jpg',
  },
  {
    id: '2',
    name: 'Chicken Curry',
    description: 'Spicy and flavorful chicken curry with a rich, creamy sauce.',
    image: 'https://example.com/chicken-curry.jpg',
  },
  // Add more dishes here
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dishes}
        renderItem={({ item }) => <DishCard dish={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default App;
