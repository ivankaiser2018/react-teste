

class API {
    constructor(){
        this.baseUrl = " http://52.91.139.190/fsapi";
    }


    login(body){
        let requestName = '/users/login';
        return this.httpRequestPost(this.baseUrl + requestName, body);
    }


    httpRequestPost(endpoint, requestBody) {
        return fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(requestBody)
        });
    }


}


export default API;