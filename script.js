let cliques = 0;
let inicio = 0;
let fim = 0;
let tempoTotal = 0;


function adicionarNum() {
    cliques++;

    document.getElementById("num").textContent = cliques;


    if (cliques === 1) {
        inicio = new Date().getTime();
        setInterval(atualizarCronometro, 1000); 
    }

    
    fim = new Date().getTime();
    tempoTotal = (fim - inicio) / 1000; 
    let cps = cliques / tempoTotal;

   
    document.getElementById("media").textContent = "cps: " + cps.toFixed(2);
}


function atualizarCronometro() {
    let d = new Date().getTime();
    let tempoPassado = (d - inicio) / 1000; 
    document.getElementById("cronometro").textContent = "Tempo: " + tempoPassado.toFixed(0) + "s";
}
