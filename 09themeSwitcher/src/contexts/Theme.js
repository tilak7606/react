import { createContext,useContext } from "react";



export const ThemeContext =  createContext({
    themeMode : "light",
    darkTheme: () => { },                              //create context mai maai input objects bhi le sakta hun jaise isme le rakhi hai :
    lightTheme: () => { },

})

export const ThemeProvider = ThemeContext.Provider;          // iss vali line se mujha context provider mil jayga

export default function useTheme(){
    return useContext(ThemeContext);                     // abb mai is function ko direct export kr sakta hun aur fir iske ander ke varibales and functions ko import karke use kar sakta hun :
}