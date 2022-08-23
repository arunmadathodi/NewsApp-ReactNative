import { createSlice } from "@reduxjs/toolkit";

const initialState={
    item: [{id:'c1', title:'Entertainment', flag: false,color:'#f5428d'},{id:'c2', title:'Sports',flag: false,color:'#f54242'},{id:'c3', title:'Business',flag: false,color:'#f5a442'},
    {id:'c4', title:'Health',flag: false,color:'#41d95d'},{id:'c5',title:'Technology', flag: false,color:'#f5428d'},{id:'c6',title:'General', flag: false,color:'#f5a442'}],
}


const favoriteState = createSlice({
    name:'favourites',
    initialState: initialState,
   
    reducers:{

        addFavourite:(state,action)=>{
              return {...state, item:state.item.map((item)=> (item.id === action.payload ? 
                {...item, flag:true, color:'#a9a9a9'} : {...item}) )}
        },
        removeFavourite:(state,action)=>{
            switch (action.payload) {
                case "c1":
                    return {...state,item:state.item.map((item=>item.id === action.payload?
                        {...item, color:'#f5428d',flag:false} : {...item}))}
                    
                    break;
                case "c2":
                    return {...state,item:state.item.map((item=>item.id === action.payload?
                        {...item, color:'#f54242',flag:false} : {...item}))}
    
                    break;
                
                case "c3":
                        return {...state,item:state.item.map((item=>item.id === action.payload?
                            {...item, color:'#f5a442',flag:false} : {...item}))}
        
                        break;
                case "c4":
                        return {...state,item:state.item.map((item=>item.id === action.payload?
                                {...item, color:'#41d95d',flag:false} : {...item}))}
            
                        break;
                        
                case "c5":
                        return {...state,item:state.item.map((item=>item.id === action.payload?
                                    {...item, color:'#f5428d',flag:false} : {...item}))}
                
                        break;
    
                case "c6":
                    return {...state,item:state.item.map((item=>item.id === action.payload?
                        {...item, color:'#f5a442',flag:false} : {...item}))}
    
                    break;
    
                default:
                    break;
               }
        },

        resetReducer:(state,action)=>{
           return initialState
          
        }
       
    }
})

export const addFavourite = favoriteState.actions.addFavourite;
export const removeFavourite = favoriteState.actions.removeFavourite;
export const resetReducer = favoriteState.actions.resetReducer;

export default favoriteState.reducer;


