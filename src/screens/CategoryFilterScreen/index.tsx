import React from 'react'
import {ScrollView,Text} from 'react-native'
import CategoryFiltering from "../../components/CategoryFiltering"
import TypeFiltering from "../../components/TypeFiltering"
import ProductsContainer from "../../components/ProductsContainer"
import { Category } from '../../models'

function index() {
  return (
    <ScrollView>
        <CategoryFiltering />
        <TypeFiltering/>
        <ProductsContainer/>
    </ScrollView>
  )
}

export default index
