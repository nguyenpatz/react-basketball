import React, { useReducer, useEffect, useContext } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();


const initialValue = {
	loading: false,
	images: [],
}


const URL_API = "https://api.unsplash.com/search/photos?client_id=pltZf-1zvnjoqZIK7xPvCiDPBtNs64ZzA5Hf5g-h5Bk&query=basketball";

const AppProvider = ({children}) => {

	const [state, dispatch] = useReducer(reducer, initialValue);

	const reloadImage = async () => {
		dispatch({type: "LOADING"});
		try {
			const response = await fetch(URL_API);
			const data = await response.json();
			if(data) {
				// console.log(data.results);
				const newImage = data.results.map((item) => {
					return item.urls.regular;
				});
				dispatch({type: "UPLOAD_IMAGE", payload: newImage});
				
			}
		} catch(error) {
			console.log(error);
		}
		dispatch({type: "NO_LOADING"});
	}

	useEffect(()=>{
		reloadImage();
	}, [])


	return (
		<AppContext.Provider value={{...state}}>
			{children}
		</AppContext.Provider>
	);
}

const useGlobalContext = () => useContext(AppContext);

export {AppContext, AppProvider, useGlobalContext};