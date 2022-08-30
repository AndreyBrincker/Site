function calcular(event){
    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value;

    let gasolinaInput = document.getElementById("gasolina").value;

    let resultadosoma = document.getElementById("resultadosoma");

    /*
    Calcular: Alcool / Gasolina
    E se o resultado for menor que 0.7 compensa usar alcoll
    */

    let calculo =   (alcoolInput / gasolinaInput);


    if(calculo < 0.7){
        // Aqui compensa usar alcool
        alert("Compensa usar alcool")
    }else{
        alert("Compensa usar gasolina")
        // Aqui compensa usar gasolina
    }

    resultadosoma.classList.remove("hide")

}