const color = ["#f26395", "#62efab", "#ef7658", "#ffe868", "#80e3f7", "#d781f9"];
const min = 0, max = color.length;
export let transformY = () => Math.floor(Math.random() * (250 + 150)  -150);
export let transformX = () => Math.floor(Math.random() * (250 + 350)  -350);
export default function () {
    const random = Math.floor(Math.random() * (6 - 1) + 1);
    return color[random]
}
