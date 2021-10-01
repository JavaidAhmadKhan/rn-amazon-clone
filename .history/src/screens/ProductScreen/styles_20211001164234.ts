import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: 'white'
    },

    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
        marginLeft: 5,
    },
    title: {
        color: 'darkgray'
    },
    description: {
        marginVertical: 10
    },
})

export default styles