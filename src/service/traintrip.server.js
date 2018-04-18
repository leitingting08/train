import PublicFn from '@/service/public.service';
import { trainQueryUrl } from '@/service/interface';

let PublicMethod = new PublicFn();

class TraintripServer{

	sendTripListServer(opt){//车票查询
        PublicMethod.axiosServer(trainQueryUrl,opt.data,opt.onSuccess,opt.onFalied);
    }
}

export default TraintripServer;