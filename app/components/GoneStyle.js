import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {},

    sildes: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width - 30,
        height: 90,

    },

    headerContainer: {
        color: "red",
        marginBottom: 70,
    },

    TopBg: {
        width: '100%',
        height: 120,
        backgroundColor: '#1D6BBD',
        alignItems: 'center'
    },

    headerBox: {
        position: 'absolute',
        top: 64,
        left: (Dimensions.get('window').width - 344) / 2,
        width: 344,
        height: 107,
        backgroundColor: '#fff',
        borderRadius: 6,
        shadowColor: "#ccc",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 2,
        shadowRadius: 5,
        elevation: 4,
    },
    foxConTxt: {
        fontSize: 16,
        color: "#fff",
        position: 'absolute',
        top: 31
    },
    foxConTxtChange: {
        fontSize: 10,
        color: "#fff",
        position: 'absolute',
        right: (Dimensions.get('window').width - 344) / 2,
        top: 34,
    },
    //============================================================
    carLogo: {
        width: 46,
        height: 46
    },
    logoContent: {
        width: 320,
        height: 50,
        marginLeft: 12,
        marginTop: 12,
        // backgroundColor: "#ccc",
        flexDirection: 'row',
        alignItems: 'center'
    },
    logoContentTxt: {
        fontSize: 22,
        color: "#000",
        marginLeft: 10
    },
    logoContentBtnTouch: {
        position: 'absolute',
        right: 11
    },
    logoContentBtn: {
        backgroundColor: "#E3F1FF",
        borderRadius: 100,
        width: 66,
        height: 23,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContentBtnTxt: {
        color: '#067BED',
        fontSize: 14,
    },
    logoBottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 8,
        marginLeft: 30
    },
    logoBottomTxt: {
        fontSize: 14,
        color: "#4A4A4A"
    },
    //===========================================
    lingContent: {
        width: "100%",
        height: 30,
        // backgroundColor:"#f00",
        alignItems: 'center',
        paddingLeft: 19,
        flexDirection: 'row'
    },
    lingContentTxt: {

    },
    //====================iconPage===================
    iconContent: {
        height: 170,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingTop: 10
    },
    iconTouchContent: {
        width: "25%",
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoContentBtnTxt: {
        marginTop: 5,
    },
    //============PlayHome==============================
    playHomeContanier: {
        marginTop: 20,
        width: "100%",
        height: 250,
    },
    playHomeTitle: {
        height: 30,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
    },
    playHomeTitleViewLeft: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    playHomeTitleViewRight: {
        width: '10%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    playHomeView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    playHomeViewItem: {
        width: "33.33%",
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    playHomeViewItemImg: {
        width: 80,
        height: 80
    },
    playHomeViewItemTxt: {
        fontSize: 12
    },

    //==============OtherImg===============
    OtherImgTitleContent:{
        flex:1,
        width:'100%',
        alignItems:"center",
        justifyContent:'center',
    },
    OtherImgTitleTxt:{
        fontSize:15,
        fontWeight:'bold',
        color:'#333'
    },
    OtherImgTitleLine:{
        width:80,
        height:3,
        borderRadius:50,
        backgroundColor:"#ccc",
        marginBottom:6
    },
    OtherImgView:{
        justifyContent:'center',
        alignItems:'center'
    }
})


