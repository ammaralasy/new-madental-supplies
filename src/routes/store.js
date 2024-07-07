// @ts-nocheck
import { readable} from 'svelte/store';
import { onMount } from 'svelte';
import { browser } from '$app/environment';
// Create a readable store that exposes the shared function
export const scrollingStore = readable(null, (set) => {
    set(scrollingFunc);
  });
  let scrollingFunc;
let contactScroll , homeScroll, aboutScroll, brandScroll, writeScroll ;
// @ts-ignore
if (browser) {
  let  width = window.innerWidth;
contactScroll = document.getElementById('contact');
homeScroll = document.getElementById('home');
aboutScroll = document.getElementById('about');
brandScroll = document.getElementById('brand');
writeScroll = document.getElementById('write-to-us')

let scrollingArray = [
    { id: 'home', view: homeScroll },
    { id: 'about', view: aboutScroll },
    { id: 'brand', view: brandScroll },
    { id: 'contact', view: contactScroll },
    { id: 'write-to-us', view: writeScroll }
];
if(width <= 641) {
// Define a function that you want to share
 scrollingFunc = (element) => {
  // Implement the function logic here
  const findScroll = scrollingArray.find((obj) => obj.id === element);
			console.log(findScroll['view']);
			findScroll['view'].scrollIntoView( {behavior: 'smooth',
        block: 'start',
        inline: 'nearest'});
  console.log(`Result of scrolling function with args ${element}`);
}
}
}


