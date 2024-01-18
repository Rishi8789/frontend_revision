import axios from "axios"
import { DELETE_DATA_ERROR, DELETE_DATA_LOADING, DELETE_DATA_SUCCESS, GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, POST_DATA_ERROR, POST_DATA_LOADING, POST_DATA_SUCCESS } from "./actionType"
const baseURl="https://mock-json-server-st3e.onrender.com/employees";

export const getData=()=>async(dispatch)=>{
try {
    dispatch({type: GET_DATA_LOADING})
    const res= await axios.get(baseURl);
    // console.log(res.data)
    dispatch({type:GET_DATA_SUCCESS,payload:res.data})
} catch (error) {
    dispatch({type: GET_DATA_ERROR})
}
}

//post
export const postData=(payload)=>async(dispatch)=>{
    try {
        dispatch({type:POST_DATA_LOADING})
        const postDatas=  await axios.post(baseURl,payload);
        dispatch({type:POST_DATA_SUCCESS})
    } catch (error) {
        dispatch({type:POST_DATA_ERROR})
    }
}


    //update
export const updateData=(id,payload)=>async(dispatch)=>{
        try {
            await axios.put(`${baseURl}/${id}`,payload)
            
        } catch (error) {
            
        }
    }
    //toggle
    export const toggleData=(id,status)=>async(dispatch)=>{
        try {
            await axios.patch(`${baseURl}/${id}`,{status: !status})
        } catch (error) {
            
        }
    }
//delete
export const deleteData=(id)=>async(dispatch)=>{
            try {
               dispatch({type:DELETE_DATA_LOADING})
               await axios.delete(`${baseURl}/${id}`)
               dispatch({type:DELETE_DATA_SUCCESS})
            } catch (error) {
                dispatch({type:DELETE_DATA_ERROR})
            }
 }

