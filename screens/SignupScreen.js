import React, {useContext, useState}  from "react";
import { View, Text, Button,TouchableOpacity, Image, StyleSheet } from 'react-native';
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import { AuthContext } from "../navigation/AuthProvider";

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
  
    const {register, googleLogin} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.textSignup}>Tạo tài khoản</Text>
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
            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                placeholderText="Xác nhận mật khẩu"
                iconType="lock"
                secureTextEntry={true}
            />
            <FormButton
                buttonTitle="Đăng Kí"
                onPress={() => register(email, password)}
            />
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    Bằng cách nhấp vào Đăng ký, bạn đồng ý với{' '}
                </Text>
                <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                    Điều khoản dịch vụ
                </Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> và </Text>
                <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                    Chính sách bảo mật{' '}
                </Text>
                <Text style={styles.color_textPrivate}>
                    của chúng tôi.
                </Text>
            </View>

            <TouchableOpacity>
                <Text style={styles.textOr}>─────────── Hoặc ───────────</Text>
            </TouchableOpacity>

            {Platform.OS === 'android' ? (
            <TouchableOpacity style={styles.socialButton}>
                <SocialButton
                    buttonTitle="Facebook"
                    btnType="facebook"
                    color="#4867aa"
                    backgroundColor="#e6eaf4"
                    onPress={() => {}}
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
                style={styles.navButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.text}>
                    Đã có tài khoản?&nbsp;
                    <Text style={styles.navButtonText}>
                    Đăng Nhập
                    </Text>   
                </Text>
                
            </TouchableOpacity>
        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 20,
    },
    textSignup: {
        fontFamily: 'Lobster-Regular',
        fontSize: 30,
        marginBottom: 10,
        color: '#051d5f',
    },
    text: {
        fontFamily: 'Lato-Regular',
        fontSize: 17,
    },
    textOr: {
        fontFamily: 'Lobster-Regular',
        fontSize: 18,
        marginBottom: 10,
    },
    navButton: {
        marginTop: 15,
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
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 25,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    },
});