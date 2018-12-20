# js-katas

Se pide implementar las siguientes funciones (katas) siguiendo los siguientes requisitos para cada una de ellas.

El proyecto incluye los tests unitarios que estas implementaciones deben cumplir.

Las soluciones se deberán subir a un repositorio público github/gitlab.

Es necesario disponer de node >= 8.9.4 para ejecutar correctamente el proyecto.

## HOW TO

Ejecutar `make install` para instalar las dependencias del proyecto.

Ejecutar `make test` para correr los test unitarios que validen las funciones implementadas.

### KATA 1

Implementar una función que dado un número entero, retorne otro número formado por sus mismos digitos ordenados descendentemente.

Ejemplos:

    - 1234 ---> 4321
    - 435677 ---> 776543
    - 2030 ---> 3200

### KATA 2

Safe access.

Implementar un método que permita acceder de forma segura a propiedades de un objeto, incluso cuando dichas propiedades no existen.

La función debe admitir tres parametros: el objeto al que se va a acceder; el valor por defecto que va a devolver la función en caso de que la propiedad no exista dentro del objeto; y por último, un string indicando el path de la propiedad a consultar.

El path delimitará el camino en el cual se encuentra la propiedad a consultar. Los distintos niveles de profundidad se delimitarán con puntos.
Además este último parametro es opcional. En caso de no proveerse, la función devolverá otra función que esperará ser invocada con el path de la propiedad como argumento.

Ejemplos:

```javascript=
const obj = { p1: {
                    p2: 'value'
                }
            }

get(obj, null, 'p1.p2') // ---> returns 'value'
```

```javascript=
const obj = { p1: {
                    p2: 'value'
                }
            }

get(obj, 'default', 'p1.p2.p3') // ---> returns 'default'
```

```javascript=
const obj = { p1: {
                    p2: 'value'
                }
            }

get(obj, null, 'p5.p2') // ---> returns null
```

```javascript=
const obj = { p1: {
                    p2: 'value'
                }
            }

const accessor = get(obj, null)

accessor('p1.p2') // ---> returns 'value'
accessor('p3.p2.p5') // ---> returns null
```

### Kata 3

El cuadrado.

Los divisores de 42 son: `1, 2, 3, 6, 7, 14, 21, 42`. Los cuadrados respectivos de estos divisores son: `1, 4, 9, 36, 49, 196, 441, 1764`. La suma de los cuadrados de estos divisores es: `2500`. Que puede expresarse como `50 * 50`, un cuadrado!

Se pide implementar una función que reciba dos parametros: n y m, siendo `m >= n >= 1` y halle todos los números entre `m` y `n` que cuya suma de sus divisores al cuadrado formen un cuadrado.

La función debe devolver un array con todos los números en ese rango formados por pares de valores. Cada par de valores se compondra de: número que cumple la condición en primer lugar, y la suma de los divisores al cuadrado en la segunda.

Ejemplos:

```javascript=
    squareDividers(1, 250) // ---> returns [ [1, 1], [42, 2500], [246, 84100] ]

```

## Debugging

Para ejecutar el debugger de node usando las Chrome Developers Tools se ha de ejecutar en linea de comandos `make test-debug`.
Esto levantará un inspector al cual se puede acceder en `chrome://inspect`.
