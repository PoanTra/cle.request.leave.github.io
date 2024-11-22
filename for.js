const form = document.querySelector('#Form')

form.addEventListener("submit", (e) =>{ e.preventDefault()

    var from_date = document.querySelector("#From").value 
    var to_date = document.querySelector("#To").value
    var text_name = document.querySelector("#Name").value
    var text_time = document.querySelector("#Time").value
    var text_room = document.querySelector("#Room").value
    var text_student = document.querySelector("#Student").value
    var text_newname = document.querySelector("#Newname").value
    var text_page = document.querySelector("#Page").value
    var text_dossier = document.querySelector("#Dossier").value
    var text_documents = document.querySelector("#Document").value
    var text_act = document.querySelector("#Act").value

    var my_text = `- ចាប់ពី ${from_date} ដល់ ${to_date}
    %0A- ឈ្មោះគ្រូបង្រៀន : ${text_name}
    %0A- ម៉ោងបង្រៀន : ${text_time}
    %0A- បន្ទប់ : ${text_room}
    %0A- ចំនួនសិស្ស : ${text_student}
    %0A- ឈ្មោះគ្រូជំនួស : ${text_newname}
    %0A- ទំព័រ : ${text_page}
    %0A- ជំពូក : ${text_dossier}
    %0A- មេរៀន : ${text_documents}
    %0A- ចំណុច : ${text_act}`

    var token = "7919041010:AAEqjFza-NSkZ8oVuZ46xqR6fkJ8HDV-bq0";
    var chat_id = "-4513895867";

    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
})

const txt15 = document.getElementById('From');
const txt2 = document.getElementById('To');
const txt3 = document.getElementById('Name');
const txt4 = document.getElementById('Time');
const txt5 = document.getElementById('Room');
const txt6 = document.getElementById('Student');
const txt7 = document.getElementById('Newname');
const txt8 = document.getElementById('Page');
const txt9 = document.getElementById('Dossier');
const txt16 = document.getElementById('Document');
const txt11 = document.getElementById('Act');

const btn1 = document.getElementById('MySubmit');
const out1 = document.getElementById('output1');

function fun1(){
    out1.innerText = `
    - ចាប់ពី ${txt15.value} ដល់ ${txt2.value} 
    - ឈ្មោះគ្រូបង្រៀន : ${txt3.value}
    - ម៉ោងបង្រៀន : ${txt4.value}
    - បន្ទប់ : ${txt5.value}
    - ចំនួនសិស្ស : ${txt6.value}
    - ឈ្មោះគ្រូជំនួស : ${txt7.value}
    - ទំព័រ : ${txt8.value}
    - ជំពូក : ${txt9.value}
    - មេរៀន : ${txt16.value}
    - ចំណុច : ${txt11.value}`
}
btn1.addEventListener('click',fun1);
