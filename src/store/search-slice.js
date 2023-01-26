import { createSlice } from "@reduxjs/toolkit";

export const searchSlice=createSlice({
    name:'search',
    initialState:{
        searchCity:'',
        city:'',
        data:[],
        currentLocation:{lat:17.3850,lon:78.4867}
    },
    reducers:{
        setCity:(state,action)=>{
            state.city=action.payload
        },
        setsearchData:(state,action)=>{
            state.data=action.payload;
        },
        setSearchCity:(state,action)=>{
            state.searchCity=action.payload
        },
        setCurrentLocation:(state,action)=>{
            state.currentLocation=action.payload
        }

    }
})

export const setSearchAction=function(){
    return async(dispatch,getState)=>{
        let searchCity=getState().search.searchCity;
        const fetchData=async()=>{
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': `${import.meta.env.VITE_KEY}`,
                    'X-RapidAPI-Host': `${import.meta.env.VITE_HOST}`
                }
            };
            
            const response=await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=3&namePrefix=${searchCity===''?"":searchCity}`, options);
   
            if(!response.ok){
                throw new Error('oops May be API limit has been crossed:|');
            }
           return  await response.json();
        }
       
       const data=await fetchData();
        if( data.data.length>0){
           const cities=data.data.map((city)=>{
            return {
                id:city.id,
                name:city.city,
                country:city.countryCode,
                latLong:{lat:city.latitude,lon:city.longitude}
            }
           })
           dispatch(searchSlice.actions.setsearchData(cities));
        }
    }
}


const searchSliceActions=searchSlice.actions;
export default searchSliceActions;