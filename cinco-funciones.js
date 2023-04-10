
//Funcion par o impar
function parImpar(num) {
    
    if(num % 2 == 0) {
      console.log(`${num} es un número par`);
    } else {
      console.log(`${num} es un número impar`);
    }
  }

  parImpar (15)

// funcion es o no primo

  function esPrimo(num) {
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        console.log(`${num} no es un número primo`);
        return false;
      }
    }
    console.log(`${num} es un número primo`);
    return true;
  }

  esPrimo (9)

  //funcion que determina el siguiente número primo

  function siguientePrimo(num) {
    let esPrimo = true;
  
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        esPrimo = false;
        break;
      }
    }
  
    let siguiente = num + 1;
  
    while (true) {
      let esPrimoSiguiente = true;
  
      for (let i = 2; i < siguiente; i++) {
        if (siguiente % i === 0) {
          esPrimoSiguiente = false;
          break;
        }
      }
  
      if (!esPrimo) {
        console.log ("El número ingresado no es primo.");
        break;
      } else if (esPrimoSiguiente) {
        console.log (`El siguiente número primo es ${siguiente}`);
        break;
      }
  
      siguiente++;
    }
  }

siguientePrimo (11)

// Función cuadrado

function dibujarCuadrado(n) {
    for (let i = 1; i <= n; i++) {
      let linea = "";
      for (let j = 1; j <= n; j++) {
        if (i == 1 || i == n || j == 1 || j == n) {
          linea += "* ";
        } else if (i > 1 && i < n && j > 1 && j < n) {
          linea += "  ";
        }
      }
      console.log(linea);
    }
  }

  dibujarCuadrado (5)

  //Función llamar cualquiera de las cuatro funciones anteriores 

  function llamarFuncion(funcion, num) {
    switch (funcion) {
      case "parImpar":
        parImpar(num);
        break;
      case "esPrimo":
        esPrimo(num);
        break;
      case "siguientePrimo":
        siguientePrimo(num);
        break;
      case "dibujarCuadrado":
        dibujarCuadrado(num);
        break;
      default:
        console.log("Opción no válida.");
    }
  }

  llamarFuncion ("esPrimo", 9)