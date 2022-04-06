'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null;
}

function Node(value){
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value) {
  var node = new Node(value); //creo un nuevo nodo
  var current = this.head; //current va iniciar en la cabecera de la lista
  //si esta vacia
  if (current === null) { //si esta vacio
    this.head = node; //le agrego un nodo nuevo a la cabecera
    this._length++; //aumento su longitud
    return node; //retorno el nodo
  }
  //si no esta vacia, recorro hasta encontrar el ultimo
  while (current.next !== null) { //si hay un nodo en el siguiente de current, pasa a ese nodo
    current = current.next;
  }
  current.next = node; //a el ultimo nodo que apunta a null le voy a decir qe ahora apunte a un nuevo nodo;
  this._length++;
  return node;
};

LinkedList.prototype.remove = function(){
  let current = this.head; //inicia current en la cabecera
  var deleted; //creo una variable auxiliar
  if (current === null) { //si esta vacio retorna null
    return null;
  }
  if (!current.next) { //(current.next === null) //si su siguiente nodo es nulo alojamos el valor actual del nodo en la variable auxiliar
    var deleted = current.value;
    this.head = null; //iniciamos nuevamente la cabecera en nulo
    this._length--;
    return deleted; //retornamos el current alojado a la variable auxiliar
  }

  while (current.next.next) { //hacemos que itere hasta estar parados en el anteultimo cuando el .next.next sea nulo
    current = current.next;
    
  }
  var deleted = current.next.value; //una vez que llega al anteultimo, al siguiente nodo lo metemos en la variable auxiliar.
  current.next = null; //y hacemos qeue luego de eso valga nulo
  return deleted; //retornamos el nodo eliminado
  


  // let current = this.head;
  // if (current === null) {
  //   return null;
  // }
  // if (this._length === 1) {
  //   console.log(current);
  //   this.head = null;
  //   return;
  // }
  // while (current.next  !== null) {
  //   current = current.next;
  // } if (current.next == null) {
  //   current = current.next.next;
    
  // }
  // return current.value;
};

LinkedList.prototype.search = function (value) {
  let current = this.head;
  if (!current) return null; // si no existe "head", retorno null;
  
  while (current) {
    if (current.value === value) return current.value;
    else if (typeof value === 'function') {
      if (value(current.value)) return current.value
    }
    current = current.next;
  }

  return null;
};

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.buckets = [];
  this.numBuckets = 35;
}

HashTable.prototype.hash = function (key) {
  let sum = 0;

  for(let i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i);
  }
  return sum % this.numBuckets;
};


HashTable.prototype.set = function (key, value) {
  let index = this.hash(key);
  if(typeof key !== 'string') throw new TypeError("Keys must be strings");
  if(!this.buckets[index]) {
    this.buckets[index] = {};
  }
  this.buckets[index][key] = value;
};



HashTable.prototype.get = function (key) {
  let index = this.hash(key)

 return this.buckets[index][key];
  //this.buckets = []
  //this.buckets[4] = {}
  //this.buckets[4]['casa] = 'Ravenclaw
};

HashTable.prototype.hasKey = function (key) {
  let index = this.hash(key);
  return this.buckets[index].hasOwnProperty(key);
};

// function hash (){}

// hasKey(key)
// hash(key)
// hasOwnProperty

// get(key)
//   hash(key)


// insert(key, value) {
//   1 validar key
//   2 hash(key)
//   3 buckets[hash(key)]
//   3.1 si tiene o no algo definido
// }


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
