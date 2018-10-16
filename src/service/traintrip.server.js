import PublicFn from './public.service';

let PublicMethod = new PublicFn();

class TraintripServer{

	sendStationListServer(opt){//车站列表
		const data = PublicMethod.setData(opt)
        const url = PublicMethod.getUrl('/stations')
        PublicMethod.postServer({url, data , onSuccess:opt.onSuccess, onFailed:opt.onFalied})
    }

	sendTripListServer(opt){//车票查询
		const data = PublicMethod.setData(opt)
        const url = PublicMethod.getUrl('/query')
        PublicMethod.postServer({url, data , onSuccess:opt.onSuccess, onFailed:opt.onFalied})
    }

    sendTrainBookUrlServer(opt){//车票查询
		const data = PublicMethod.setData(opt)
        const url = PublicMethod.getUrl('/book')
        PublicMethod.postServer({url, data , onSuccess:opt.onSuccess, onFailed:opt.onFalied})
    }

}

export default TraintripServer;
