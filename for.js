var compuSelect = {
    "សាខា : សន្ធរម៉ុក" :{
        "001":[],"002":[],"003":[],"004":[],"005":[],"006":[],
        "007":[],"008":[],"009":[],"010":[],"011":[],"012":[],
        "013":[],"014":[],"015":[],"016":[],"017":[],"018":[],
    },
    "សាខា : ម៉ៅសេទុង" :{
        "A01":[],"B01":[],"B02":[],"B03":[],"B04":[],"C01":[],
        "C02":[],"C03":[],"C04":[],"C05":[],"D01":[],"D02":[],
        "D03":[],"D04":[],
    },
    "សាខា​ : ២៧១" :{
        "001":[],"002":[],"003":[],"004":[],"005":[],"006":[],
        "007":[],"008":[],
    },
    "ថ្នាក់ : អនឡាញ" :{
        "None":[],
    },
}

window.onload = function(){
    
    const selectCompu = document.getElementById('Compu');
    const selectRoom = document.getElementById('Room');

    selectRoom.disabled = true;
    
    for(let Compu in compuSelect){
        console.log(Compu);
        selectCompu.options[selectCompu.options.length] = new Option(Compu, Compu)
    }
    selectCompu.onchange = (e) => {
        selectRoom.disabled = false

        selectRoom.length = 1 

        for(let Room in compuSelect[e.currentTarget.value]){
            console.log(Room);
            selectRoom.options[selectRoom.options.length] = new Option(Room, Room)
        }
    }
}

const form = document.querySelector('#Form')

form.addEventListener("submit", (e) =>{ e.preventDefault()

    var compu = document.querySelector("#Compu").value;
    var from_date = document.querySelector("#From").value
    from_date = from_date.split("-").reverse().join("-");
    var to_date = document.querySelector("#To").value
    to_date = to_date.split("-").reverse().join("-");
    var text_name = document.querySelector("#Name").value
    var text_time = document.querySelector("#Time").value
    var text_room = document.querySelector("#Room").value
    var text_student = document.querySelector("#Student").value
    var text_newname = document.querySelector("#Newname").value
    var text_page = document.querySelector("#Page").value
    var text_dossier = document.querySelector("#Dossier").value
    var text_documents = document.querySelector("#Document").value
    var text_act = document.querySelector("#Act").value

    var my_text = `- ${compu}
    %0A- ចាប់ពី ${from_date} ដល់ ${to_date}
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

const txt1 =document.getElementById('Compu')
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
    - ${txt1.value}
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
