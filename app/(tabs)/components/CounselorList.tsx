import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { supabase } from '../../../utils/supabase'; // Update path to your supabase client
import { NavigationProp } from '@react-navigation/native';

// Define the route parameters for navigation
type RootStackParamList = {
    AvailabilityCalendar: { counselorId: string };
};

interface Counselor {
    id: string;
    name: string;
    specialization: string;
}

interface CounselorListProps {
    navigation: NavigationProp<RootStackParamList>;
}

export default function CounselorList({ navigation }: CounselorListProps) {
    const [counselors, setCounselors] = useState<Counselor[]>([]);

    useEffect(() => {
        fetchCounselors();
    }, []);

    async function fetchCounselors() {
        const { data, error } = await supabase
            .from('counselors')
            .select('id, name, specialization');
        if (error) console.error(error);
        else setCounselors(data || []);
    }

    const renderItem = ({ item }: { item: Counselor }) => (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('AvailabilityCalendar', { counselorId: item.id })
            }
            style={styles.item}
        >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.specialization}>{item.specialization}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={counselors}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    item: {
        padding: 16,
        marginBottom: 10,
        backgroundColor: '#e0f7fa',
        borderRadius: 5,
    },
    name: { fontSize: 18, fontWeight: 'bold' },
    specialization: { fontSize: 14, color: '#757575' },
});
