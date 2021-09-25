import React, {useContext, useState}  from "react";
import { View, Text, Button,TouchableOpacity, Image, StyleSheet } from 'react-native';
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import { AuthContext } from "../navigation/AuthProvider";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const {login, googleLogin, fbLogin} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/Logo.png')}
                style={styles.logo}
            />

            <Text style={styles.textHello}>Xin chào!</Text>

            <FormInput 
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Mật Khẩu"
                iconType="lock"
                secureTextEntry={true}
            />
            <FormButton
                buttonTitle="Đăng Nhập"
                onPress={() => login(email, password)}
            />
            <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
                <Text style={styles.navButtonText}>Quên mật khẩu?</Text>
            </TouchableOpacity>

            <Text style={styles.textOr}>─────────── Hoặc ───────────</Text>

            {Platform.OS === 'android' ? (
            <TouchableOpacity style={styles.socialButton}>
                <SocialButton
                    buttonTitle="Facebook"
                    btnType="facebook"
                    color="#4867aa"
                    backgroundColor="#e6eaf4"
                    onPress={() => fbLogin()}
                />

                <SocialButton
                    buttonTitle="Google"
                    btnType="google"
                    color="#de4d41"
                    backgroundColor="#f5e7ea"
                    onPress={() => googleLogin()}
                />
            </TouchableOpacity>
            ) : null}
            
            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.text}>
                    Chưa có tài khoản?{' '}
                    <Text style={styles.navButtonText}>
                    Đăng kí tại đây
                    </Text>   
                </Text>
                
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
    },
    logo: {
        height: 120,
        width: 300,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Lato-Regular',
        fontSize: 17,
    },
    textHello: {
        fontFamily: 'Lobster-Regular',
        fontSize: 30,
        marginLeft: 0,
        color: '#ff5c2c',
    },
    textOr: {
        fontFamily: 'Lobster-Regular',
        fontSize: 18,
        marginBottom: 10,
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 25,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#ff5c2c',
        fontFamily: 'Lato-Regular',
    },
    socialButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});