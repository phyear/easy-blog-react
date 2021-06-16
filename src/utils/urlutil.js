
export const handlerUrl = (domain, url) => {
    var str=new RegExp("http");
    if(str.test(url)){
       return url;
    } else {
        return domain + url;
    }
}