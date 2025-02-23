import React from "react";

import { View,Text,Image,StyleSheet} from "react-native";

export default class FilmItem extends React.Component{
    render(){
        return(
            <View style={styles.main_container}>
                <Image
                    style={styles.Image}
                    source={require=('../assets/icon.png')}
                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>title</Text>
                        <Text style={styles.vote_text}>vote</Text>
                    </View>
                    <view style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>Description</Text>
                    </view>
                    <View style={styles.date_container}>
                        <Text style={styles.date_text}>Sorti le date</Text>
                    </View>
                </View>

                                </View>
        )
    }

}
const styles=StyleSheet.create({
    main_container:{
    height : 190,
    flexDirection :'row'
},
    Image:{
        width :120,
        height : 180,
        margin : 10,
        backgroundColor : 'gray'
},
    content_container :{
        flex :1,
        margin : 5
    },
    header_container :{
        flex : 3,
        flexDirection : 'row'
    },
    title_text :{
        fontWeight : 'bold',
        fontSize : 20,
        flex : 1,
        flexWrap : 'wrap'
    },
    vote_text:{
        fontWeight : 'bold',
        fontSize : 26,
        color : '#666666'
    },
})
