import { manipulate } from "../index.js";
import { allKeys } from "../index.js";

export default function (row, array, textarea) {
    for (let i = 0; i < array.length; ++i) {
        const elem = document.createElement("div");
        elem.classList.add(array[i].class_name);
        elem.textContent = array[i].static_text ? array[i].static_text : array[i].en; //вот тут не понял? (кажется понял)
        elem.id = array[i].code;
        elem.onclick = function (e) {
            let start = textarea.selectionStart;
            let end = textarea.selectionEnd;
            switch (elem.id) {
                case 'Backspace':
                    textarea.setRangeText('', start - 1, end, 'end');
                    break;
                case 'Tab':
                    textarea.setRangeText('\t', start, end, 'end');
                    break;
                case 'Delete':
                    textarea.setRangeText('', start, end + 1, 'end');
                    break;
                case 'CapsLock':
                    console.log(localStorage.caps)
                    localStorage.caps === 'true' ? localStorage.caps = 'false' : localStorage.caps = 'true';
                    for (let i = 0; i < 4; ++i) {
                        for (let j = 0; j < manipulate[i].length; ++j) {
                            if (/[\w]/.test(manipulate[i][j].textContent) && manipulate[i][j].classList.contains('primary')) {
                                localStorage.caps === 'true' ? manipulate[i][j].textContent = manipulate[i][j].textContent.toUpperCase() :
                                    manipulate[i][j].textContent = manipulate[i][j].textContent.toLowerCase();
                            }
                        }
                    }

                    break;
                case 'Enter':
                    textarea.setRangeText('\n', start, end, 'end');
                    break;
                case 'ShiftLeft':
                    //меняет регистр кнопок (не только букв)
                    localStorage.shift === 'true' ? localStorage.shift = 'false' : localStorage.shift = 'true';
                    for (let i = 0; i < 4; ++i) {
                        for (let j = 0; j < manipulate[i].length; ++j) {
                            if (manipulate[i][j].classList.contains('primary')) {
                                if (localStorage.shift === 'true') {
                                    if (i === 0 & j === 0){
                                        //manipulate[i][j].textContent = allKeys[i][j].shift;
                                        if (localStorage.language === 'ru'){
                                            manipulate[i][j].textContent = allKeys[i][j].ru.toUpperCase();
                                        } else {
                                            manipulate[i][j].textContent = allKeys[i][j].shift;
                                        }
                                        continue;
                                    } 
                                    let input = ''
                                    if (localStorage.language === 'en'){
                                        input = allKeys[i][j].en;
                                    } else{
                                        input = allKeys[i][j].ru;
                                    }
                                    if (allKeys[i][j].shift !== ""){
                                        input = allKeys[i][j].shift;
                                    }
                                    input = input.toUpperCase();
                                    manipulate[i][j].textContent = input;
                                } else {   
                                    if (i === 0 & j === 0){
                                        if (localStorage.language === 'ru'){
                                            manipulate[i][j].textContent = allKeys[i][j].ru.toLowerCase();
                                        } else {
                                            manipulate[i][j].textContent = allKeys[i][j].en;
                                        }
                                        continue;
                                    }
                                    let input = '';
                                    if (allKeys[i][j].static_text !== ''){
                                        input = allKeys[i][j].static_text;
                                    } else {
                                        if (localStorage.language === 'en'){
                                            input = allKeys[i][j].en;
                                        } else {
                                            input = allKeys[i][j].ru;
                                        }
                                    }
                                    
                                    manipulate[i][j].textContent = input;
                                }
                            }
                        }
                    }
                    break;
                case 'ArrowUp':
                    textarea.setRangeText(array[i].static_text, start, end, 'end');
                    break;
                case 'ShiftRight':
                    //меняет регистр кнопок (не только букв)
                    localStorage.shift = !JSON.parse(localStorage.shift);
                    break;
                case 'ControlLeft':
                    break;
                case 'MetaLeft':
                    break;
                case 'AltLeft':
                    break;
                case 'Space':
                    textarea.setRangeText(' ', start, end, 'end');
                    break;
                case 'AltRight':
                    break;
                case 'ArrowLeft':
                    textarea.setRangeText(array[i].static_text, start, end, 'end');
                    break;
                case 'ArrowDown':
                    textarea.setRangeText(array[i].static_text, start, end, 'end');
                    break;
                case 'ArrowRight':
                    textarea.setRangeText(array[i].static_text, start, end, 'end');
                    break;
                case 'ControlRight':
                    break;
                default:
                    let insert = '';
                    if (array[i].static_text) {
                        insert = array[i].static_text;
                    } else {
                        localStorage.language === 'en' ? insert = array[i].en : insert = array[i].ru;
                    }
                    if (localStorage.caps === 'true' || localStorage.shift === 'true') {
                        insert = insert.toUpperCase();
                    }
                    textarea.setRangeText(insert, start, end, 'end');
                    break;
            }
        }
        row.appendChild(elem);
    }
}