import React, { useEffect, useState } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import ProfilePicture from '../../../components/moleculs/ProfilePicture'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux'
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from 'react-native-responsive-dimensions';

const ProfileHeader = (props) => {
    const [identity, setIdentity] = useState()
    const [showLevel,setShowLevel] = useState(false)
    useEffect( async () => {
        setIdentity(JSON.parse(await AsyncStorage.getItem('identity')))
        // AsyncStorage.clear()
    },[])
    return (
        <>
            <View style={styles.waletContainer}>
                <FontAwesomeIcon icon={ faTrophy } size={responsiveFontSize(3)} style={{color:'yellow'}} onPress={() => {setShowLevel(true)}}/>
            </View>
            <View style={styles.profileContainer}>
                <View>
                    <ProfilePicture image="https://www.kavs.uniza.sk/images/Avatar_img/avatar-user-student-3e3e52aa56aeb627-512x512.png"/>
                </View>
                <View style={styles.identity}>
                    <Text style={{fontSize:responsiveFontSize(1.2),color:'#fff',fontWeight:'bold'}}>{identity && identity.user_number}</Text>
                    <Text style={{fontSize:responsiveFontSize(2),color:'#fff',fontWeight:'bold'}}>{identity && identity.name}</Text>
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    waletContainer:{
        height:responsiveHeight(12),
        alignItems:'flex-end',
        paddingTop:20,
        paddingRight:10
    },
    profileContainer:{
        flexDirection:'row',
    },
    identity:{
        justifyContent:'center',
        marginLeft:10
    }
})


const reduxState = (state) => {
    return {
        initialData : state.initialReducer
    }
}

export default connect(reduxState,null)(ProfileHeader)
