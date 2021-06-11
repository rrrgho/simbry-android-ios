import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';
import { Text, StyleSheet, View } from 'react-native';
import { faBook, faBarcode, faUserShield } from '@fortawesome/free-solid-svg-icons';
import theme1 from '../../atoms/ColorPrimary';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const NavigationReport = ({Profile},props) => {
    const navigation = useNavigation();
    return  (
        <View style={[styles.container]}>
            <TouchableOpacity onPress={() => {navigation.navigate('BooksPage')}} style={styles.boxNav}>
            <LinearGradient colors={[theme1.primaryGradient1, theme1.primaryGradient2]} style={styles.iconBox}>
                    <FontAwesomeIcon style={{color:'#fff'}} size={25} icon={ faBook }/>
                </LinearGradient>
                <Text style={styles.iconText}>Pencarian Buku</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxNav}>
            <LinearGradient colors={[theme1.primaryGradient1, theme1.primaryGradient2]} style={styles.iconBox}>
                    <FontAwesomeIcon style={{color:'#fff'}} size={25} icon={ faBarcode }/>
                </LinearGradient>
                <Text style={styles.iconText}>Barcode</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('ProfilePage')}} style={styles.boxNav}>
            <LinearGradient colors={[theme1.primaryGradient1, theme1.primaryGradient2]} style={styles.iconBox}>
                    <FontAwesomeIcon style={{color:'#fff'}} size={25} icon={ faUserShield }/>
                </LinearGradient>
                <Text style={styles.iconText}>Profile Setting</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: 90,
        marginTop:15,
        backgroundColor:'#fff',
        position:'absolute',
        borderRadius:100,
        top:463,
        left:0,
        bottom:-120,
        borderWidth:1,
        borderColor:'#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity:  0.1,
        shadowRadius: 3,
        elevation: 2,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    boxNav:{
        width:100,
        height:undefined,
        backgroundColor:'#fff',
        marginTop:15,
        alignItems:'center',
        justifyContent:'center',
    },
    iconBox:{
        width:50,
        height:50,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
    },
    iconText:{
        marginTop:6,
        textTransform: 'uppercase',
        fontSize:12,
        textAlign:'center'
    }
})

export default NavigationReport