import jsonp from '@/assets/js/jsonp'
import {commonParams, options} from './config'

export function getRecommend(){
	const url= 'https://acs.m.taobao.com/h5/mtop.trip.activity.querytmsresources.convert/1.0'

	const data = Object.assign({},commonParams,{

	})

	return jsonp(url, data, options)
}