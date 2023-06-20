import React from 'react'
import {View,Text} from 'react-native'
import ProductItem from '../ProductItem'
import productsGetir from '../../../assets/productsGetir'
function index() {
  return (
    <View>
        <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'white'}}>
            {productsGetir.slice(0,2).map((item)=>(
                <ProductItem key={item.id} item={item}/>
            ))}
        </View>

        <Text style={{color:'grey',fontWeight:'bold',padding:14}}>Stick</Text>

       <View style={{flexDirection:'row',flexWrap:'wrap',alignItems:'center',flex:1,backgroundColor:'white',paddingVertical:10}}>
            {productsGetir.slice(2).map((item)=>(
                <ProductItem key={item.id} item={item}/>

            ))}
        </View> 
    </View>
  )
}

export default index
