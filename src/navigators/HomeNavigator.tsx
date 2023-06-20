import React,{useState,useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {Image,Text,TouchableOpacity,Dimensions,View} from "react-native"
import HomeScreen from "../screens/HomeScreen"
import CategoryFilterScreen from "../screens/CategoryFilterScreen"
import ProductDetailsScreen from "../screens/ProductDetailsScreen"
import CartScreen from "../screens/CartScreen"
import { Ionicons } from '@expo/vector-icons';
import { useNavigation,getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { Foundation } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { Product } from '../models'
import * as actions from "../redux/actions/cartActions"
const Stack=createStackNavigator()

const {width,height}=Dimensions.get('window')

function MyStack({navigation,route,cartItems,clearCart}:{cartItems:{product:Product,quantity:number}[],clearCart:()=>void}) {
  const tabHiddenRoutes=["ProductDetails","CartScreen"]
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
    
  }, [navigation, route]);

const [totalPrice,setTotalPrice]=useState<number>(0)
const getProductPrice=()=>{
    var total=0;
    cartItems.forEach(cartItem=>{
      const price=(total+=cartItem.product.discountedPrice);
      setTotalPrice(price)
    })
}

useEffect(()=>{
  getProductPrice()
},[cartItems,navigation])

  return (
    <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle:{backgroundColor:"#5C3EBC"},
            headerTitle:()=>(
              <Image
              source={require("../../assets/getirlogo.png")}
              style={{width:70,height:30,marginLeft:140}}
              />
            )

          }}
      />
      <Stack.Screen
          name="CategoryDetails"
          component={CategoryFilterScreen}
          options={{
            headerTintColor:'white',
            headerBackTitleVisible:false,
            headerStyle:{backgroundColor:"#5C3EBC"},
            headerTitleAlign: 'center',
            headerTitle:()=>(
              <Text style={{fontWeight:'bold',fontSize:15,color:'white'}}>Products</Text>
            ),
            headerRight:()=>(
              <TouchableOpacity onPress={() => navigation.navigate("CartScreen")} style={{width:width*0.24,height:33,backgroundColor:'white',
              marginTop:10,marginRight:width*0.03,borderRadius:9,flexDirection:'row',alignItems:'center'}}>
              <Image style={{width:23,height:23,marginLeft:6}} source={require("../../assets/cart.png")}/>
              <View style={{height:33,width:4,backgroundColor:'white'}} />
              <View style={{flex:1,justifyContent:'center',alignItems:'center',height:33,backgroundColor:'#f3effe',borderTopRightRadius:9,borderBottomRightRadius:9}}>
                <Text style={{color:'#5d3ebd',fontWeight:'bold',fontSize:12}}>
                  <Text>{"\u20BA"}</Text>
                  {totalPrice.toFixed(2)}
                </Text>
              </View>
              </TouchableOpacity>
            )
          }}
      />
      <Stack.Screen 
       options={{
        headerBackTitleVisible:false,
        headerTintColor:'white',
        headerStyle:{backgroundColor:"#5C3EBC"},
        headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{paddingLeft:12}}>
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
        ),
          headerTitle:()=>(
            <Text style={{marginLeft:70,fontWeight:'bold',color:'white',fontSize:15}}>
              Product Detail
            </Text>
          ),
        headerRight:()=>(
          <TouchableOpacity style={{paddingRight:12}}>
            <Foundation name="heart" size={24} color="#32177a" />
          </TouchableOpacity>
        )
       }}
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
      
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTintColor:'white',
          headerBackTitleVisible:false,
          headerStyle:{backgroundColor:'#5c3ebc'},
          headerTitleAlign:'center',
          headerTitle:()=>(
            <Text style={{fontWeight:'bold',fontSize:15,color:'white'}}>
              My Cart
            </Text>
          ),
          headerLeft:()=>(
            <TouchableOpacity style={{paddingLeft:10}} onPress={()=>navigation.goBack()}>
                <Ionicons name="close" size={26} color="white" />
            </TouchableOpacity>
          ),
          headerRight:()=>(
            <TouchableOpacity onPress={()=>clearCart()} style={{paddingRight:10}}>
              <Ionicons name="trash" size={24} color="white" />
            </TouchableOpacity>
          )
        }
        }
      />
    </Stack.Navigator>
  )
}

const mapStateToProps=(state)=>{
  const {cartItems}=state;
  return {
    cartItems:cartItems
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    clearCart:()=>dispatch(actions.clearCart())
  }
}
function HomeNavigator({navigation,route,cartItems,clearCart}:{clearCart:()=>void}){
  return <MyStack navigation={navigation} route={route} cartItems={cartItems} clearCart={clearCart}/>
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeNavigator)
