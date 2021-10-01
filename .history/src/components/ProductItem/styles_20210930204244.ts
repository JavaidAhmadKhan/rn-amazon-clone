
const styles = StyleSheet.create({
    page: {
      padding: 10,
    },
    root: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#d1d1d1',
      borderRadius: 10,
      backgroundColor: '#fff',
    },
    rightContainer: {
      padding: 10,
      flex: 3,
    },
    image: {
      flex: 2,
      height: 150,
      resizeMode: 'contain',
    },
    title: {
      fontSize: 18,
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
    ratingsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
    },
    star: {
      margin: 2,
    },
  });