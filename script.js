$(function(){
    let jateksokSzama
    let jatekosNevek = []
    $("#jatekosok-szama-ok").on("click",()=>{
        $("#jatekos-nevek-input").css("display", "block")
        jateksokSzama = $("#jatekosok-szama").val()
        $("#kov-jatekos-nev").on("click",()=>{
            jatekosNevek.push($("#jatekos-nev").val())
            $("#jatekos-nev").val("")
            if(jatekosNevek.length == jateksokSzama){
                $("#jatekos-nevek-input").css("display", "none")
                $("#kezdo-infok").css("display", "none")
                tablazatLetrehozas()
            }
        })
    })
    function tablazatLetrehozas(){
        for (let i = 0; i < jateksokSzama; i++) {
            $("#tablazat thead tr").append("<th>"+jatekosNevek[i]+"</th>")
        }
        let korokSzama = Math.floor(52/jateksokSzama)
        console.log(korokSzama) 
        let x
        for (let i = 0; i < korokSzama; i++) {
            $("#tablazat tbody").append("<tr><td>"+(i+1)+"</td></tr>")
            for (let k = 0; k < jateksokSzama; k++) {
                $("#tablazat tbody tr").eq(i).append("<td><div class = 'mezo'><div><label>Tipp</label><input type='text'></div><div><label>Ütés</label><input type='text'></div></div><div><label>Pontszám</label><input type='text'></div></td>")
            }
            x = i+1
        }
        for (let i = korokSzama-1; i >= 0; i--) {
            $("#tablazat tbody").append("<tr><td>"+(i+1)+"</td></tr>")
            for (let k = 0; k < jateksokSzama; k++) {
                $("#tablazat tbody tr").eq(x).append("<td><div class = 'mezo'><div><label>Tipp</label><input type='text'></div><div><label>Ütés</label><input type='text'></div></div><div><label>Pontszám</label><input type='text'></div></td>")
            }
            x++
        }
    }
})