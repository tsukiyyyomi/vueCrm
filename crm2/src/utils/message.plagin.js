import M from 'materialize-css';

export default{
    install(Vue){
        Vue.prototype.$message = function(text){
            M.toast({html: text});
        }

        Vue.prototype.$error = function(html){
            M.toast({html:`[Error]: ${html}`});
        }
    }
}