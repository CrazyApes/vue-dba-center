const red = {
    cut(target) {
        let temp = {};
        for (let key in target) {
            if (target.hasOwnProperty(key)) {
                let element = target[key];
                if (element.toString() != '') {
                    temp[key] = element;
                }
            }
        }
        return temp;
    },
    setEmp(emp){
        window.localStorage.setItem('emp',JSON.stringify(emp));
    },
    getEmp(){
       return JSON.parse(window.localStorage.getItem('emp'));
    },
    status:[true,false],
    ajax(vue,action,url,param,callback){
        let options={emulateJSON:true};
        if(this.getEmp()){
            options.headers={
                Authorization:this.getEmp().token
            }
        }
        switch (action) {
            case 'get':
                vue.$http.get(url,{params:param,...options}).then(response=>{
                    callback(this.status[0],response.body);
                },response=>{
                    callback(this.status[1],response.body);
                })
                break;
            case 'post':
                vue.$http.post(url,param,options).then(response=>{
                    callback(this.status[0],response.body);
                },response=>{
                    callback(this.status[1],response.body);
                })
                break;
            case 'put':
                vue.$http.put(url,param,options).then(response=>{
                    callback(this.status[0],response.body);
                },response=>{
                    callback(this.status[1],response.body);
                })
                break;
            case 'delete':
                vue.$http.delete(url,options).then(response=>{
                    callback(this.status[0],response.body);
                },response=>{
                    callback(this.status[1],response.body);
                })
                break;
        }
    }
}

red.install = (Vue) => {
    Vue.prototype.$red = red;
};

export default red;



















