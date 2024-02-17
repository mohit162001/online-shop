import { redirect } from "react-router-dom"

export function storeUserData(data){
    localStorage.setItem("token",JSON.stringify(data.jwt))
    localStorage.setItem("username",JSON.stringify(data.user.username))
}

export function getUserData(key){
    const data = localStorage.getItem(key)
    return data
}

export function clearUserData(){
    localStorage.clear()
}

export function protector(){
    if(!getUserData('token')){
        return redirect('/login')
    }
    return null
}