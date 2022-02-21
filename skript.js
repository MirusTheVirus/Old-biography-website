var n=localStorage.length;
var j=sessionStorage.length;
function unesilocal(){
    var x=true;
    var y=true;
    var z=true;
    var w=true;
    if (document.getElementById('ime').value===""){
        x=false;
        document.getElementById('prvi').innerText="nije uneseno korisnicko ime";
    }
    else{
        document.getElementById('prvi').innerText="";
    }
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById('mail').value))){
        y=false;
        document.getElementById('cetvrti').innerText="nije dobro unesen e-mail";
    }
    else{
        document.getElementById('cetvrti').innerText="";
    }

    if (document.getElementById('loz').value===""){
        z=false;
        document.getElementById('drugi').innerText="nije unesena lozinka";
    }
    else{
        document.getElementById('drugi').innerText="";
    }
    if (!(document.getElementById('loz').value===document.getElementById('potloz').value)){
        w=false;
        document.getElementById('treci').innerText="lozinke se ne podudaraju";
    }
    else{
        document.getElementById('treci').innerText="";
    }

    if (x && y && z && w){
        var d=new Date();
        var k = document.getElementById('mail').value+"|"+ d;
        localStorage.setItem(n,k);
        n++;
    }
}
var i;
function citajlocal(){
    var p=`<table>`;
    for (i = 0; i < n; i++){
        p+=`<tr class="inf">`;
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        var s=value.split('|')
        p+=`<td class="inf">${s[0]}</td><td class="inf">${s[1]}</td>`;
        p+=`</tr>`;
    }
    p+=`</table>`
    document.getElementById('ls').innerHTML = p;
}
function brisi(){
    localStorage.clear();
}
var traka=1;
function napred(){
    traka+=1;
    if (traka>5){
        traka=1;
    }
    document.getElementById('plejer').src="audio/"+traka.toString()+".mp3"
    document.getElementById('plejer').play()
}
function nazad(){
    traka-=1;
    if (traka<1){
        traka=5;
    }
    document.getElementById('plejer').src="audio/"+traka.toString()+".mp3"
    document.getElementById('plejer').play()
}