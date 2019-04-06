import { Injectable } from '@angular/core';

@Injectable()
export class GatosService {

    private gatos: Gato[] = [
      {
        nombre: "Siamés",
        bio: "El siamés es un gato de tamaño mediano con un cuerpo largo y flexible, que resulta grácil y elegante sin perder su aspecto musculoso. El cuerpo es equilibrado y atlético; las patas, esbeltas; y las zarpas, pequeñas y ovaladas. ",
        biocompleta:"El siamés es un gato de tamaño mediano con un cuerpo largo y flexible, que resulta grácil y elegante sin perder su aspecto musculoso. El cuerpo es equilibrado y atlético; las patas, esbeltas; y las zarpas, pequeñas y ovaladas. La cabeza vista desde arriba recuerda a un triángulo que se estrecha en líneas rectas hasta un hocico delgado. Las orejas son grandes y erguidas, y están situadas de tal modo que siguen las líneas del triángulo. Los ojos tienen forma oriental y se inclinan hacia la nariz. La cola es larga, estrecha y carece de dobleces. El pelaje, corto, fino y ceñido al cuerpo, tiene un color principal pálido en todo el cuerpo, excepto en las marcas distales, que son mucho más oscuras. El color más oscuro se extiende únicamente a la zona de la máscara de la cara, las orejas, las patas y la cola, que son las partes más frías del cuerpo. ",
        img: "assets/img/siames.jpg",
        origen: "Tailandia",
        tamano: "mediano"
        
      },
      {
        nombre: "Angora",
        bio: "El elegante Angora Turco es muy inteligente, curioso, ágil, muy fiel y mimoso con sus propietarios. Son activos y maulladores, por lo que si tienes un Angora Turco, no te extrañes que maúlle mucho, es genética de esta raza. ",
        biocompleta:"El elegante Angora Turco es muy inteligente, curioso, ágil, muy fiel y mimoso con sus propietarios. Son activos y maulladores, por lo que si tienes un Angora Turco, no te extrañes que maúlle mucho, es genética de esta raza. A este felino le gusta vivir con una sola persona o bien dos, no con demasiada gente, ya que le gusta mucho la paz y la tranquilidad. Este gato es muy devoto de su dueño y le suele seguir por toda la casa. Es dócil y cariñoso con su familia y también juguetón, por lo que sería interesante dedicarle un rato durante el día a interactuar con él. Puede adaptarse bien a cualquier entorno, ya sea urbano o rural.",
        img: "assets/img/angora.jpg",
        origen: "Turquía",
        tamano: "mediano"
      },
      {
        nombre: "Birmano",
        bio: "Un birmano es un gato de pelo semilargo de color más oscuro hacia las marcas distales, la cara, las patas, las orejas y la cola, y más claro en el resto del cuerpo. ",
        biocompleta:"Un birmano es un gato de pelo semilargo de color más oscuro hacia las marcas distales, la cara, las patas, las orejas y la cola, y más claro en el resto del cuerpo. Es un gato bastante grande, de cuerpo rechoncho y patas cortas. El gato birmano tiene los ojos azules y las cuatro zarpas de color blanco puro. Los calcetines delanteros cubren solo las falanges, pero los traseros son más largos. La cabeza es ancha y redondeada, con orejas de tamaño medio. Los gatos birmanos pueden presentar muchos colores diferentes.",
        img: "assets/img/birman.jpg",
        origen: "Birmania / Francia",
        tamano: "mediano"
      },
      {
        nombre: "Bombay",
        bio: "El bombay es un gato de constitución media, con un pelaje negro azabache lustroso que brilla como el charol. Su cabeza tiene un cráneo suavemente redondeado, orejas redondeadas y un hocico ancho y romo. ",
        biocompleta:"El bombay es un gato de constitución media, con un pelaje negro azabache lustroso que brilla como el charol. Su cabeza tiene un cráneo suavemente redondeado, orejas redondeadas y un hocico ancho y romo. Sus hermosos ojos de color cobre o dorado están bastante separados y son intensos y expresivos. El cuerpo es firme y musculoso, con un lomo recto y fuerte. La trufa y el contorno del ojo son negros y las almohadillas de las patas son negras o de color marrón oscuro.",
        img: "assets/img/bombay.jpg",
        origen: "Gran Bretaña / Estados Unidos",
        tamano: "mediano"
      },
      {

        nombre: "Exótico de pelo corto",
        bio: "El exótico de pelo corto es un gato fornido de tamaño mediano. La cabeza es ancha y redonda, con las orejas pequeñas y separadas y una cara corta y despejada. ",
        biocompleta:"El exótico de pelo corto es un gato fornido de tamaño mediano. La cabeza es ancha y redonda, con las orejas pequeñas y separadas y una cara corta y despejada. Los ojos son grandes y redondos, de color brillante. Las patas son cortas, gruesas y fuertes, con grandes zarpas redondeadas y dedos copetudos. La cola es corta y tupida. El pelaje es corto, grueso y exuberante, con un manto inferior suave y denso. El exótico de pelo corto muestra toda la gama de colores y patrones de pelaje de los persas, y de los atigrados moteados.",
        img: "assets/img/exotic.jpg",
        origen: "Estados Unidos",
        tamano: "mediano"
        
      
      },
      {
        nombre: "Snowshoe",
        bio: "El snowshoe es un gato de tamaño mediano, que combina la recia corpulencia del gato americano de pelo corto con la ágil elegancia del gato siamés. La cabeza describe un triángulo redondeado, los ojos son grandes e inclinados, y las orejas están bastante separadas y son largas y puntiagudas. ",
        biocompleta:"El snowshoe es un gato de tamaño mediano, que combina la recia corpulencia del gato americano de pelo corto con la ágil elegancia del gato siamés. La cabeza describe un triángulo redondeado, los ojos son grandes e inclinados, y las orejas están bastante separadas y son largas y puntiagudas. El cuerpo es largo y atlético. El pelaje es corto y lustroso, con la máscara, las orejas, las patas y la cola mucho más oscuras que el resto del cuerpo. Los snowshoe pueden presentar variedades azules, marrón oscuro, lila y chocolate. Las partes blancas abarcan menos de la tercera parte del gato. Todos los snowshoe tienen los ojos de color azul intenso.",
        img: "assets/img/snowshoe.jpg",
        origen: "Estados Unidos",
        tamano: "mediano"
      },
      {
        nombre: "Mau egipcio",
        bio: "El mau egipcio es un gato de aspecto atlético y elegante caracterizado por un patrón moteado aleatorio. Se dice que los mau tienen una mirada de preocupación exclusiva. Esta expresión facial resulta de unos grandes ojos verde grosella situados en línea recta por debajo del ceño y entre las líneas paralelas de la nariz.",
        biocompleta:"El mau egipcio es un gato de aspecto atlético y elegante caracterizado por un patrón moteado aleatorio. Se dice que los mau tienen una mirada de preocupación exclusiva. Esta expresión facial resulta de unos grandes ojos verde grosella situados en línea recta por debajo del ceño y entre las líneas paralelas de la nariz. El mau no es tan macizo como el británico de pelo corto pero tampoco tan esbelto como los orientales. El pelaje del mau egipcio es sedoso y delicado, con un brillo lustroso. La frente muestra la típica M y manchas de ceño fruncido, que forman líneas sobre la frente y siguen bajando hasta la parte posterior del cuello. El patrón moteado distintivo del mau puede presentarse en varios colores con un contraste entre el color pálido de fondo y las manchas, más oscuras. ",
        img: "assets/img/mau.jpg",
        origen: "Egipto / Italia",
        tamano: "mediano"
      }
              ];

    constructor(){
        console.log("servicio listo para usarse");   }

    
        getGatos():Gato[]{
            return this.gatos;
        }


        getGato( id:string){
          return this.gatos[id];
        }

        buscarGatos (texto:string):Gato[]{
          let gatosArr : Gato[] = [];
            
          //Pasar el texto que se ingresa a minusculas

          texto = texto.toLowerCase();

          //Hacer barrido de objeto gatos que tiene toda la informacion de las razas

          for(let i=0; i< this.gatos.length; i++){

            let gato=this.gatos[i];
            let nombre= gato.nombre.toLowerCase();

            if(nombre.indexOf(texto) >= 0){
              gato.idx =i;
              gatosArr.push(gato);
            }
          }
          
          return gatosArr;


        }
}

export interface Gato{
    nombre: string;
    bio: string;
    biocompleta: string;
    img: string;
    origen: string;
    tamano: string;
    idx?: number;
}