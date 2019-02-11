# js-katas

We ask to implement the next functions (katas) following the next requirements for each one of them.

The project includes the unit test that those implementations need to follow.

The solutions will be pushed to a public repository.

It is necessary to have node >= 8.9.4 for executing the project.

## HOW TO

Execute `make install` for installing the dependencies.

Execute `make test` for running the unit thest that validate the functions.

### KATA 1

Implement a function that given an Integer number returns another number formed by the same digits ordered descending.



Examples:

    - 1234 ---> 4321
    - 435677 ---> 776543
    - 2030 ---> 3200

### KATA 2

Safe access.

Implement a method that allows to access in a safe way to properties of an object, even when those properties do not exist.

The function should accept 3 parameters, the object we are accessing to; the default value that the function is going to return if the property is missing; and for last, a string indicating the path in the object we are going to access.

The `path` will tell us the way to find the property we want to access. The different deep levels will be delimited by dots. `hello.test.here`

Also, this `path` parameter is optional. In case of not being provided, the function will return another function that will need the `path` to be completed.


Examples:

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

The square.

The divisors of 42 are: `1, 2, 3, 6, 7, 14, 21, 42`. The square of each of this numbers are: `1, 4, 9, 36, 49, 196, 441, 1764`. The sum of the squares of the divisors is: `2500`. That can be exprsed by `50 * 50`, a square!

We ask to implement a function that receive 2 parameters: `n` and `m`, being `m >= n >= 1` and find all the numbers between `m` and `n` which their divisor's square sum makes a square, as the example above.

The function should return an array with all the numbers in that range, forming pairs of values. Each pair of values will be composed by: number that meets the requirements in the first position, and the sum of it's divisor's squares in the second position.


Examples:

```javascript=
    squareDividers(1, 250) // ---> returns [ [1, 1], [42, 2500], [246, 84100] ]

```

## Debugging

To execute the debugger from node using Chrome Developer Tools you have to execute `make test-debug` in the command line.
This will launch an inspector that can be accessed at the url `chrome://inspect`
