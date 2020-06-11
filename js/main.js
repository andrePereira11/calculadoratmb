$(document).ready(function(){
  $('select').formSelect();

  $("#calcular").click(function() {
    var sexo = $("input[name='sexo']:checked").val();
    var objetivo = $("input[name='objetivo']:checked").val();
    var peso = parseInt($("#peso").val());
    var altura = parseInt($("#altura").val());
    var idade = parseInt($("#idade").val());
    var nivel_af = parseInt($("#nivel-af").val()); 

    if(sexo == 'M'){
      var tmb = 66 + (13.8 * peso) + (5 * altura) - (6.8 * idade);
    }else{
      var tmb = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
    }

    switch(nivel_af){
      case 1:
        var ndc = tmb * 1.2
        break;
      case 2:
        var ndc = tmb * 1.375
        break;
      case 3:
        var ndc = tmb * 1.55
        break;
      case 4:
        var ndc = tmb * 1.725
        break;
      case 5:
        var ndc = tmb * 1.9
        break;
      default:
        ndc = 0;
    }

    //cada grama de proteina e carboidatros equivale a 4 calorias. Por isso a divisão por 4
    //cada grama de gordura equivale a 9 calorias. Por isso a divisao por 9

    if(objetivo == 'perderPeso'){
      real_ndc = ndc * 0.8
      var proteinas = (0.45 * real_ndc) / 4;
      var carboidratos = (0.3 * real_ndc) / 4;
      var gorduras = (0.25 * real_ndc) / 9;
    }else{
      real_ndc = ndc * 1.20
      var proteinas = (0.3 * real_ndc) / 4;
      var carboidratos = (0.5 * real_ndc) / 4;
      var gorduras = (0.2 * real_ndc) / 9;
    }

    var metabolismoBasal = tmb.toString();
    
    $('#tmb').text(tmb.toFixed(2).toString());
    $('#ndc').text(ndc.toFixed(2).toString());
    $('#real_ndc').text(real_ndc.toFixed(2).toString());
    $('#proteinas').text(proteinas.toFixed(2).toString() + '(g)');
    $('#carboidratos').text(carboidratos.toFixed(2).toString() + '(g)');
    $('#gorduras').text(gorduras.toFixed(2).toString() + '(g)');

  });
});