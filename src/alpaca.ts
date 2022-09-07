import DEFAULT_HAIR from "./alpaca/hair/default.png"
import BANG_HAIR from "./alpaca/hair/bang.png"
import SHORT_HAIR from "./alpaca/hair/short.png"
import CURLS_HAIR from "./alpaca/hair/curls.png"
import ELEGANT_HAIR from "./alpaca/hair/elegant.png"
import FANCY_HAIR from "./alpaca/hair/fancy.png"
import QUIFF_HAIR from "./alpaca/hair/quiff.png"


import DEFAULT_EYES from "./alpaca/eyes/default.png"
import ANGRY_EYES from "./alpaca/eyes/angry.png"
import NAUGHTY_EYES from "./alpaca/eyes/naughty.png"
import PANDA_EYES from "./alpaca/eyes/panda.png"
import SMART_EYES from "./alpaca/eyes/smart.png"
import STAR_EYES from "./alpaca/eyes/star.png"


import DEFAULT_EARS from "./alpaca/ears/default.png"
import TILT_BACKWARD from "./alpaca/ears/tilt-backward.png"
import TILT_FORWARD from "./alpaca/ears/tilt-forward.png"


import DEFAULT_MOUTH from "./alpaca/mouth/default.png"
import ASTONISHED_MOUTH from "./alpaca/mouth/astonished.png"
import EATING_MOUTH from "./alpaca/mouth/eating.png"
import LAUGH_MOUTH from "./alpaca/mouth/laugh.png"
import TONGUE_MOUTH from "./alpaca/mouth/tongue.png"


import DEFAULT_NOSE from "./alpaca/nose/default.png"


import DEFAULT_LEG from "./alpaca/leg/default.png"
import BUBBLE_TEA_LEG from "./alpaca/leg/bubble-tea.png"
import COOKIE_LEG from "./alpaca/leg/cookie.png"
import GAME_CONSOLE_LEG from "./alpaca/leg/game-console.png"
import TILT_BACKWARD_LEG from "./alpaca/leg/tilt-backward.png"
import TILT_FORWARD_LEG from "./alpaca/leg/tilt-forward.png"


import DEFAULT_NECK from "./alpaca/neck/default.png"
import BEND_BACKWARD_NECK from "./alpaca/neck/bend-backward.png"
import BEND_FORWARD_NECK from "./alpaca/neck/bend-forward.png"
import THICK_NECK from "./alpaca/neck/thick.png"



import EARINGS from './alpaca/accessories/earings.png'
import FLOWER from './alpaca/accessories/flower.png'
import GLASSES from './alpaca/accessories/glasses.png'
import HEADPHONE from './alpaca/accessories/headphone.png'







interface Alpaca{
    hair:string;
    ears:string;
    eyes:string;
    mouth:string;
    neck:string;
    leg:string;
    nose:string;
    background:string;
    accessories:string;
}





export const alpacaAssets:{[Property in keyof Alpaca]:{
    [name:string]:string
}}= {
    hair:{
        default : DEFAULT_HAIR,
        bang:BANG_HAIR,
        short:SHORT_HAIR,
        curls:CURLS_HAIR,
        elegant:ELEGANT_HAIR,
        fancy:FANCY_HAIR,
        quiff:QUIFF_HAIR
        
    },
    eyes:{
        default: DEFAULT_EYES,
        angry:ANGRY_EYES,
        naughty:NAUGHTY_EYES,
        panda:PANDA_EYES,
        smart:SMART_EYES,
        star:STAR_EYES
    },
    ears:{
        default : DEFAULT_EARS,
        "tilt backward":TILT_BACKWARD,
        "tilt forward":TILT_FORWARD
    },
    mouth:{
        default:DEFAULT_MOUTH,
        astonished:ASTONISHED_MOUTH,
        eating:EATING_MOUTH,
        laugh:LAUGH_MOUTH,
        tongue:TONGUE_MOUTH
    },
    leg:{
        default:DEFAULT_LEG,
        "bubble tea":BUBBLE_TEA_LEG,
        cookie:COOKIE_LEG,
        "game console":GAME_CONSOLE_LEG,
        "tilt backward":TILT_BACKWARD_LEG,
        'tilt forward':TILT_FORWARD_LEG
    },
    neck:{
        default:DEFAULT_NECK,
        "bend backward":BEND_BACKWARD_NECK,
        "bend forward":BEND_FORWARD_NECK,
        thick:THICK_NECK
    },
    nose:{
        default:DEFAULT_NOSE
    },
    background:{
        "red 200":"#EF9A9A",
        "red 500":"#F44336",
        "red 900":"#B71C1C",

        "pink 200":"#F48FB1",
        "pink 500":"#E91E63",
        "pink 900":"#880E4F",


        "purple 200":"#CE93D8",
        "purple 500":"#9C27B0",
        "purple 900":"#4A148C",

        

        "blue 200":"#90CAF9",
        "blue 500":"#2196F3",
        "blue 900":"#0D47A1",

        "cyan 200":"#80DEEA",
        "cyan 500":"#00BCD4",
        "cyan 900":"#006064",
        
        "teal 200":"#80CBC4",
        "teal 500":"#009688",
        "teal 900":"#004D40",

        "yellow 200":"#FFF59D",
        "yellow 500":"#FFEB3B",
        "yellow 900":"#F57F17",


        "black":"#000000",
 

    },
    accessories:{
        earings:EARINGS,
        flower:FLOWER,
        glasses:GLASSES,
        headphne:HEADPHONE
    }
}

function getRandomKey(object:Object){
    const array = Object.keys(object);
    return array[Math.floor(Math.random() * array.length)]
  }

export function getRandomAlpaca():Alpaca{
    return {
        hair:getRandomKey(alpacaAssets.hair),
        ears:getRandomKey(alpacaAssets.ears),
        eyes:getRandomKey(alpacaAssets.eyes),
        mouth:getRandomKey(alpacaAssets.mouth),
        neck:getRandomKey(alpacaAssets.neck),
        background:getRandomKey(alpacaAssets.background),
        leg:getRandomKey(alpacaAssets.leg),
        nose:getRandomKey(alpacaAssets.nose),
        accessories:getRandomKey(alpacaAssets.accessories)
    }
}




export default Alpaca