import {createStore,combineReducers,applyMiddleware} from "redux"
import thunkMiddleware  from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import cartItems from "./reducers/CartItem"
const reducers=combineReducers({
    cartItems:cartItems

});

const store=createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store;


