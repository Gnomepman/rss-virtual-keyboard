import {Key} from "./Key.js"

//14 кнопок
let first_row = [ 
new Key('primary', '`', "", ""),
new Key('primary', '1', "", ""),
new Key('primary', '2', "", ""),
new Key('primary', '3', "", ""),
new Key('primary', '4', "", ""),
new Key('primary', '5', "", ""),
new Key('primary', '6', "", ""),
new Key('primary', '7', "", ""),
new Key('primary', '8', "", ""),
new Key('primary', '9', "", ""),
new Key('primary', '0', "", ""),
new Key('primary', '-', "", ""),
new Key('primary', '=', "", ""),
new Key('secondary', 'BACKSPACE', "", "")
]

export default function(row){
    for (let i = 0; i < first_row.length; ++i){
        const elem = document.createElement("div");
        elem.classList.add(first_row[i].class);
        elem.textContent = first_row[i].static_text;
        row.appendChild(elem);
    }
}