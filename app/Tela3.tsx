import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, ScrollView, Image , TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BlurView } from 'expo-blur';
import styles from '../app/StyleTela1';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from "expo-router";
import { useRouter, usePathname } from 'expo-router';

export default function Tela3() {

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


                    <ScrollView style={styles.main} >
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

                        <View>
                            <View style={styles.conta}>
                                <Text style={styles.Fonte}>Destaques</Text>
                            </View>
                            <View style={styles.alturaScrow} >
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <View style={styles.InfoH} >
                                        <View style={styles.ScrowInfo}>
                                            <View>
                                                <TouchableOpacity style={styles.recMain}>
                                                    <Image
                                                        source={require('../assets/youtube_anuncio.png')}
                                                        style={styles.recImg}
                                                    />
                                                    <View style={[styles.recB, { backgroundColor: '#cc1f3e' }]} >
                                                        <Text style={styles.FonteAnuncioP} >PATROCÍNIOS DA NUBANK</Text>
                                                        <Text style={styles.FonteAnuncioG} >Navegue pelo youtube e encontre os vídeos que você precisa!</Text>
                                                    </View>
                                                </TouchableOpacity >
                                            </View>
                                        </View>
                                        <View style={styles.ScrowInfo}>
                                            <View>
                                                <TouchableOpacity style={styles.recMain}>
                                                    <Image
                                                        source={require('../assets/prime.jpg')}
                                                        style={styles.recImg}
                                                    />
                                                    <View style={[styles.recB, { backgroundColor: '#4455db' }]} >
                                                        <Text style={styles.FonteAnuncioP} >SÉRIES IMPECÁVEIS</Text>
                                                        <Text style={styles.FonteAnuncioG} >Assista às melhores séries da década!</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.ScrowInfo}>
                                            <View>
                                                <TouchableOpacity style={styles.recMain}>
                                                    <Image
                                                        source={require('../assets/nvidia.jpg')}
                                                        style={styles.recImg}
                                                    />
                                                    <View style={[styles.recB, { backgroundColor: '#3ac75f' }]} >
                                                        <Text style={styles.FonteAnuncioP} >TECNOLOGIAS HIGH TECH</Text>
                                                        <Text style={styles.FonteAnuncioG} >Tenha o melhor do mercado tecnológico em suas mãos!</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>
                                <View style={styles.StraightLine} ></View>
                                <View style={[ { gap: 20}]} >
                                    <View style={styles.conta}>
                                        <Text style={styles.Fonte}>Tem de tudo</Text>
                                    </View>
                                    <View style={[styles.containerProp, { gap: 25 }]} >
                                        <View>
                                            <View style={[styles.recProp]} >
                                                <View style={[styles.recLogo, { backgroundColor: '#0a0a0a' }]}  >
                                                    <Image
                                                        source={require('../assets/shoppe.png')}
                                                        resizeMode='contain'
                                                    />
                                                </View>
                                                <View style={styles.recBody}>
                                                    <View style={{ width: '70%' }} >
                                                        <Text style={styles.FonteCartao} >Shopee</Text>
                                                        <Text style={{ color: '#979c98' }} >Cupom para compras acimas de R$40.</Text>
                                                    </View>
                                                    <View style={{ width: '30%' }} ><Text style={{ fontWeight: 'bold' }} >R$50 OFF</Text></View>
                                                </View>
                                            </View>
                                        </View>
                                        <View>
                                            <View style={[styles.recProp]} >
                                                <View style={[styles.recLogo, { backgroundColor: '#0a0a0a' }]}  >
                                                    <Image
                                                        source={require('../assets/mercado.png')}
                                                        resizeMode='contain'
                                                        style={{ width: 50, height: '100%', }}
                                                    />
                                                </View>
                                                <View style={styles.recBody}>
                                                    <View style={{ width: '70%' }} >
                                                        <Text style={styles.FonteCartao} >Mercado Livre</Text>
                                                        <Text style={{ color: '#979c98' }} >Produtos do mercado livre em suas mãos!</Text>
                                                    </View>
                                                    <View style={{ width: '30%' }} ><Text style={{ fontWeight: 'bold' }} >10% OFF</Text></View>
                                                </View>
                                            </View>
                                        </View>

                                        <View>
                                            <View style={[styles.recProp]} >
                                                <View style={[styles.recLogo, { backgroundColor: '#0a0a0a' }]}  >
                                                    <Image
                                                        source={require('../assets/magalu.png')}
                                                        resizeMode='contain'
                                                        style={{ width: 50, height: '100%', }}
                                                    />
                                                </View>
                                                <View style={styles.recBody}>
                                                    <View style={{ width: '70%' }} >
                                                        <Text style={styles.FonteCartao} >Magalu</Text>
                                                        <Text style={{ color: '#979c98' }} >Para produtos vendidos e entregues Magalu.</Text>
                                                    </View>
                                                    <View style={{ width: '30%' }} ><Text style={{ fontWeight: 'bold' }} >15% OFF</Text></View>
                                                </View>
                                            </View>
                                        </View>

                                        <View>
                                            <View style={[styles.recProp]} >
                                                <View style={[styles.recLogo, { backgroundColor: '#0a0a0a' }]}  >
                                                    <Image
                                                        source={require('../assets/smart.png')}
                                                        resizeMode='contain'
                                                        style={{ width: 50, height: '100%', }}
                                                    />
                                                </View>
                                                <View style={styles.recBody}>
                                                    <View style={{ width: '70%' }} >
                                                        <Text style={styles.FonteCartao} >Smart Projects</Text>
                                                        <Text style={{ color: '#979c98' }} >Compre os melhores dipositivos para seu projeto!</Text>
                                                    </View>
                                                    <View style={{ width: '30%' }} ><Text style={{ fontWeight: 'bold' }} >15% OFF</Text></View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.bottom}></View>
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
                                        styles.arrowR, { marginTop: 25 },
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
