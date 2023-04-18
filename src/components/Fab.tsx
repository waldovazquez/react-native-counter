import React from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
} from 'react-native';

interface FabProps {
    onPress: () => void;
    position?: 'br' | 'bl';
    title: string;
}

const Fab = ({
    onPress,
    position = 'br',
    title,
}: FabProps) => {
    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={[
                    styles.fabLocation,
                    (position === 'bl') ? styles.left : styles.right,
                ]}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const android = () => {
        return (
            <View
                style={[
                    styles.fabLocation,
                    (position === 'bl') ? styles.left : styles.right,
                ]}
            >
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple('#e9c46a', false, 30)}
                    onPress={onPress}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };

    return (Platform.OS === 'ios') ? ios() : android();
};

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#264653',
        borderRadius: 100,
        height: 60,
        justifyContent: 'center',
        width: 60,
    },
    fabLocation: {
        bottom: 25,
        position: 'absolute',
    },
    fabText: {
        alignSelf: 'center',
        color: '#e76f51',
        fontSize: 24,
        fontWeight: 'bold',
    },
    left: {
        left: 25,
    },
    right: {
        right: 25,
    },
});

export default Fab;
