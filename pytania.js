const interaktywnePytaniaIOdpowiedzi = document.getElementById('interaktywnePytaniaIOdpowiedzi')

let odppyt = document.getElementById('odppyt')



function wyslij() {
    let wartoscInputa = document.getElementById('zadaj').value
    const newPytanie = document.createElement('p')
    newPytanie.setAttribute('class', 'pytanie')
    const newOdpowiedz = document.createElement('p')
    newOdpowiedz.innerText = "O: Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, adipisci quas nobis error nulla obcaecati ratione aspernatur inventore officiis nostrum expedita perspiciatis molestiae dolorem delectus vero rem ipsam unde quam."
    newOdpowiedz.setAttribute('class', 'odpowiedz')
    newPytanie.innerText = "P: " + wartoscInputa
    odppyt.appendChild(newPytanie)
    odppyt.appendChild(newOdpowiedz)
    window.scrollTo(0,document.body.scrollHeight)
}