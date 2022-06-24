function choose() {
    const mk = document.getElementById('menumk')
    mk.innerText = 'CHOOSE YOUR DESTINY...'
    mk.style.fontFamily = 'MK'
    mk.style.fontWeight = '500'
}

let hoje = new Date()
let ultimoVideo = new Date("05/11/2022") // inserir aqui data do ultimo brigas postado, formato: mes-dia-ano
const diasSemVideo = (hoje - ultimoVideo) / 86400000 //milissegundos dia
let contadorBrigas = document.getElementById('contador-brigas-narradas')
contadorBrigas.innerHTML = `ATENÇÃO! Estamos há ${parseInt(diasSemVideo)} dias sem brigas censuradas...`

