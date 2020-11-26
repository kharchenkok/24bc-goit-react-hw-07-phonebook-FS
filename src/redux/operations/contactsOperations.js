
import { db } from '../../config'
import { clearForm } from '../slice/contactFormSlice'

import { addContact, deleteContact, setContacts } from '../slice/contactsSlice'
import { resetError, setError } from '../slice/errorSlice'
import { loaderOff, loaderOn } from '../slice/loaderSlice'


export const getContactsOperation=(dbName)=>async(dispatch)=>{
    try {
       dispatch(loaderOn()) 
       const result=await db.collection(dbName).get()
       const formatResult=result.docs.map(doc=>({...doc.data(), id:doc.id}))
       dispatch(setContacts(formatResult))
    //    console.log(result)
   
       
    } catch (error) {
        dispatch(setError('Something wrong'))
    }finally{
        dispatch(loaderOff())
        dispatch(resetError())
    }
}

export const addContactsOperation=(dbName,contacts)=>async(dispatch)=>{
    try {
        dispatch(loaderOn())
        const result= await db.collection(dbName).add(contacts)
        // console.log("add result", result.id)
        // const formatResult=result.docs.map(doc=>({...doc.data(), id:doc.id}))
        const formatContact={...contacts, id:result.id}
        dispatch(addContact(formatContact))
        dispatch(clearForm())
    
    } catch (error) {
        dispatch(setError('Something wrong'))
    }finally{
        dispatch(loaderOff())
        dispatch(resetError())
    }
}

export const deleteContactsOperation=(dbName,id)=>async(dispatch)=>{
    try {
        dispatch(loaderOn())
       await db.collection(dbName).doc(id).delete()
        dispatch(deleteContact(id))
        
    } catch (error) {
        dispatch(setError('Something wrong'))
    }finally{
        dispatch(loaderOff())
        dispatch(resetError())
    }
}