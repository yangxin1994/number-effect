import isPrime from '../util/isPrime';
import rederColor from '../util/rederColor';
import {transformX,transformY} from '../util/rederColor'
export default function(number){
    const container = document.querySelector('#divContainer');
    const center = document.querySelector('#divCenter');
    const spanNumber = document.createElement('span');
    const newCenter = document.createElement('div');
    newCenter.className = 'center'
    const body = document.querySelector('body')
    spanNumber.innerText = number;
    center.innerText = number;
    newCenter.innerText = number;
    let color = rederColor()
    if(isPrime(number)){
        spanNumber.style.color = color;
        newCenter.style.color = color;
    }
    container.appendChild(spanNumber);
    body.appendChild(newCenter);
    getComputedStyle(center).left;
    newCenter.style.transform = `translate(${transformX()}px,${transformY()}px)`;
    newCenter.style.opacity = 0;
}