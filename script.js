
const apiVaktija = 'https://api.vaktija.ba/';
const gradVaktija = 'vaktija/v1/';


function vaktija(city){
    var xhr = new XMLHttpRequest();

    let url = apiVaktija + gradVaktija + city;

xhr.open('GET',url);
    xhr.onreadystatechange = function(){
        if(this.readyState === 4){
            let response = JSON.parse(this.response); 
                console.log(response);
            document.getElementById('Zora').innerHTML ='Zora: ' + response.vakat[0];
            document.getElementById('izlazak').innerHTML ='Izlazak: ' + response.vakat[1];
            document.getElementById('podne').innerHTML ='Podne: ' + response.vakat[2];
            document.getElementById('ikindija').innerHTML ='Ikindija: ' + response.vakat[3];
            document.getElementById('aksam').innerHTML ='Aksam: ' + response.vakat[4];
            document.getElementById('jacija').innerHTML ='Jacija: ' + response.vakat[5];
            document.getElementById('datum').innerHTML ='Hidžretska godina: ' +response.datum[0]
            document.getElementById('godina').innerHTML ='Kalendarska godina: ' + response.datum[1];
            document.getElementById('city').innerHTML = response.lokacija;
        }
    }
    xhr.send();
}

document.getElementById('btn').addEventListener('click', function(){
    var array = ["Banovići","Banja Luka","Bihać","Bijeljina","Bileća","Bosanski Brod","Bosanska Dubica","Bosanska Gradiška","Bosansko Grahovo","Bosanska Krupa","Bosanski Novi","Bosanski Petrovac","Bosanski Šamac","Bratunac","Brčko","Breza","Bugojno","Busovača","Bužim","Cazin","Čajniče","Čapljina","Čelić","Čelinac","Čitluk","Derventa","Doboj","Donji Vakuf","Drvar","Foča","Fojnica","Gacko","Glamoč","Goražde","Gornji Vakuf","Gračanica","Gradačac","Grude","Hadžići","Han-Pijesak","Hlivno","Ilijaš","Jablanica","Jajce","Kakanj","Kalesija","Kalinovik","Kiseljak","Kladanj","Ključ","Konjic","Kotor-Varoš","Kreševo","Kupres","Laktaši","Lopare","Lukavac","Ljubinje","Ljubuški","Maglaj","Modriča","Mostar","Mrkonjić-Grad","Neum","Nevesinje","Novi Travnik","Odžak","Olovo","Orašje","Pale","Posušje","Prijedor","Prnjavor","Prozor","Rogatica","Rudo","Sanski Most","Sarajevo","Skender-Vakuf","Sokolac","Srbac","Srebrenica","Srebrenik","Stolac","Šekovići","Šipovo","Široki Brijeg","Teslić","Tešanj","Tomislav-Grad","Travnik","Trebinje","Trnovo","Tuzla","Ugljevik","Vareš","Velika Kladuša","Visoko","Višegrad","Vitez","Vlasenica","Zavidovići","Zenica","Zvornik","Žepa","Žepče","Živinice","Bijelo Polje","Gusinje","Nova Varoš","Novi Pazar","Plav","Pljevlja","Priboj","Prijepolje","Rožaje","Sjenica","Tutin"]
    var grad = document.getElementById('unos').value;
    console.log(grad);
    for(i=0; i<array.length; i++){
        if(grad.toLowerCase() === array[i].toLowerCase()){
            vaktija(i);
         }
     }
});

