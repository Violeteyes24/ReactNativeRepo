import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define the types for your navigation routes
type RootStackParamList = {
    Home: undefined;
    Appointment: undefined;
    MoodTracker: undefined;
    Chatbot: undefined;
};

const BottomNavBar = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.bottomNav}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navItem}>
                <Text style={styles.navItemText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Appointment')} style={styles.navItem}>
                <Text style={styles.navItemText}>Appointment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MoodTracker')} style={styles.navItem}>
                <Text style={styles.navItemText}>Mood Tracker</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Chatbot')} style={styles.navItem}>
                <Text style={styles.navItemText}>Chatbot</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#268246',
        paddingVertical: 10,
    },
    navItem: {
        alignItems: 'center',
    },
    navItemText: {
        color: '#FFF',
        fontSize: 14,
    },
});

export default BottomNavBar;
