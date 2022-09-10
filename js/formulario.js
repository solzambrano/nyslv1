var args = location.search.substr(1).split('&');
var tabla= " ";
var primera_fila =" ";
var segunda_fila=" ";
for (var i = 0; i < args.length; ++i)
 {
  var parte = args[i].split('=');
  if(parte != null) 
  {
    var campo = parte[0];
    var valor = parte[1];
    if (valor == null) {
      valor = "-------";
      campo= null;
    }
    else {
      valor = ' '+unescape(valor.replace(/\+/g))+' ' ;
    }
   
    tabla+='<tr><td>'+ campo + '</td>'+'<td>'+ valor + '</td></tr>' 
  }
  
}

document.getElementById("primera").innerHTML= tabla;