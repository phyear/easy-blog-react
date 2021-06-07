import { get, post, del } from './http'

export const pageArticle = (urlParams,params) => get('v1/article/page'+ urlParams, params);

export const editeArticle = params => post('v1/article',params);

export const deleteArtcle = (id,params) => del('v1/article/'+id,params);

export const queryArtcleById = (id) => get('v1/article/'+id,{})

export const login = (params) => post('v1/login', params)

export const querySetting = (params) => get('v1/system_setting', params)

export const queryArticle = (id) => get('v1/article/'+id+'/query',{})

export const hot = () => get('v1/article/hot',{})

export const updateSetting = (params) => post('v1/system_setting', params)

export const queryCarouseSettingById = (id) => get('v1/carousel_setting'+id)