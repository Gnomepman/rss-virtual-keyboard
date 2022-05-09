//import first_row_of_keys from "./first_row_of_keys";

export default function (row, array, textarea) {
    for (let i = 0; i < array.length; ++i) {
        const elem = document.createElement("div");
        elem.classList.add(array[i].class_name);
        elem.textContent = array[i].static_text ? array[i].static_text : array[i].en; //вот тут не понял? (кажется понял)
        elem.id = array[i].code;
        elem.onclick = function (e) {
            //console.log('i was triggerd', e.timeStamp);
            //textarea.focus();
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
                    localStorage.caps = !JSON.parse(localStorage.caps);
                    break;
                case 'Enter':
                    textarea.setRangeText('\n', start, end, 'end');
                    break;
                case 'ShiftLeft':
                    //меняет регистр кнопок (не только букв)
                    break;
                case 'ArrowUp':
                    textarea.setRangeText(array[i].static_text, start, end, 'end');
                    break;
                case 'ShiftRight':
                    //меняет регистр кнопок (не только букв)
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
                        localStorage.language == 'en' ? insert = array[i].en : insert = array[i].ru;
                    }
                    if(localStorage.caps === 'true'){
                        insert = insert.toUpperCase();
                    }
                    textarea.setRangeText(insert, start, end, 'end');
                    break;
            }
        }
        row.appendChild(elem);
    }
}

//onclick вынести в отдельный модуль