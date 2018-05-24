import PublicFn from '@/service/public.service';
import { trainQueryUrl } from '@/service/interface.service';

let PublicMethod = new PublicFn();

class TraintripServer{

	sendTripListServer(opt){//车票查询
		const data = PublicMethod.setData(opt);
        PublicMethod.getServer(trainQueryUrl, data ,opt.onSuccess,opt.onFalied);
    }
}

export default TraintripServer;