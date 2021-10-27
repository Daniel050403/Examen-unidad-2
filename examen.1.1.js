var n = parseInt(prompt('Ingrese Cantidad de bandas')) 

var data = [];
var can= [];
var alb=[];
var ba=[];

function datoss (n){
    for (let i = 0; i < n; i++) {
        var nombre_banda= prompt('Nombre')
        var genero = prompt('genero')
        var fecha = prompt ("fecha");
        var datos = {
            nombre_banda: nombre_banda,
            genero: genero,
            fecha: fecha,
    
        }
            data.push(datos);
            ba.push(datos);
          
        }
        return data;
       
    }
    datoss(n);
    
    var r = parseInt(prompt('Ingrese Cantidad de album')) 



function d (r){
    
    for (let i = 0; i < r; i++) {
        var nombre = prompt('Nombre')
        var generos= prompt('genero')
        var duracion = prompt ("fecha");
        var datos = {
            nombre: nombre,
            generos: generos,
            duracion: duracion,
    
        }
            data.push(datos);
            alb.push(datos);
        }
        return data;
    }
    d(r);


    var e = parseInt(prompt('Ingrese Cantidad de canciones')) 


function da (e){
    for (let i = 0; i < e; i++) {
        var nombre = prompt('Nombre')
        var album= prompt('album')
        var duracion = prompt ("Duracion");
        var datos = {
            nombre: nombre,
            album: album,
            duracion: duracion,
    
        }
            data.push(datos);
            can.push(datos);
        }
        return data;
    }
   
    da(e);


    var op= parseInt(prompt('  1.)Mostar informacion por genero    2).Mostrar informacion por album  3).Buscar cancion en especifico    4). mostrar todo'  )) 
    switch(op) {
        case 1:
            console.log("bandas")
           console.log(bandaal())
           console.log("albumnes")
           console.log(albun())
        
          break;
        case 2:
            var grupo = prompt("Que album quieres ver")
            var h = grupo_de_alumnos(grupo)
            console.log(h)
          break;
        case 3:
            console.log(alumno_por_alumno())
          break;
        case 4:
            total()
          break;
          ;
      }

    
               
    
    
   
    
    function alumno_por_alumno(){
        var alumno_solo = prompt("Que cancion quieres ver")
        for (let i = 0; i < data.length; i++) {
            if (data[i].nombre == alumno_solo ){
                return(data[i])
            }
        }
    }
    
   
    
    function total(){
        console.log("albumnes");
        console.log(alb);
        console.log("bandas");
        console.log(ba);
        console.log("canciones");
        console.log(can);
    }


    
    function bandaal(){
        var alumno_solo = prompt("Ingrese genero")
        for (let i = 0; i < ba.length; i++) {
            if (ba[i].genero == alumno_solo ){
                return(ba[i])
            }
        }
    }
 

    function albun(){
        var alumno_solo = prompt("ingrese genero")
        for (let i = 0; i < alb.length; i++) {
            if (alb[i].generos == alumno_solo ){
                return(alb[i])
            }
        }
    }
 
    
    function grupo_de_alumnos(grupo){
        var a = []
        for (let i = 0; i < can.length; i++) {
            if (can[i].album == grupo){
                a.push(can[i])
            }
        }
        return a;
    }
    