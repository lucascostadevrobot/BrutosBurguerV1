import {createContext} from "react";

export const themes = {
    primaryColor: {
        backgroundColor: 'rgb(155, 0, 0) !important' ,
        color: 'rgb(29, 36, 73) !important',
    },

    secundaryColor: {
        backgroundColor: 'rgb(240, 237, 80)    !important',
        color: 'rgb(29, 36, 73)     !important',
    }
}

export const ThemeContext =  createContext(themes.primaryColor); //exporta o contexto com o tema padrão