// app/(tabs)/index.tsx
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Sample categories
const CATEGORIES = [
  { id: '1', name: 'Vehicles', icon: 'car-outline' },
  { id: '2', name: 'Electronics', icon: 'phone-portrait-outline' },
  { id: '3', name: 'Property', icon: 'home-outline' },
  { id: '4', name: 'Jobs', icon: 'briefcase-outline' },
  { id: '5', name: 'Fashion', icon: 'shirt-outline' },
  { id: '6', name: 'Services', icon: 'construct-outline' },
];

// Sample featured ads
const FEATURED_ADS = [
  {
    id: '101',
    title: 'iPhone 13 Pro Max - 256GB',
    price: 'Rs 185,000',
    location: 'Colombo',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '102',
    title: 'Toyota Vitz 2018',
    price: 'Rs 6,200,000',
    location: 'Gampaha',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '103',
    title: 'Luxury Apartment for Sale',
    price: 'Rs 32,000,000',
    location: 'Battaramulla',
    image: 'https://via.placeholder.com/150',
  },
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F4A5C" />

      {/* Header & Search Bar Section */}
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={18} color="#00A896" />
          <Text style={styles.locationText}>Sri Lanka</Text>
        </View>

        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#A0B0B5" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search on Onadeyak.lk..."
            placeholderTextColor="#A0B0B5"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Categories Grid Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>All Categories</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesGrid}>
          {CATEGORIES.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryCard} activeOpacity={0.7}>
              <View style={styles.categoryIconContainer}>
                <Ionicons name={category.icon as any} size={24} color="#0F4A5C" />
              </View>
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Featured Listings Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Ads</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.listingsContainer}>
          {FEATURED_ADS.map((item) => (
            <TouchableOpacity key={item.id} style={styles.adCard} activeOpacity={0.8}>
              <Image source={{ uri: item.image }} style={styles.adImage} />
              <View style={styles.adDetails}>
                <Text style={styles.adTitle} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={styles.adPrice}>{item.price}</Text>
                <View style={styles.adLocationRow}>
                  <Ionicons name="location-outline" size={14} color="#666" />
                  <Text style={styles.adLocation}>{item.location}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F8',
  },
  header: {
    backgroundColor: '#0F4A5C',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 44,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#333333',
  },
  scrollContent: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#082C38',
  },
  seeAllText: {
    fontSize: 14,
    color: '#00A896',
    fontWeight: '600',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
    marginBottom: 20,
  },
  categoryCard: {
    width: '30%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E6F4F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
  },
  listingsContainer: {
    gap: 12,
  },
  adCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  adImage: {
    width: 110,
    height: 110,
    backgroundColor: '#E1E8ED',
  },
  adDetails: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  adTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A202C',
  },
  adPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00A896',
  },
  adLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  adLocation: {
    fontSize: 12,
    color: '#666666',
    marginLeft: 4,
  },
});