import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BlurView } from 'expo-blur';
import styles from '../app/StyleTela1';
import React, { useState, useEffect } from 'react';
import { Link, router } from "expo-router";
import { useRouter, usePathname } from 'expo-router';
import { Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { duvidas } from '../components/Duvidas';
import { SafeAreaView } from 'react-native-safe-area-context';
import Duvida from '../components/Duvida';
export default function Tela4() {

    const [MostrarSaldoDGS, setMostrarSaldoDGS] = useState(false)
    const BorrarContaDGS = () => {
        return !MostrarSaldoDGS ? 'R$: 1.346,98' : '••••••••';
    };
    const routerDGS = useRouter();
    const pathnameDGS = usePathname();
    const isActiveDGS = (Tela: string) => pathnameDGS === `/${Tela}`;
    const [buscaDGS, setBuscaDGS] = useState('')

    const duvidasFiltradasDGS = duvidas.filter((duvida) =>
        duvida.nome.toLocaleLowerCase().includes(buscaDGS.toLowerCase()) ||
        duvida.titulo.toLocaleLowerCase().includes(buscaDGS.toLowerCase())

    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor='#810AD0' />
            <View style={styles.container}>
                <View style={[styles.container, { backgroundColor: '#FFF' }]}>

                    <View style={[styles.headerTela2, { backgroundColor: '#FFF' }]}>
                        <View style={styles.headerPerfilTela4} >
                            <TouchableOpacity style={styles.userback}  >{[{ name: 'remove', route: 'Tela1' }].map((item) => { return (<Icon key={item.route} onPress={() => router.replace(`/${item.route}`)} name={item.name} style={[{ color: '#810AD0', fontSize: 60 }]} ></Icon>) })}</TouchableOpacity>
                            <Text style={styles.FonteInfoHeader} >ME AJUDA</Text>
                        </View>
                    </View>

                    <ScrollView style={styles.main} >
                        <View style={styles.main} >
                            <TextInput
                                value={buscaDGS}
                                onChangeText={setBuscaDGS}
                                style={styles.textInput}
                                placeholder="Qual é a sua dúvida?"

                            />
                            <View style={styles.MeAjuda}>
                                <Text style={styles.FonteCartao} >Como você avalia o Me Ajuda?</Text>

                                <View style={[styles.InfoH]} >
                                    <View style={[styles.ScrowInfo, { gap: 10, flexShrink: 1 }]}>
                                        <View>
                                            <View style={styles.circleAjuda} >
                                                <Icon name='warning' style={{ fontSize: 30, color: '#810AD0' }} ></Icon>
                                            </View>
                                        </View>
                                        <Text style={styles.FonteAjuda}  >Péssimo</Text>
                                    </View>
                                    <View style={[styles.ScrowInfo, { gap: 10, flexShrink: 1 }]}>
                                        <View>
                                            <View style={styles.circleAjuda} >
                                                <Icon name='frown-o' style={{ fontSize: 30, color: '#810AD0' }} ></Icon>
                                            </View>
                                        </View>
                                        <Text style={styles.FonteAjuda} >Ruim</Text>
                                    </View>
                                    <View style={[styles.ScrowInfo, { gap: 10, flexShrink: 1 }]}>
                                        <View>
                                            <View style={styles.circleAjuda} >
                                                <Icon name='smile-o' style={{ fontSize: 30, color: '#810AD0' }} ></Icon>
                                            </View>
                                        </View>
                                        <Text style={styles.FonteAjuda} >Bom</Text>
                                    </View>
                                    <View style={[styles.ScrowInfo, { gap: 10, flexShrink: 1 }]}>
                                        <View>
                                            <View style={styles.circleAjuda} >
                                                <Icon name='heart-o' style={{ fontSize: 30, color: '#810AD0' }} ></Icon>
                                            </View>
                                        </View>
                                        <Text style={styles.FonteAjuda} >Perfeito</Text>
                                    </View>
                                </View>
                                <View style={styles.StraightLine} ></View>

                                    <FlatList
                                        
                                        data={duvidasFiltradasDGS}
                                        keyExtractor={(item) => item.id}
                                        renderItem={({ item }) => <Duvida id={item.id} nome={item.nome} titulo={item.titulo} />}
                                    />
           

                            </View>
                        </View>

                    </ScrollView>

                </View>

                <BlurView intensity={100} tint="extraLight" style={styles.footer}>
                    <View style={styles.FooterSimAjuda}>
                        <TouchableOpacity style={styles.recFooter} ><Text style={[styles.FonteInfoHeader, { color: '#810AD0' }]}>E-mail</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.recFooter} ><Text style={[styles.FonteInfoHeader, { color: '#810AD0' }]}>Chat</Text></TouchableOpacity>


                    </View>
                </BlurView>
            </View>
        </SafeAreaView>
    );

}
