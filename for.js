var compuSelect = {
    "សាខា : សន្ធរម៉ុក" :{
        "001":[],"002":[],"003":[],"004":[],"005":[],"006":[],
        "007":[],"008":[],"009":[],"010":[],"011":[],"012":[],
        "013":[],"014":[],"015":[],"016":[],"017":[],"018":[],
    },
    "សាខា : ម៉ៅសេទុង" :{
        "A01":[],"B01":[],"B02":[],"B03":[],"B04":[],"C01":[],
        "C02":[],"C03":[],"C04":[],"C05":[],"D01":[],"D02":[],
        "D03":[],"D04":[],"E01":[],"E02":[],"E03":[],"E04":[],
    },
    "សាខា​ : ២៧១" :{
        "001":[],"002":[],"003":[],"004":[],"005":[],"006":[],
        "007":[],"008":[],
    },
    "ថ្នាក់ : អនឡាញ" :{
        "None":[],
    },
}
var languageSelectinfo = {
    បារាំង:{
        A1:["A1-1", "A1-2", "A1-3","A1-4","A1-5" , "A1-6"],
        A2:["A2-1", "A2-2", "A2-3","A2-4","A2-5" , "A2-6"],
        B1:["B1-1", "B1-2", "B1-3","B1-4","B1-5" , "B1-6"],
        B2:["B2-1", "B2-2", "B2-3","B2-4","B2-5" , "B2-6"],
    },
    អង់គ្លេស:{
        Beginner:["BGN1", "BGN2", "BGN3"],
        Elementary:["ELE1", "ELE2", "ELE3"],
        "Pre-Intermediate":["PRE-INTER1", "PRE-INTER2", "PRE-INTER3"],
        Intermediate:["INTER1", "INTER2", "INTER3"],
        "Upper-Intermediate":["UPPER1", "UPPER2", "UPPER3"],
    },
    ចិន:{
        "Easy Steps to chinese 1":["GCP1","GCP2","GCP3"],
        "Easy Steps to chinese 2":["GCP4","GCP5","GCP6"],
        "Easy Steps to chinese 3":["GCP7","GCP8","GCP9"],
        "Easy Steps to chinese 4":["GCP10","GCP11","GCP12"],
        "Easy Steps to chinese 5":["GCP13","GCP14","GCP15"],
    }
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

    const selectLanguage = document.getElementById('Language');
    const selectLevel = document.getElementById('Lavel');
    const selectTerm = document.getElementById('Term');
    const select = document.querySelectorAll('select');
 
    selectLevel.disabled = true;
    selectTerm.disabled = true;

    select.forEach(select => {
        if(select.disabled == true){
            select.style.cursor = "auto"
        }
    })
    for(let language in languageSelectinfo){
        console.log(language);
        selectLanguage.options[selectLanguage.options.length] = new Option(language, language)
    }
    selectLanguage.onchange = (e) => {
        selectLevel.disabled = false
        selectTerm.disabled = true

        selectLevel.length = 1
        selectTerm.length = 1
        
        for(let level in languageSelectinfo[e.target.value]){
            console.log(level);
            selectLevel.options[selectLevel.options.length] = new Option(level, level)
        }
    }
    selectLevel.onchange = (e) => {
        selectTerm.disabled = false

        selectTerm.length = 1

        let term = languageSelectinfo[selectLanguage.value][e.target.value]

        for(let i=0; i<term.length; i++){
            selectTerm.options[selectTerm.options.length] = new Option(term[i], term[i])
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
    var text_language = document.querySelector("#Language").value
    var text_term = document.querySelector("#Term").value
    var text_student = document.querySelector("#Student").value
    var text_newname = document.querySelector("#Newname").value
    var text_page = document.querySelector("#Page").value
    var text_dossier = document.querySelector("#Dossier").value
    var text_documents = document.querySelector("#Document").value
    var text_act = document.querySelector("#Act").value
    var text_remark = document.querySelector("#Remark").value
    var text_reason = document.querySelector("#Reason").value

    var my_text = `- ${compu}
    %0A- ចាប់ពី ${from_date} ដល់ ${to_date}
    %0A- ឈ្មោះគ្រូបង្រៀន : ${text_name}
    %0A- ម៉ោងបង្រៀន : ${text_time}
    %0A- បន្ទប់ : ${text_room}
    %0A- ថ្នាក់ភាសា : ${text_language}
    %0A- វគ្គសិក្សា : ${text_term}
    %0A
    %0A- ចំនួនសិស្ស : ${text_student}
    %0A- ឈ្មោះគ្រូជំនួស : ${text_newname}
    %0A- ទំព័រ : ${text_page}
    %0A- ជំពូក : ${text_dossier}
    %0A- មេរៀន : ${text_documents}
    %0A- ចំណុច : ${text_act}
    %0A
    %0A- ចំណាំ : ${text_remark}
    %0A
    %0A- មូលហេតុ : ${text_reason}`

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
const txt12 = document.getElementById('Remark');
const txt13 = document.getElementById('Reason');
const txt14 = document.getElementById('Language');
const txt17 = document.getElementById('Term');

const btn1 = document.getElementById('MySubmit');
const out1 = document.getElementById('output1');

function fun1(){
    out1.innerText = `
    - ${txt1.value}
    - ចាប់ពី ${txt15.value} ដល់ ${txt2.value} 
    - ឈ្មោះគ្រូបង្រៀន : ${txt3.value}
    - ម៉ោងបង្រៀន : ${txt4.value}
    - បន្ទប់ : ${txt5.value}
    - ថ្នាក់ភាសា : ${txt14.value}
    - វគ្គសិក្សា : ${txt17.value}

    - ចំនួនសិស្ស : ${txt6.value}
    - ឈ្មោះគ្រូជំនួស : ${txt7.value}
    - ទំព័រ : ${txt8.value}
    - ជំពូក : ${txt9.value}
    - មេរៀន : ${txt16.value}
    - ចំណុច : ${txt11.value}

    - ចំណាំ : ${txt12.value}

    - មូលហេតុ : ${txt13.value}`
}
btn1.addEventListener('click',fun1);

function hidebtn(){
    const hidebtn = document.querySelector('.btn')
    hidebtn.style.display = 'none';
    const showTextbtn = document.querySelector('.pp')
    showTextbtn.style.display = 'block';
    const hideform = document.querySelector('.forhide')
    hideform.style.display = 'none';
}
