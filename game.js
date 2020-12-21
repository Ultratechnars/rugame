let words = [
    ["стекля", "нн", "ый"],
    ["костя", "н", "ой"],
    ["под", "ь", "ячий"],
    ["сверх", "и", "нтересный"],
    ["раз", "ы", "грать"],
    ["не", "/", "навидеть"],
    ["не", " ", "любить"],
    ["под", "ъ", "езд"],
    ["желто", "-", "зеленый"],
    ["сам", "о", "лет"],
    ["францу", "зс", "кий"],
    ["неме", "ц", "кий"],
    ["ру", "сс", "кий"],
    ["со", "лн", "це"],
    ["инт", "е", "ллегент"]
];
let tru = 0;
let fal=0;
let n = 15;
let primer = document.getElementById('primer');
let histor = document.getElementById('histor');
let temp;
function choice(){
    let i = Math.round(Math.random() * (words.length - 1));
    return words.slice(i, i);
}
function newtask() {
    --n;
    temp = choice();
    primer.innerHTML = temp[0] + "<input type='text' id='suvk'>" + temp[2]; /*input*/
    document.getElementById("suvk").focus();
    document.getElementById('suvk').onchange = nexttask;
}
function nexttask() {
    var inp = document.getElementById('suvk');
    var result;
    if( inp.value == temp[1]){
        result = ". Верно." ;
        tru=tru+1
    }
    else{
        result= ". Неверно, правильный ответ " + temp[0] + temp[1] + temp[2];
        fal=fal+1
    }
    histor.innerHTML = temp[0] + temp[1] + temp[2] + "\n" + histor.innerHTML;
    if(n > 0){
        newtask();
    }
    else{
        sessionStorage.setItem("corr", tru);
        sessionStorage.setItem("incorr", fal);
        window.location.replace("results.html");
    }
    document.getElementById("suvk").focus();
    document.getElementById("vernie");
    vernie.innerHTML = tru;
    document.getElementById("nevern");
    nevern.innerHTML = fal;
    document.getElementById("left");
    left.innerHTML = n;
}
newtask();