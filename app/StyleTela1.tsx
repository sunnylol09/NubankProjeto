import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    alturaScrow: {

    },

    bottom:{
        height: 150,
        width: '100%',
        
        backgroundColor: "#810AD0",
    },
    container: {
        height: '100%',
        display: 'flex',
        width: '100%',


    },
    header: {
        backgroundColor: "#810AD0",
        height: 200,
        width: '100%',
        flexDirection: 'column',

    },
    headerTela2: {
        backgroundColor: "#810AD0",
        height: 150,
        width: '100%',
        flexDirection: 'column',
    },

    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: "8%",
        width: "100%",
        zIndex: 10, 

    },

    
    FooterSim:{
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 130,
        paddingBottom: 10,
    },

    FooterSimAjuda:{
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        
    },

    main: {
        backgroundColor: "FFFFFF",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: 20,
    },

    headerPerfil: {

        height: "70%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 15,
        paddingHorizontal: 25,
    },

    headerPerfilTela2:{
        height: "100%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 15,
        paddingHorizontal: 25,
    },

    headerPerfilTela4:{
        height: "100%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        paddingHorizontal: 25,
    },

    usero: {
        fontSize: 30,
        color: '#FFF'

    },
    userback:{
        position: 'absolute',
        top: 40,
        left: 40,
    },
    iconsinfo: {
        display: 'flex',
        flexDirection: 'row',

    },
    usercircle: {
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: '#9e4fe3',
        alignItems: 'center',
        justifyContent: 'center',

    },

    invisiblecircle: {
        width: 60,
        height: 60,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerNome: {
        height: "30%",
        display: 'flex',
        justifyContent: 'center',
        padding: 15,
        paddingHorizontal: 25,
    },

    Nome: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },

    conta: {
        display: 'flex',
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    ContaCorrente: {
        display: 'flex',
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    arrowR: {
        fontSize: 20,
    },

    Fonte: {
        fontSize: 20,
        fontWeight: '500',
    },


    FontePequena: {
        fontSize: 15,
        letterSpacing: 0.5,
        fontWeight: '500',
        width: 100,
        height: 40,
        textAlign: 'center',
    },

    FonteAjuda:{
        fontSize: 13,
        letterSpacing: 0.5,
        fontWeight: '500',
        width: 100,
        height: 40,
        color: '#810AD0',
        
        textAlign: 'center',
    },
    FonteMenor: {
        fontSize: 15,
        letterSpacing: 0.5,
        fontWeight: '500',
    },

    FonteNovidades: {
        fontSize: 15,
        letterSpacing: 0.5,
        fontWeight: '200',
        width: '90%',
    },

    FonteInfoHeader:{
        color: '#979c98',
        letterSpacing: 2,
        fontSize: 17,
    },

    FonteCredit: {
        fontSize: 15,
        letterSpacing: 0.5,
        fontWeight: '200',
        width: '90%',
    },

    FonteAnuncioP:{
        letterSpacing: 0.3,
        fontSize: 13,
        color: '#9c8f8c',
        fontWeight: 'bold',
    },
    FonteAnuncioG:{
        letterSpacing: 0.3,
        fontSize: 16,
        color: '#FFF',
    },
    NovidadeRoxa: {
        color: '#810AD0',
        fontWeight: 'bold',
    },

    circlemain: {
        width: 90,
        height: 90,
        borderRadius: 50,
        backgroundColor: '#e3e4e8',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleAjuda:{
        minWidth: 60,
        maxWidth: 80,
        minHeight: 60,
        maxHeight: 80,
        borderRadius: 50,
        backgroundColor: 'transparent',
        borderWidth: 0.8,
        borderColor: '#bdb7b7',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    recMain: {
        width: 330,
        height: 330,
        borderRadius: 20,    
        backgroundColor: '#e3e4e8',
    },
    
    ScrowInfo: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        padding: 10,
        paddingHorizontal: 5,
        

    },

    InfoH: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    FonteCartao: {
        fontSize: 15,
        fontWeight: '500',
    },

    CardSquare: {
        fontSize: 28,
    },
    SquareCartaoMain: {
        paddingHorizontal: 20,
    },
    SquareDinheiroMain: {
        paddingHorizontal: 20,
        gap: 22,
    },
    SquareCartao: {
        height: 70,
        width: '95%',
        borderRadius: 10,
        backgroundColor: '#e3e4e8',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 18,
        padding: 10,
        paddingHorizontal: 20,
    },
    SquareDinheiro: {
        height: 70,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#e3e4e8',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 20,
    },
    SquareLeftDinheiro:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 13,
    },

    SquareNovidadesMain: {
        paddingHorizontal: 20,
    },

    SquareNovidades: {
        height: 100,
        width: 370,
        borderRadius: 10,
        backgroundColor: '#e3e4e8',
        padding: 10,
        paddingHorizontal: 20,
        gap: 30,
        justifyContent: 'center',
    },
    SquareNovidadeH: {
        flexDirection: 'row',
        gap: 25,
    },

    StraightLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#e3e4e8',
    },

    CreditMain: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        paddingHorizontal: 25,
        gap: 5,

    },

    contaCredit: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },


    simbolsfooter:{
        fontSize: 20,
        color: '#810AD0',
    },

    recImg:{
        height: '70%',
        width: '100%',       
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },

    recB:{
        height: '30%',
        width: '100%',
        flexDirection: 'column',
        padding: 20,
        gap:5, 
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    recProp:{
        height: 50,
        width: '100%',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
    },
    recLogo:{
        height: '100%',
        width: '20%',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    recBody:{
        height: '100%',
        width: '85%',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap:10,
    },
    recFooter:{
        height: '100%',
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#bdb7b7',
        borderWidth: 0.8,
    },
    textInput:{
        padding: 15,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 8,
        borderColor: '#bdb7b7',
        borderWidth: 0.8,
    },

    MeAjuda:{
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 20,
    },
    containerProp:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 30,

    },

    CardAjuda:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    CardInfo:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap:5,
    },
    CardBody:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 30,
        borderBottomColor: '#bdb7b7',
        borderBottomWidth: 0.8,
    }
});

export default styles;