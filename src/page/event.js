import getNumber from '../util/getNumber';
import rederPage from  '../page/rederPage'
const n = new getNumber();
n.callback = function(number,isPrime){
    rederPage(number)
}
n.start()
let start = true;
export default window.onclick = function(){
    if(start){
        n.stop();
        start = false;
    }else{
        n.start()
        start = true;
    }
}