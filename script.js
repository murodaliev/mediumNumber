alert("O'rta qiymatdagi sonni topish");
var a = +prompt("1-sonni kiriting");
var b = +prompt("2-sonni kiriting");
var c = +prompt("3-sonni kiriting");
if(a > b && a < c || a > c && a < b){
    alert("siz kiritgan sonlarning o'rta qiymati " + a);
} else if(b > a && b < c || b < a && b > c){
    alert("siz kiritgan sonlarning o'rta qiymati " + b);
} else if(c > a && c < b || c < a && c > b){
    alert("siz kiritgan sonlarning o'rta qiymati " + c);
} else if(a == b || b == c || c == a){
    alert("siz kiritgan sonlarning orasida qaysidur 2 tasi yoki barchasi o'zaro tenglikka ega");
} else {
    alert("qiymat berishda xatolik , menimcha siz qandaydur qiymatni sonda emas harfda yoki qandaydur belgida yozgansiz. Marhamat tekshirib ko'ring-> " + a + " " + b + " " + c);
}
