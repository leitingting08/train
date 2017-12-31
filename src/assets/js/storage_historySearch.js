export function setHistory(data){
    console.log(data)
    //首页最近搜素
    let searchHistory = sessionStorage.getItem('searchHistory');
     if(searchHistory===null || 0){//第一次
        let option = [{FromStation:data.FromStation,ToStation:data.ToStation}]
        option = JSON.stringify(option);
        sessionStorage.setItem('searchHistory',option);
     }else{
        searchHistory = JSON.parse(searchHistory);
        let newSearchHistory = [];
        searchHistory.forEach(item=>{
            newSearchHistory.push({
                FromStation:item.FromStation,
                ToStation:item.ToStation
            });
        });
        let option = {FromStation:data.FromStation,ToStation:data.ToStation};
        //数组去重
        let flag = true;
        newSearchHistory.forEach(i=>{

        })
        newSearchHistory.push(option);
        newSearchHistory = JSON.stringify(newSearchHistory);
        sessionStorage.setItem('searchHistory',newSearchHistory);
     }
}

export function getHistory(){
     let setHistory = JSON.parse(sessionStorage.getItem('searchHistory'));
}