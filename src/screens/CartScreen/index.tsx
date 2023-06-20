import React,{useEffect, useState} from 'react'
import {View,Text,Dimensions,FlatList, TouchableOpacity,ScrollView} from 'react-native'
import productsGetir from '../../../assets/productsGetir'
import CartItem from '../../components/CartItem'
import ProductItem from "../../components/ProductItem";
import { connect } from 'react-redux';
import { Product } from '../../models';
const {width,height}=Dimensions.get('window')
function index({cartItems}:{cartItems:{product:Product,quantity:number}[]}) {
  
  const [totalPrice,setTotalPrice]=useState<number>(0)
  const getProductsPrice=()=>{
    let total=0;
    cartItems.forEach(item=>{
      total+=item.product.discountedPrice
      setTotalPrice(total)
    })
    cartItems.length?null:setTotalPrice(0)
  }

  useEffect(()=>{
    getProductsPrice()
  },[cartItems])
  
  return (
    <View style={{flex:1}}>
    <ScrollView style={{flex:1}}>
    <FlatList
    style={{flex:1}}
     data={cartItems}
     renderItem={({item}) => <CartItem product={item.product} quantity={item.quantity}/>}
    />
    <Text style={{padding:15,fontWeight:'bold',color:'#5d3ebd'}}>Recommended Products</Text>
    <ScrollView 
     style={{backgroundColor:'white'}}
     horizontal={true} 
     showsHorizontalScrollIndicator={false} 
     bounces={true}>
        {productsGetir.map((item,index)=>(
            <ProductItem key={index} item={item}/>
        ))}
    </ScrollView>
    </ScrollView>
    <View style={{height:height*0.08,flexDirection:'row',alignItems:'center',paddingHorizontal:'4%',backgroundColor:'#f8f8f8'}}>
        <TouchableOpacity style={{
          height:height*0.06,
          flex:2.1,
          backgroundColor:'#5d3ebd',
          justifyContent:'center',
          alignItems:'center',
          borderBottomLeftRadius:8,
          borderTopLeftRadius:8
        }}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>Continue</Text>
        </TouchableOpacity>
        <View style={{flex:1,height:height*0.06,backgroundColor:'white',alignItems:'center',justifyContent:'center',marginTop:0,borderBottomRightRadius:8,borderTopRightRadius:8}}>
              <Text style={{color:'#5d3ebd',fontWeight:'bold',fontSize:15}}>
                    <Text>{"\u20BA"}</Text>
                    {totalPrice.toFixed(2)}
              </Text>
        </View>
    </View>
    </View>
  );
}

const mapStateToProps=(state)=>{
  const {cartItems}=state;
  return{
    cartItems:cartItems
  }
}
export default connect(mapStateToProps,null)(index)
