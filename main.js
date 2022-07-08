let promedio
let nota =0;
let nombreAgente = prompt("Ingresa el Nombre del Agente");
let notaMonitoreo

for(let i=1;i<=3;i++){

    notaMonitoreo = parseInt(prompt("Ingresa la nota del agente: " + nombreAgente));
    nota = notaMonitoreo + nota ;

             
}
promedio = nota /3;

if (promedio>85){
    alert("Tu promedio es " + promedio + " Estas en Objetivo, Gran trabajo!");

}else{
    alert("Tu promedio es " + promedio + " No alcanzaste el objetivo, tenemos que mejorar");
}


   




