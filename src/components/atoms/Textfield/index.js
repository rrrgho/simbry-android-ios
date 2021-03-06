import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { colorBlur, colorDark, colorPrimary } from '../../../containers/utils/color'

const Textfield = (props) => {
    const {style,placeholder,password, value} = props
    return (
        <View style={[styles.container,style]}>
            <View style={styles.textInputBox}>
                <TextInput value={value} secureTextEntry={password ?? false} onChangeText={props.onChangeText} style={{color:colorDark}} placeholderTextColor={colorDark} placeholder={placeholder ?? 'Your placeholder'}/>
            </View>
            <View style={styles.iconBox}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 50,
        backgroundColor: colorBlur,
        flexDirection:'row',
        borderRadius:6
    },
    textInputBox:{
        flex:1,
        paddingLeft:10
    },
    iconBox:{
        width:40,
    }
})

export default Textfield
