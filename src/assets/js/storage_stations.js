export function setStation(data){
    let searchCity = sessionStorage.getItem('searchcitys');
    if(searchCity===null || 0){//第一次
         let option=[{searchcitys:data.searchcitys}];
         option = JSON.stringify(option);
         sessionStorage.setItem('searchcitys',option);
    }else{
    	searchCity = JSON.parse(searchCity);
    	let newSearchCity=[];
    	searchCity.forEach(item=>{
            newSearchCity.push({searchcitys:item.searchcitys});
    	})
    	let option={searchcitys:data.searchcitys};
    	//数组去重
    	let flag=true;
        newSearchCity.forEach(f=>{
        	if(f.searchcitys===option.searchcitys){
        		flag=false;
        		return false;
        	};
        });
        if(flag){
        	newSearchCity.push(option);
        }
        newSearchCity = JSON.stringify(newSearchCity);
        sessionStorage.setItem('searchcitys',newSearchCity);
    }
}

export function getStation(){
	let searchcitys = JSON.parse(sessionStorage.getItem('searchcitys'));
	return searchcitys;
}