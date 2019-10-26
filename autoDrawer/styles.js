import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#CAC0E4',
        justifyContent: 'center'
    },
    menuRow: {
        flex: 3,
        flexDirection: 'row',
    },
    rowSpace1: {
        flex: 5,
    },
    rowLogo: {
        flex: 6,
        flexDirection: 'row',
    },
    rowBtn: {
        flex: 7,
        flexDirection: 'row',
    },
    rowSpace2: {
        flex: 1,
    },
    rowFileName: {
        flex: 2,
        flexDirection: 'row',
    },
    rowGoBtn: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rowSpace3: {
        flex: 12,
    },
    logo: {
        flex: 2,
        alignItems: "center",
        height: '150%',
        width: '100%',
    },
    icon1: {
        flex: 4,
        height: '85%',
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'center',
    },
    icon2: {
        flex: 4,
        height: '90%',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'center',
    },
    btnText: {
        flex: 5,
        alignItems: 'center',
        color: '#FCF6E4',
        fontSize: 25,
    },
    fileName: {
        flex: 1,
        backgroundColor: "#FCF6E4",
        borderColor: "#448E9E",
        borderWidth: 2,
    },
    goBtnText: {
        fontSize: 35,
        color:"#FCF6E4",
        alignItems:'center',
    }
});