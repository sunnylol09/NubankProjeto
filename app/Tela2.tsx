import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BlurView } from 'expo-blur';
import styles from '../app/StyleTela1';
import React, { useState } from 'react';
import { Link, router } from "expo-router";
import { useRouter, usePathname } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Tela2() {

    const [MostrarSaldoDGS, setMostrarSaldoDGS] = useState(false)
    const BorrarContaDGS = () => {
        return !MostrarSaldoDGS ? 'R$: 1.346,98' : '••••••••';
    };
    const routerDGS = useRouter();
    const pathnameDGS = usePathname();
    const isActiveDGS = (Tela: string) => pathnameDGS === `/${Tela}`;



    return (

        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor='#810AD0' />
            <View style={styles.container} >
                <View style={styles.container}>
                    <View style={styles.headerTela2}>
                        <View style={styles.headerPerfilTela2} >
                            <View>
                                <TouchableOpacity style={styles.usercircle}><Icon name='user-o' style={styles.usero} ></Icon></TouchableOpacity>
                            </View>
                            <View style={styles.iconsinfo} >
                                <View style={styles.invisiblecircle} ><Icon onPress={() => setMostrarSaldoDGS(!MostrarSaldoDGS)} name={MostrarSaldoDGS ? 'eye-slash' : 'eye'} style={styles.usero} ></Icon></View>
                                <View style={styles.invisiblecircle} >{[{ name: 'info-circle', route: 'Tela4' }].map((item) => { return (<Icon key={item.route} onPress={() => router.replace(`/${item.route}`)} name={item.name} style={styles.usero} ></Icon>) })}</View>
                                <View style={styles.invisiblecircle} ><Icon name='envelope-o' style={styles.usero} ></Icon></View>
                            </View>
                        </View>
                    </View>

                    <ScrollView style={styles.main} >
                        <View style={styles.main} >
                            <View style={styles.conta}>
                                <Text style={styles.Fonte}>Acompanhe seu dinheiro</Text>
                            </View>
                            <View style={styles.SquareDinheiroMain} >
                                <View style={styles.SquareDinheiro}>
                                    <View style={styles.SquareLeftDinheiro} >
                                        <FontAwesome5 name='donate' style={styles.CardSquare} ></FontAwesome5>
                                        <Text style={styles.FonteCartao} >Caixinhas</Text>
                                    </View>
                                    <Text style={styles.FonteMenor} >R$100,00</Text>
                                </View>
                                <View style={styles.SquareDinheiro}>
                                    <View style={styles.SquareLeftDinheiro} >
                                        <Icon name='bar-chart-o' style={styles.CardSquare} ></Icon>
                                        <Text style={styles.FonteCartao} >Investimentos</Text>
                                    </View>
                                    <Text style={styles.FonteMenor} >R$351,06</Text>
                                </View>
                                <View style={styles.SquareDinheiro}>
                                    <View style={styles.SquareLeftDinheiro} >
                                        <Icon name='bitcoin' style={styles.CardSquare} ></Icon>
                                        <Text style={styles.FonteCartao} >Cripto</Text>
                                    </View>
                                    <Text style={styles.FonteMenor} >R$561,56</Text>
                                </View>
                            </View>
                            <View style={styles.StraightLine} ></View>
                            <View style={styles.CreditMain} >
                                <View style={styles.contaCredit}>
                                    <Text style={styles.Fonte}>Seguros</Text>
                                </View>
                            </View>
                            <View style={styles.SquareDinheiroMain} >
                                <View style={styles.SquareDinheiro}>
                                    <View style={styles.SquareLeftDinheiro} >
                                        <Icon name='heart-o' style={styles.CardSquare} ></Icon>
                                        <Text style={styles.FonteCartao} >Seguro de vida</Text>
                                    </View>
                                    <Text style={styles.FonteMenor} ></Text>
                                </View>
                                <View style={styles.SquareDinheiro}>
                                    <View style={styles.SquareLeftDinheiro} >
                                        <MaterialCommunityIcons name='cellphone' style={styles.CardSquare} ></MaterialCommunityIcons>
                                        <Text style={styles.FonteCartao} >Seguro de celular</Text>
                                    </View>
                                    <Text style={styles.FonteMenor} ></Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>

                </View>

                <BlurView intensity={100} tint="extraLight" style={styles.footer}>
                    <View style={styles.FooterSim}>
                        {[
                            { name: 'exchange', route: 'Tela1' },
                            { name: 'dollar', route: 'Tela2' },
                            { name: 'envelope-open', route: 'Tela3' },
                        ].map((item) => {
                            const active = isActiveDGS(item.route);
                            return (
                                <Icon
                                    key={item.route}
                                    onPress={() => router.replace(`/${item.route}`)}
                                    name={item.name}
                                    style={[
                                        styles.arrowR,{marginTop: 25},
                                        active && styles.simbolsfooter
                                    ]}
                                />
                            );
                        })}
                    </View>
                </BlurView>
            </View>
        </SafeAreaView>
    );

}
