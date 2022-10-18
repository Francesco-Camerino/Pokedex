import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 5,
        marginVertical: 10,
        padding: 5,
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: 'white',
        color: 'black',
    },
    validInput: {
        borderColor: 'black'
    },
    invalidInput: {
        borderColor: 'red'
    },
    button: {
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        
    },
    validButton: {
        backgroundColor: '#18e002',
    },
    invalidButton: {
        backgroundColor: '#c2c2c2'
    },
    buttonText: {
        fontSize: 18,
        color: 'black'
    },
    
    
});

export default styles;
