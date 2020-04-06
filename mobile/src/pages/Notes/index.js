import React from 'react';
import { View, FlatList, Image, Text , TouchableOpacity } from 'react-native';

import styles from './styles';
import logoImg from '../../assets/logo.png';


export default function Incidents() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>Bem-vido! Confira suas notas.</Text>
            </View>

            
        </View>
    );
}