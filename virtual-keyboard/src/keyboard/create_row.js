export default function(row, array){
    for (let i = 0; i < array.length; ++i){
        const elem = document.createElement("div");
        elem.classList.add(array[i].class_name);
        elem.textContent = array[i].static_text ? array[i].static_text : array[i].en;
        row.appendChild(elem);
    }
}