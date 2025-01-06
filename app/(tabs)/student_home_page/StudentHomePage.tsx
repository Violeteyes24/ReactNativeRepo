import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomNavBar from '../../(tabs)/components/BottomNavBar';

const StudentHomePage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.appBar}>
                <Text style={styles.appBarTitle}>HNU-MHSS</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.circleButton}>
                    <TouchableOpacity>
                        <Text style={styles.checkIcon}>✓</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.checkInText}>Check In</Text>
                <Text style={styles.greetingText}>
                    How are you feeling today, Student?
                </Text>
            </View>
            <BottomNavBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9E8EC',
    },
    appBar: {
        backgroundColor: '#38A169',
        paddingVertical: 10,
        alignItems: 'center',
    },
    appBarTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleButton: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#38A169',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkIcon: {
        fontSize: 50,
        color: '#FFF',
    },
    checkInText: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    greetingText: {
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
        color: '#000',
    },
});

export default StudentHomePage;
