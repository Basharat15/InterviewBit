import React, { useReducer, useCallback, useState, useEffect } from 'react';
import { Text,
     View, 
     StyleSheet,
      ScrollView, 
      Button,
       ActivityIndicator, 
       Modal,
        Pressable, 
       KeyboardAvoidingView,
        ImageBackground, Dimensions, Image, TextInput,TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import InputSign from '../components/InputSignIn';
import Card from '../components/Card';
import MainButton from '../components/MainButton';

// import { LinearGradient } from 'expo-linear-gradient'
import * as  AuthAction from '../store/actions/Auth'
// import { Ionicons, FontAwesome, MaterialIcons, AntDesign,Feather,Entypo,MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '../constants/Colors';


const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const fromReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const UpdatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        }
        const UpdatedValidities = {
            ...state.inputValidities,
            [action.input]: action.IsValid
        }

        let fromIsValid = true;
        for (const key in UpdatedValidities) {
            fromIsValid = fromIsValid && UpdatedValidities[key]
        }
        return {
            inputValues: UpdatedValues,
            inputValidities: UpdatedValidities,
            fromIsValid: fromIsValid
        }
    };
    return state;
}

const AuthScreen = props => {
    const [isLoading, SetisLoading] = useState(false)
    const [isSignup, SetisSignup] = useState(false)
    const [Error, SetError] = useState();
    const [alert, setalert] = useState(false);
    const [data,setData] = useState({
        email:'',
        password:'',
        check_textInputChange:false,
        secureTextEntry:true
    })

    const dispatch = useDispatch();
    const [stateFrom, DispatchstateFrom] = useReducer(fromReducer, {
        inputValues: {
            email: '',
            password: '',
        },
        inputValidities: {
            email: false,
            password: false,
        },
        FormValiditity: {
            fromIsValid: false
        }
    })

    useEffect(() => {
        if (Error) {
            setalert(true)
        }
    }, [Error])

    const authHandler = async () => {
         SetError(null)
        SetisLoading(true)
        try {
            await dispatch(AuthAction.login(
                stateFrom.inputValues.email,
                stateFrom.inputValues.password
            )) 
        } catch (err) {
            SetError(err.message)
            SetisLoading(false)
        }

    };

    const updateSecureTextEntry = ()=>{
        setData({
            ...data,
            secureTextEntry:!data.secureTextEntry
        })

    }

    const ChangetextHanlder = useCallback((inputIdentifier, inputValue, inputValiditiy) => {
        if(inputValue.length !== 0){
            setData({
                ...data,
                email:inputValue,
                check_textInputChange:true
            })
        }else{
            setData({
                ...data,
                email:inputValue,
                check_textInputChange:false
            }) 
        }
        if(inputIdentifier==='password'){
        setData({
            ...data,
            password:inputValue
        })
    }
        DispatchstateFrom({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            IsValid: inputValiditiy,
            input: inputIdentifier,
        });

    }, [DispatchstateFrom]);

    if (isLoading) {
        return (
            <View style={styles.Centered}>
                <ActivityIndicator
                    size='large'
                    color={Colors.primary}
                />
            </View>
        )
    }

    return (

        // New design 
        <View style={styles.container}>
            <Modal visible={alert}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={() => {
                        setalert(false)
                    }}
                >
                    <View style={styles.center_View}>
                        <View style={styles.warning_modal}>
                            <View style={styles.warning_title}>
                                <Text style={styles.text1}>An error occured</Text>
                            </View>
                            <View style={styles.warning_Message}>
                             <Text style={styles.text}>'{Error}'</Text>  
                            </View>
                            <Pressable
                                onPress={() => {
                                    setalert(false)
                                }}
                                android_ripple={{ color: Colors.primary }}
                            >
                                <View style={styles.reset}>
                                    <Text style={styles.text1}>Ok</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            <View style={styles.header}>
            <View style={styles.iconContainer}>
            {/* <MaterialCommunityIcons name="gmail" size={40} color="#289cde"  /> */}
            <Image style={styles.img} source={{ uri: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} />
                    </View>
                <Text style={styles.text_header}>Sign In</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.txtContainer}>
                     <Text style={styles.valuetext}>Interview Bit</Text>
                     <Text style={styles.signText}>Please sign in to continue</Text>
                     </View>
                <Text style={styles.text_footer}>E-mail</Text>
                <View style={styles.action}>
                    {/* <AntDesign  name="user" size={20} color="#05375a" /> */}
                    <InputSign
                        style={styles.textInput}
                        id='email'
                        keyboardType='email-address'
                        required
                        email
                        returnKeyType='next'
                        autoCapitalize='none'
                        warningText='please enter a valid email address.'
                        onInputChange={ChangetextHanlder}
                        initialValue=''
                        placeholder='Please Enter Your E-mail'
                    />
                   {/* {data.check_textInputChange ?<AntDesign  name="checkcircleo" size={20} color="#289cde" />:null}  */}
                </View>

                <Text style={styles.text_footer1}>Password</Text>
                <View style={styles.action1}>
                    {/* <Feather   name="lock"  size={20} color="#05375a" /> */}
                    <InputSign
                        style={styles.textInput}
                        id='password'
                        keyboardType='default'
                        secureTextEntry={data.secureTextEntry ? true :false}
                        required
                        minLenght={6}
                        autoCapitalize='none'
                        warningText='please enter  password.'
                        onInputChange={ChangetextHanlder}
                        initialValue=''
                        returnKeyType='next'
                        placeholder='Please Enter Your Password'
                    />
                    {/* <TouchableOpacity onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ?<Feather  name="eye-off" size={20} color="#289cde" />:
                    <Feather  name="eye" size={20} color='#289cde'/>}
                    </TouchableOpacity>     */}
                </View>
                <MainButton style={styles.SignInButton} onPress={authHandler}>
                    Sign In
                </MainButton>
                <View style={styles.txtContainer1}>
                <Text style={styles.signText}>Don't have an account?</Text>
                </View>
                <TouchableOpacity 
                onPress={()=>{
                    props.navigation.navigate('sign up')
                }}
                style={styles.signIn1}
                >
                    <Text style={[styles.textSign,{
                        color:Colors.primary,
                        fontFamily:'Bold',
                        fontSize:20
                    }]}>SIGN UP</Text>
                </TouchableOpacity>
                </View>
            </View>

    

    )
}

export const ScreenOptions = {
    headerTitle: 'Sign In',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? '#4db8ff' : 'white'
    },
    headerTitleStyle: {
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}

const { height } = Dimensions.get('screen')
const height_logo = height * 0.28;
const styles = StyleSheet.create({
 // New design 
 warning_modal: {
    width: 250,
    height: 250,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 20,
},
warning_title: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: Colors.primary,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
},
center_View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#00000099'
},
warning_Message: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,

},
text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black'
},
text1: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
},
reset: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
},
container: {
    flex: 1,
    backgroundColor: Colors.primary
},
header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
},
footer: {
    flex: 4,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
},
text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop:110
},
text_footer: {
    color: '#05375a',
    fontSize: 16,
    marginBottom: 20,
    fontFamily: 'Bold',
},
text_footer1: {
    color: '#05375a',
    fontSize: 16,
    marginTop: 35,
    marginBottom: 20,
    fontFamily: 'Bold',
},
action: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: '#f2f2f2',
    // paddingBottom: 5,
    // height:60
},
action1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: '#f2f2f2',
    // paddingBottom: 5,
    // height:60
},
actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5
},
textInput: {
    flex: 1,
    paddingLeft: 15,
    marginTop: Platform.OS === 'ios' ? 0 : -17,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingHorizontal: 2,
    paddingVertical: 1,
},
errorMsg: {
    color: '#FF0000',
    fontSize: 14,
},
button: {
    alignItems: 'center',
    marginTop: 50
},
signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
signIn1: {
    borderColor: '#009387',
    marginTop: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
},
textSign: {
    fontSize: 18,
},
textSign1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red'
},
signText: {
    color: '#888',
    fontSize: 16,
},
valuetext: {
    color: Colors.primary,
    fontSize: 22,
    fontFamily: 'Bold',
    marginVertical: 3
},
txtContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
},
txtContainer1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%'
},
iconContainer: {
    backgroundColor: 'white',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 150,
    top: 25,
},
Centered: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
},
SignInButton:{
    marginTop:15,
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:'20%'
},
img:{
    height:'100%',
    width:'100%',
   borderRadius:40
   
}
})

export default AuthScreen;