export function setHistory(data) {
    //首页最近搜索
    let searchHistory = sessionStorage.getItem('searchHistory');

    if (searchHistory === null || 0) {//第一次
        let option = [
            { FromStation: data.FromStation, ToStation: data.ToStation }
        ]
        option = JSON.stringify(option);
        sessionStorage.setItem('searchHistory', option);
    } else {//后续
        searchHistory = JSON.parse(searchHistory);
        let newSearchHistory = [];
        searchHistory.forEach(item => {
            newSearchHistory.unshift({
                FromStation: item.FromStation,
                ToStation: item.ToStation
            });
        });

        let option = { FromStation: data.FromStation, ToStation: data.ToStation };
        newSearchHistory.unshift(option);

        newSearchHistory = JSON.stringify(newSearchHistory);
        sessionStorage.setItem('searchHistory', newSearchHistory);
        console.log(newSearchHistory)
    }

}

export function getHistory() {
    let setHistory = JSON.parse(sessionStorage.getItem('searchHistory'));
    //json对象转数组
    let newSetHistory = [];
    if (setHistory !== null) {
        for (let i = 0; i < setHistory.length; i++) {
            newSetHistory[i] = setHistory[i];
        }
        newSetHistory=unique(setHistory);
        newSetHistory.forEach(i => {
            if (newSetHistory.length > 3) {
                newSetHistory.pop();
            }
        })
    }
    return newSetHistory;
}

export function clearHistory() {
    sessionStorage.removeItem('searchHistory');
    let newSetHistory = []
    return newSetHistory;
}



//数组去重
export function unique(arr) {
    if (arr !== null) {
        let newArr = [arr[0]];
        for (let i = 1; i < arr.length; i++) {
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
    }
}