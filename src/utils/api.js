import { get, post, del, put } from './http'

export const pageArticle = (urlParams,params) => get('/api/v1/article/page'+ urlParams, params);

export const editeArticle = params => post('/api/v1/article',params);

export const deleteArtcle = (id,params) => del('/api/v1/article/'+id,params);

export const queryArtcleById = (id) => get('/api/v1/article/'+id,{})

export const login = (params) => post('/api/v1/login', params)

export const querySetting = (params) => get('/api/v1/system_setting', params)

export const queryArticle = (id) => get('/api/v1/article/'+id+'/query',{})

export const hot = () => get('/api/v1/article/hot',{})

export const updateSetting = (params) => post('/api/v1/system_setting', params)

export const queryCarouseSettingById = (id) => get('/api/v1/carousel_setting/'+id)

export const listCarouseSetting = (params) => post('/api/v1/carousel_setting/list',params)

export const updateCarouseSetting = (params) => put('/api/v1/carousel_setting',params)

export const uploadImg = () => post('/api/v1/upload', {})

export const deleteCarouseSetting = (id) => del('/api/v1/carousel_setting?id='+id,{})