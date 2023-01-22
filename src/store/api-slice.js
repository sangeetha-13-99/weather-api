import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import searchSliceActions from "./search-slice";
// import data from "../assets/constant";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const apiSlice=createSlice({
    name:'api',
    initialState:{
        units:'M',
        data:[],
    },
    reducers:{
        setData:(state,action)=>{
            state.data=action.payload;
        },
        setUnits:(state,action)=>{
            if(action.payload=="C"){
                state.units="M"
            }
            else if(action.payload=="F"){
                state.units="I"
            }
        }
    }
})

export const setApi=function(){
    return async(dispatch,getState)=>{

        const state=getState();
        const units=state.api.units;
        const {lat,lon}=state.search.currentLocation;
        const fetchData=async()=>{
            const response= await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?units=${units}&days=5&lat=${lat}&lon=${lon}&key=95e8353136364d09990b72d3163320c5`);
            
           if(!response.ok){
               throw new Error('oops api limit has been reached :|');
           }
           return  await response.json();
        }
        const data=await fetchData();
        if(Object.keys(data).length>0){
            const foreCastData=data.data.map((forecast)=>{
                const datetime=new Date(forecast.datetime);
                const day=daysArray[datetime.getDay()].substring(0,3);
                const date=datetime.getDate();
                const month=monthNames[datetime.getMonth()].substring(0,3);
                return {
                    id:uuidv4(),
                    maxTemp:forecast.high_temp,
                    minTemp:forecast.low_temp,
                    date:{day,date,month},
                    description:forecast.weather.description,
                    icon:`https://www.weatherbit.io/static/img/icons/${forecast.weather.icon}.png`,
                    temp:forecast.temp,
                    highlights:{
                        wind:{direction:forecast.wind_cdir,degree:forecast.wind_dir,speed:forecast.wind_spd},
                        humidity:{
                            percentage:forecast.rh
                        },
                        visibility:{
                            vis:forecast.vis
                        },
                        pressure:{
                            pres:forecast.pres
                        }
                    }
                }
            });
            dispatch(searchSliceActions.setCity(data.city_name));
            dispatch(apiSlice.actions.setData(foreCastData))
        }
    }
}

const apiSliceActions=apiSlice.actions;
export default apiSliceActions;