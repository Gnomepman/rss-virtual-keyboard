//import "./assets/style.css"
import "./assets/style.scss"
import {default as createRow} from "./keyboard/create_row.js"
import {default as first_row_of_keys} from './keyboard/first_row_of_keys.js'
import {default as second_row_of_keys} from './keyboard/second_row_of_keys.js'
import {default as third_row_of_keys} from './keyboard/third_row_of_keys.js'
import {default as forth_row_of_keys} from './keyboard/forth_row_of_keys.js'
import {default as fifth_row_of_keys} from './keyboard/fifth_row_of_keys.js'

const body = document.querySelector("body");
const wrapper = document.createElement('div');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const first_row = document.createElement('div');
const second_row = document.createElement('div');
const third_row = document.createElement('div');
const forth_row = document.createElement('div');
const fifth_row = document.createElement('div');

wrapper.classList.add('wrapper')
body.appendChild(wrapper);
wrapper.appendChild(textarea);
keyboard.classList.add('keyboard');
wrapper.appendChild(keyboard);

//А надо оно?
first_row.id = 'row_first';
second_row.id = 'row_second';
third_row.id = 'row_third';
forth_row.id = 'row_forth';
fifth_row.id = 'row_fifth';

keyboard.appendChild(first_row);
keyboard.appendChild(second_row);
keyboard.appendChild(third_row);
keyboard.appendChild(forth_row);
keyboard.appendChild(fifth_row);

createRow(first_row, first_row_of_keys);
createRow(second_row, second_row_of_keys);
createRow(third_row, third_row_of_keys);
createRow(forth_row, forth_row_of_keys);
createRow(fifth_row, fifth_row_of_keys);

fifth_row.children[3].classList.add('space');