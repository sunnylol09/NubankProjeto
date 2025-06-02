import { ReactElement } from "react";
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../app/StyleTela1';

type DadosDuvida = {
    id?: string,
    nome?: string,
    titulo?: string,
};

export default function Duvida({ id, nome, titulo }: DadosDuvida) {
    return (
        <TouchableOpacity style={styles.CardBody} >
            <View style={styles.CardAjuda} >
                <View style={styles.CardInfo} >
                    <Text style={styles.FonteCartao} >{nome}</Text>
                    <Text style={{ color: '#979c98' }} >{titulo}</Text>
                </View>
                <Icon style={styles.arrowR} name='arrow-right' ></Icon>
            </View>

        </TouchableOpacity>


    );

}