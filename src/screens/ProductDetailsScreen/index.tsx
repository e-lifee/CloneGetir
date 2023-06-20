import React,{useEffect, useState} from 'react'
import {View,Text,ActivityIndicator,ScrollView} from 'react-native'
import {Product} from "../../models"
import ImageCarousel from "../../components/ImageCarousel"
import DetailBox from '../../components/DetailBox'
import DetailProperty from "../../components/DetailProperty"
import CartButton from "../../components/CartButton"
function index(props) {

    const [product,setProduct]=useState<Product>()
    useEffect(()=>{
        setProduct(props.route.params.product)
    },[])
    console.log("Product : ",product)
    if(!product){
        return <ActivityIndicator color={"#5D3EBD"}/>
    }
  return (
  <View style={{flex:1}}>
    <ScrollView>
      <ImageCarousel images={product.images}/>   
      <DetailBox price={product.discountedPrice} name={product.name} quantity={product.quantity}/>
      <Text style={{paddingHorizontal:10,paddingVertical:14,color:'#808B99',fontWeight:'600'}}>Details</Text> 
      <DetailProperty/>
    </ScrollView>
    <CartButton item={product}/> 
  </View>
  )
}

export default index
