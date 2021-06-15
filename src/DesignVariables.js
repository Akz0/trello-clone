export const Colors={
    nonGreyScale:{
        purple:'#8d3cb5',
        blue:'#0fcbff',
        red:'#f43121',
        green:'#3b9927',
        yellow:'#c2961e',
        pink:'#fa4a65',
        orange:'#fea01c',
    },
    navBarColors:{
        green:'#5AA84F',
        purple:'#87637C',
        blue:'#186C99',
        brown:'#302625',
        orange:'#B06635',
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