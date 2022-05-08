export default function(row, array, textarea){
    for (let i = 0; i < array.length; ++i){
        const elem = document.createElement("div");
        elem.classList.add(array[i].class_name);
        elem.textContent = array[i].static_text ? array[i].static_text : array[i].en;
        elem.id = array[i].code;
        elem.onclick = (e) => {
            console.log(elem.id);
            switch (elem.id) {
                case 'Backspace':
                    break;
                default: localStorage.language == 'en' ? 
                textarea.value += array[i].en : 
                textarea.value += array[i].ru;
            }
        }
        row.appendChild(elem);
    }
}