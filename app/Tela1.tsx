import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, ScrollView , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

import { BlurView } from 'expo-blur';
import StyleTela1 from '../app/StyleTela1';
import styles from '../app/StyleTela1';
import { Link, router } from "expo-router";
import { useRouter, usePathname } from 'expo-router';
import React, { useState, useEffect, } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Tela1() {

    const [MostrarSaldoDGS, setMostrarSaldoDGS] = useState(false)
    const BorrarContaDGS = () => {
        return !MostrarSaldoDGS ? 'R$: 1.346,98' : '••••••••';
    };
    const [inicializadoDGS, setInicializadoDGS] = useState(false);

    useEffect(() => {
        setInicializadoDGS(true);
    }, []);


    const routerDGS = useRouter();
    const pathnameDGS = usePathname();
    const isActiveDGS = (Tela: string) => pathnameDGS === `/${Tela}`;

    return (
        <SafeAreaView style={styles.container} >
            <StatusBar barStyle="light-content" backgroundColor='#810AD0' />
            <View style={styles.container} >
                <View style={styles.container}>

                    <ScrollView style={styles.main} >
                        <View style={styles.header}>
                            <View style={styles.headerPerfil} >
                                <View>
                                    <TouchableOpacity style={styles.usercircle}><Icon name='user-o' style={styles.usero} ></Icon></TouchableOpacity>

                                </View>

                                <View style={styles.iconsinfo} >
                                    <View style={styles.invisiblecircle} ><Icon onPress={() => setMostrarSaldoDGS(!MostrarSaldoDGS)} name={MostrarSaldoDGS ? 'eye-slash' : 'eye'} style={styles.usero} ></Icon></View>
                                    <View style={styles.invisiblecircle} >{[{ name: 'info-circle', route: 'Tela4' }].map((item) => { return (<Icon key={item.route} onPress={() => router.replace(`/${item.route}`)} name={item.name} style={styles.usero} ></Icon>) })}</View>
                                    <View style={styles.invisiblecircle} ><Icon name='envelope-o' style={styles.usero} ></Icon></View>
                                </View>

                            </View>
                            <View style={styles.headerNome} >
                                <Text style={styles.Nome} >Olá, usuário!</Text>
                            </View>
                        </View>


                        <View style={styles.main} >
                            <View style={styles.conta}>
                                <Text style={styles.Fonte}>Conta</Text>
                                <Icon style={styles.arrowR} name='arrow-right' ></Icon>
                            </View>
                            <View style={styles.ContaCorrente} ><Text style={styles.Fonte}>{BorrarContaDGS()}</Text></View>
                            <View style={styles.alturaScrow} >
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <View style={styles.InfoH}>
                                        <View style={styles.ScrowInfo}>
                                            <View>
                                                <View style={styles.circlemain} >
                                                    <MaterialIcons name='pix' style={{ fontSize: 25 }} ></MaterialIcons>
                                                </View>
                                            </View>
                                            <Text style={styles.FontePequena}  >Pix</Text>
                                        </View>
                                        <View style={styles.ScrowInfo}>
                                            <View>
                                                <View style={styles.circlemain} >
                                                    <FontAwesome5 name='barcode' style={{ fontSize: 25 }} ></FontAwesome5>
                                                </View>
                                            </View>
                                            <Text style={styles.FontePequena} >Pagar</Text>
                                        </View>
                                        <View style={styles.ScrowInfo}>
                                            <View>
                                                <View style={styles.circlemain} >
                                                    <FontAwesome5 name='hand-holding-usd' style={{ fontSize: 25 }} ></FontAwesome5>
                                                </View>
                                            </View>
                                            <Text style={styles.FontePequena} >Pegar empréstimo</Text>
                                        </View>
                                        <View style={styles.ScrowInfo}>
                                            <View>
                                                <View style={styles.circlemain} >
                                                    <FontAwesome6 name='money-bill-transfer' style={{ fontSize: 25 }} ></FontAwesome6>
                                                </View>
                                            </View>
                                            <Text style={styles.FontePequena} >Transferir</Text>
                                        </View>
                                        <View style={styles.ScrowInfo}>
                                            <View>
                                                <View style={styles.circlemain} >
                                                    <Icon name='mobile-phone' style={{ fontSize: 35 }} ></Icon>
                                                </View>
                                            </View>
                                            <Text style={styles.FontePequena} >Recarga de celular</Text>
                                        </View>
                                    </View>
                                </ScrollView>

                            </View>

                            <View style={styles.SquareCartaoMain} >
                                <View style={styles.SquareCartao} >
                                    <MaterialCommunityIcons name='credit-card-multiple-outline' style={styles.CardSquare} ></MaterialCommunityIcons>
                                    <Text style={styles.FonteCartao} >Meus cartões</Text>
                                </View>
                            </View>
                            <View style={styles.SquareCartaoMain} >
                                <View style={styles.SquareCartao} >
                                    <MaterialIcons name='currency-exchange' style={styles.CardSquare} ></MaterialIcons>
                                    <Text style={styles.FonteCartao} >Assistente de pagamentos</Text>
                                </View>
                            </View>
                            <View style={styles.SquareCartaoMain} >
                                <View style={styles.SquareCartao} >
                                    <MaterialIcons name='stay-current-landscape' style={styles.CardSquare} ></MaterialIcons>
                                    <Text style={styles.FonteCartao} >Nu tag</Text>
                                </View>
                            </View>
                            <View style={styles.SquareNovidadesMain} >
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                    <View style={styles.SquareNovidadeH} >
                                        <View>
                                            <View style={styles.SquareNovidades} >
                                                <Text style={styles.FonteNovidades}>
                                                    <Text style={styles.NovidadeRoxa}>Novidade!</Text> Conheça a ferramenta de Controle de Gastos do nubank!
                                                </Text>
                                            </View>
                                        </View>

                                        <View>
                                            <View style={styles.SquareNovidades} >
                                                <Text style={styles.FonteNovidades}>
                                                    Você tem até <Text style={styles.NovidadeRoxa}>R$20.000,00</Text> disponíveis para empréstimo!
                                                </Text>
                                            </View>
                                        </View>


                                    </View>

                                </ScrollView>

                            </View>
                            <View style={styles.StraightLine} ></View>
                            <View style={styles.CreditMain} >
                                <View style={styles.contaCredit}>
                                    <Text style={styles.Fonte}>Cartão de Crédito</Text>
                                    <Icon style={styles.arrowR} name='arrow-right' ></Icon>
                                </View>
                                <Text style={styles.FonteCredit} >Fatura atual</Text>
                                <Text style={styles.Fonte} >R$30.000,00</Text>
                                <Text style={styles.FonteCredit} >Limite disponível de R$50.000,00</Text>
                            </View>
                            <View style={styles.bottom}></View>
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
                            const active = isActiveDGS(item.route) || (inicializadoDGS && item.route === 'Tela1');
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
