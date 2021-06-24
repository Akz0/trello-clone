export const Colors={
    nonGreyScale:{
        red:'#f43121',
        green:'#41B01C',
        darkGreen:'#173F2C',
        darkRed:'#A31000',
        purple:'#4A2384',
        yellow:'#FFB11A',
        orange:'#FF4300',
        persianGreen:'#1FA891',
        darkBLue:'#1C3C4A',
        blue:'#007acc',
        pink:'#D56CC0',
    },
    navBarColors:{
        independance:'#3B3B58',
        green:'#478978',
        purple:'#A96DA3',
        blue:'#5C80BC',
        brown:'#91785D',
        pink:'#8E5572',
    },
    black:'#000000',
    white:'#ffffff',
    grey:'#dedede',
    darkGrey:'#808080',

}
export const returnColor=(palette)=>{
    const colors={...palette}
    var keys = Object.keys(colors);
    return colors[keys[Math.floor(Math.random()*keys.length)]];
}

export const Fonts={
    
}