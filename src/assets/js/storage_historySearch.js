// export function setHistory(data){
//     console.log(data)
//     //首页最近搜素
//     let searchHistory = sessionStorage.getItem('searchHistory');
//      if(searchHistory===null || 0){//第一次
//         let option = [{FromStation:data.FromStation,ToStation:data.ToStation}]
//         option = JSON.stringify(option);
//         sessionStorage.setItem('searchHistory',option);
//      }else{
//         searchHistory = JSON.parse(searchHistory);
//         let newSearchHistory = [];
//         searchHistory.forEach(item=>{
//             newSearchHistory.push({
//                 FromStation:item.FromStation,
//                 ToStation:item.ToStation
//             });
//         });
//         let option = {FromStation:data.FromStation,ToStation:data.ToStation};
//         //数组去重
//         newSearchHistory.push(option);
//         newSearchHistory = JSON.stringify(newSearchHistory);
//         sessionStorage.setItem('searchHistory',newSearchHistory);
//      }
// }

// export function getHistory(){
//      let setHistory = JSON.parse(sessionStorage.getItem('searchHistory'));
//      setHistory = new Set(setHistory);
//      return setHistory;
// }

export function setHistory(data){
    // if(!data){return;}
    //首页最近搜索
   let searchHistory = sessionStorage.getItem('searchHistory');

    if(searchHistory===null || 0){//第一次
        console.log('a')
        let option = [
            {FromStation:data.FromStation,ToStation:data.ToStation}
        ]
        option = JSON.stringify(option);
        sessionStorage.setItem('searchHistory',option);
    }else{//后续
        console.log('b')
        searchHistory = JSON.parse(searchHistory);
        let newSearchHistory = [];
        searchHistory.forEach(item => {
            newSearchHistory.unshift({
                FromStation:item.FromStation,
                ToStation:item.ToStation
            });
        });

        let option = {FromStation:data.FromStation,ToStation:data.ToStation};
        newSearchHistory.unshift(option);

        newSearchHistory = JSON.stringify(newSearchHistory);
        sessionStorage.setItem('searchHistory',newSearchHistory);
        console.log(newSearchHistory)
   }

}

export function getHistory(){
    let setHistory = JSON.parse(sessionStorage.getItem('searchHistory'));
    // console.log(setHistory)
    //json对象转数组
     let newSetHistory = [];
     if(setHistory!==null){
     for(let i=0;i<setHistory.length;i++){
         newSetHistory[i] = setHistory[i];
     }
    newSetHistory=unique(setHistory);
    // newSetHistory=setHistory.unique();
    newSetHistory.forEach(i=>{
        if(newSetHistory.length>3){
            newSetHistory.pop();
        }
    })
  }
  // newSetHistory = newSetHistory.reverse();
    return newSetHistory;
}



//数组去重
export function unique(arr){
  if(arr!==null){
    let newArr = [arr[0]];
    for(let i = 1; i < arr.length; i++){
        let Item = arr[i];
        let repeat = false;
        for (let j = 0; j < newArr.length; j++) {
          if (Item.FromStation == newArr[j].FromStation && Item.ToStation == newArr[j].ToStation) {
                 repeat = true;
                 break;
          }
     }
              if (!repeat) {
                  newArr.push(Item);
              }
    }

    return newArr;
}}