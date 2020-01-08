$(function(){
  $("#contenedorBotonIniciar").append("<button id='btnIniciar' class='btn boton btn-block btn-sm'>Iniciar</button>");
  
  $("#btnIniciar").click(function(){

    $("#btnIniciar").remove();
    $("#mensaje").text("¿Qué deseas llevar?");

    $("#nombre1").append("Lobo");
    $("#nombre2").append("Cabra");
    $("#nombre3").append("Col");
    $("#nombre4").append("Vacio");
    $("#nombre5").append("Vacio");
    $("#nombre6").append("Vacio");

    $("#contenedorPreguntas").append("<button id='btnLobo' class='btn boton btn-block btn-sm'>Lobo</button><button id='btnCabra' class='btn boton btn-block btn-sm'>Cabra</button><button id='btnCol' class='btn boton btn-block btn-sm'>Col</button>");

    $("#btnCabra").click(function(){
      $("#btnCabra").remove();
      $("#btnLobo").remove();
      $("#btnCol").remove();

      $("#nombre2").text("Vacio");
      $("#imgOpcion2").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
      
      $("#nombre5").text("Cabra");
      $("#imgOpcion5").attr("src","img/goat.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );

      $("#mensaje").text("Gran Elección!");
      $("#mensaje2").text("¿Deseas volver solo?");

      $("#contenedorPreguntas").append("<button id='btnSi' class='btn boton btn-block btn-sm'>Si</button><button id='btnNo' class='btn boton btn-block btn-sm'>No</button>");

      $("#btnSi").click(function(){
        $("#btnSi").remove();
        $("#btnNo").remove();
        $("#mensaje").text("¿Qué deseas llevar?");
        $("#mensaje2").text("Tienes 2 opciones");


        $("#contenedorPreguntas").append("<button id='btnLobo' class='btn boton btn-block btn-sm'>Lobo</button><button id='btnCol' class='btn boton btn-block btn-sm'>Col</button>");

        $("#btnLobo").click(function(){
          $("#btnLobo").remove();
          $("#btnCol").remove();
          $("#mensaje").text("Vas muy bien!");
          $("#mensaje2").text("¿Deseas volver solo?");

          $("#nombre1").text("Vacio");
          $("#imgOpcion1").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
      
          $("#nombre4").text("Lobo");
          $("#imgOpcion4").attr("src","img/wolf.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
          
          $("#contenedorPreguntas").append("<button id='btnSi' class='btn boton btn-block btn-sm'>Si</button><button id='btnNo' class='btn boton btn-block btn-sm'>No</button>");

          $("#btnSi").click(function(){
            $("#btnSi").remove();
            $("#btnNo").remove();
            $("#mensaje").text("*** GAME OVER ***");
            $("#mensaje2").text("El lobo se comió a la cabra!");
            $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");

            $("#btnReset").click(function(){
              location.reload();
            });

          });
          $("#btnNo").click(function(){
            $("#btnSi").remove();
            $("#btnNo").remove();
            $("#mensaje").text("Muy Bien!");
            $("#mensaje2").text("Tienes 2 opciones");

            $("#contenedorPreguntas").append("<button id='btnLobo' class='btn boton btn-block btn-sm'>Lobo</button><button id='btnCabra' class='btn boton btn-block btn-sm'>Cabra</button>");
            $("#btnLobo").click(function(){
              $("#btnLobo").remove();
              $("#btnCabra").remove();
              $("#mensaje").text("LE PELASTE PARIENTE!");
              $("#mensaje2").text("¿Es necesario volver a llevar el lobo?");

              $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");

              $("#btnReset").click(function(){
                location.reload();
              });

            });
            $("#btnCabra").click(function(){
              $("#btnLobo").remove();
              $("#btnCabra").remove();
              $("#mensaje").text("Te falta poco!");
              $("#mensaje2").text("¿Qué deseas llevar?");

              $("#nombre5").text("Vacio");
              $("#imgOpcion5").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
          
              $("#nombre2").text("Cabra");
              $("#imgOpcion2").attr("src","img/goat.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );

              $("#contenedorPreguntas").append("<button id='btnCabra' class='btn boton btn-block btn-sm'>Cabra</button><button id='btnCol' class='btn boton btn-block btn-sm'>Col</button>");

              $("#btnCabra").click(function(){
                $("#btnCabra").remove();
                $("#btnCol").remove();
                $("#mensaje").text("LE PELASTE PARIENTE!");
                $("#mensaje2").text("¿Es necesario volver a llevar la cabra?");

              });
              $("#btnCol").click(function(){
                $("#btnCabra").remove();
                $("#btnCol").remove();
                $("#mensaje").text("Magnifico!");
                $("#mensaje2").text("¿Deseas volver solo?");

                $("#nombre3").text("Vacio");
                $("#imgOpcion3").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
            
                $("#nombre6").text("Col");
                $("#imgOpcion6").attr("src","img/plant.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );

                $("#contenedorPreguntas").append("<button id='btnSi' class='btn boton btn-block btn-sm'>Si</button><button id='btnNo' class='btn boton btn-block btn-sm'>No</button>");

                $("#btnSi").click(function(){
                  $("#btnSi").remove();
                  $("#btnNo").remove();
                  $("#mensaje").text("EXCELENTE!");
                  $("#mensaje2").text("Solo te falta la cabra");

                  $("#contenedorPreguntas").append("<button id='btnCabra' class='btn boton btn-block btn-sm'>Llevar la cabra</button>");

                  $("#btnCabra").click(function(){
                    $("#btnCabra").remove();
                    $("#mensaje").text("FELICITACIONES!");
                    $("#mensaje2").text("Todos cruzaron al río :)");

                    $("#nombre2").text("Vacio");
                    $("#imgOpcion2").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
                
                    $("#nombre5").text("Cabra");
                    $("#imgOpcion5").attr("src","img/goat.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
                    
                    $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");
                    $("#btnReset").click(function(){
                      location.reload();
                    });
                  });

                });
                $("#btnNo").click(function(){
                  $("#btnSi").remove();
                  $("#btnNo").remove();
                  $("#mensaje").text("LE PELASTE PARIENTE!");
                  $("#mensaje2").text("¿Es necesario no volver solo?");

                  $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");
                  $("#btnReset").click(function(){
                    location.reload();
                  });
                });
              });
            });
          });
        });
        $("#btnCol").click(function(){
          $("#btnLobo").remove();
          $("#btnCol").remove();
          $("#mensaje").text("Vas muy bien!");
          $("#mensaje2").text("¿Deseas volver solo?");

          $("#nombre3").text("Vacio");
          $("#imgOpcion3").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
      
          $("#nombre6").text("Col");
          $("#imgOpcion6").attr("src","img/plant.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );

          $("#contenedorPreguntas").append("<button id='btnSi' class='btn boton btn-block btn-sm'>Si</button><button id='btnNo' class='btn boton btn-block btn-sm'>No</button>");

          $("#btnSi").click(function(){
            $("#btnSi").remove();
            $("#btnNo").remove();
            $("#mensaje").text("*** GAME OVER ***");
            $("#mensaje2").text("La cabra se comió la col!");

            $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");
            $("#btnReset").click(function(){
              location.reload();
            });
          });
          $("#btnNo").click(function(){
            $("#btnSi").remove();
            $("#btnNo").remove();
            $("#mensaje").text("Muy Bien!");
            $("#mensaje2").text("Tienes 2 opciones");

            $("#contenedorPreguntas").append("<button id='btnCabra' class='btn boton btn-block btn-sm'>Cabra</button><button id='btnCol' class='btn boton btn-block btn-sm'>Col</button>");

            $("#btnCabra").click(function(){
              $("#btnCabra").remove();
              $("#btnCol").remove();
              $("#mensaje").text("Te falta poco!");
              $("#mensaje2").text("¿Qué deseas llevar? Tienes 2 opciones");

              $("#nombre5").text("Vacio");
              $("#imgOpcion5").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
          
              $("#nombre2").text("Cabra");
              $("#imgOpcion2").attr("src","img/goat.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
              
              $("#contenedorPreguntas").append("<button id='btnLobo' class='btn boton btn-block btn-sm'>Lobo</button><button id='btnCabra' class='btn boton btn-block btn-sm'>Cabra</button>");

              $("#btnLobo").click(function(){
                $("#btnCabra").remove();
                $("#btnLobo").remove();
                $("#mensaje").text("Magnifico!");
                $("#mensaje2").text("¿Deseas volver solo?");

                $("#nombre1").text("Vacio");
                $("#imgOpcion1").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
          
                $("#nombre4").text("Lobo");
                $("#imgOpcion4").attr("src","img/wolf.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );

                $("#contenedorPreguntas").append("<button id='btnSi' class='btn boton btn-block btn-sm'>Si</button><button id='btnNo' class='btn boton btn-block btn-sm'>No</button>");

                $("#btnSi").click(function(){
                  $("#btnSi").remove();
                  $("#btnNo").remove();
                  $("#mensaje").text("EXCELENTE!");
                  $("#mensaje2").text("Solo te falta la cabra");

                  $("#contenedorPreguntas").append("<button id='btnCabra' class='btn boton btn-block btn-sm'>Llevar la cabra</button>");

                  $("#btnCabra").click(function(){
                    $("#btnCabra").remove();
                    $("#mensaje").text("FELICITACIONES!");
                    $("#mensaje2").text("Todos cruzaron al río :)");

                    $("#nombre2").text("Vacio");
                    $("#imgOpcion2").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
                
                    $("#nombre5").text("Cabra");
                    $("#imgOpcion5").attr("src","img/goat.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );

                    $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");
                    $("#btnReset").click(function(){
                      location.reload();
                    });
                  });
                });
                $("#btnNo").click(function(){
                  $("#btnSi").remove();
                  $("#btnNo").remove();
                  $("#mensaje").text("LE PELASTE PARIENTE!");
                  $("#mensaje2").text("¿Es necesario no volver solo?");

                  $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");

                  $("#btnReset").click(function(){
                    location.reload();
                  });
                });
              });
              $("#btnCabra").click(function(){
                $("#btnCabra").remove();
                $("#btnLobo").remove();
                $("#mensaje").text("LE PELASTE PARIENTE!");
                $("#mensaje2").text("¿Es necesario volver a llevar la cabra?");
                $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");
                $("#btnReset").click(function(){
                  location.reload();
                });
    
              });
            });
            $("#btnCol").click(function(){
              $("#btnCabra").remove();
              $("#btnCol").remove();
              $("#mensaje").text("LE PELASTE PARIENTE!");
              $("#mensaje2").text("¿Es necesario volver a llevar la col?");
              $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");
              $("#btnReset").click(function(){
                location.reload();
              });
            });
          });
        });
      });
      $("#btnNo").click(function(){
        $("#btnSi").remove();
        $("#btnNo").remove();

        $("#mensaje").text("LE PELASTE PARIENTE!");
        $("#mensaje2").text("¿Es necesario volver a llevar la cabra?");
        $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");

        $("#btnReset").click(function(){
          location.reload();
        });
      });
    });

    $("#btnLobo").click(function(){
      $("#btnCabra").remove();
      $("#btnLobo").remove();
      $("#btnCol").remove();

      $("#nombre1").text("Vacio");
      $("#imgOpcion1").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
  
      $("#nombre4").text("Lobo");
      $("#imgOpcion4").attr("src","img/wolf.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );

      $("#mensaje").text("*** GAME OVER ***");
      $("#mensaje2").text("La cabra se comió la col!");
      
      $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");

      $("#btnReset").click(function(){
        location.reload();
      });
    });

    $("#btnCol").click(function(){
      $("#btnCabra").remove();
      $("#btnLobo").remove();
      $("#btnCol").remove();

      $("#nombre3").text("Vacio");
      $("#imgOpcion3").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
  
      $("#nombre6").text("Col");
      $("#imgOpcion6").attr("src","img/plant.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );

      $("#mensaje").text("*** GAME OVER ***");
      $("#mensaje2").text("El lobo se comió a la cabra!");

      $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");
      $("#btnReset").click(function(){
        location.reload();
      });
    });
  });
});