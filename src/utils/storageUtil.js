export const set = (key ,data, expir) => {
    var expirDate = null;
    if(expir != null && expir !== ''){
        expirDate = new Date().getTime() + expir;
    }
    const datas = {
        data: data,
        expirDate: expirDate
    }
    localStorage.setItem(key, JSON.stringify(datas))
}

export const get = (key) => {
   var datas = localStorage.getItem(key);
   if(datas){
    var jsonObj = JSON.parse(datas);
    var expirDate = jsonObj.expirDate;
    if (expirDate != null && expirDate !== '' && new Date().getTime() > expirDate){
        localStorage.removeItem(key);
        return null;
    } else {
        return jsonObj.data;
    }
   }
}


export const remove = (key) => {
    localStorage.removeItem(key);
 }