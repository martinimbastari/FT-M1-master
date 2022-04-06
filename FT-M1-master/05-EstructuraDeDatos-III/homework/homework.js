'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

function BinarySearchTree (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  BinarySearchTree.prototype.insert = function (value) {
    //alojamos el constructor en una varibale
    let newTree = new BinarySearchTree(value)
    //si lo que ingresamos es menor al valor del nodo que ya tenemos, entra en el if y sino pasa al else
    if(value <= this.value) {
      if(!this.left){ //si esta vacio le crea el nodo ahi mismo
        this.left = newTree
      } else { //sino vuelve a iniciar y comparar con el nodo que se topo
        this.left.insert(value)
      }
    } else { //si no va a la izquierda se fija si hay algo a la derecha
      if(!this.right) this.right = newTree //le crea el nodo aca
      else this.right.insert(value) //sino inicia la comparacion nuevamente hasta encontrar su lugar
    }
  }




//     //si 12 es mayor a nuestra raiz(20)
//     if( value < this.value) {
//       //me fijo si a la izquiera hay algo
//       if(this.left) {
//         //lo agrego y vuelvo a comprar nuevamente si va la izquierda o derecha
//         this.left.insert(value);
//       } else {
//         //recursion
//         this.left = new BinarySearchTree(value)
//       }
//     }
//     if(value > this.value) {
//       if(this.right) {
//         this.right.insert(value);
//       } else {
//         this.right = new BinarySearchTree(value);
//       }
//     }
// }


BinarySearchTree.prototype.contains = function (value){

  if(this.value === value) return true
  if(this.value < value){
    if(this.right)return this.right.contains(value)

  }else {
    if(this.left) return this.left.contains(value)
  }
  return false
}


BinarySearchTree.prototype.depthFirstForEach = function (cb,order){
  if(order === 'pre-order'){
    cb(this.value)
    if(this.left)this.left.depthFirstForEach(cb,order)
    if(this.right)this.right.depthFirstForEach(cb,order)
  }
  if(order === 'in-order'){
    if(this.left)this.left.depthFirstForEach(cb,order)
    cb(this.value)
    if(this.right)this.right.depthFirstForEach(cb,order)
  }
  if(order === 'post-order'){ 
    if(this.left)this.left.depthFirstForEach(cb,order)
    if(this.right)this.right.depthFirstForEach(cb,order)
    cb(this.value)
  }
}


BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr=[]){
  cb(this.value)
  if(this.left) arr.push(this.left)
  if(this.right) arr.push(this.right)
  if(arr.length)arr.shift().breadthFirstForEach(cb, arr)
}



BinarySearchTree.prototype.size = function (){
  if(!this.right && !this.left) return 1;
  if(!this.right && this.left) return 1 + this.left.size()
  if(this.right && !this.left) return 1 + this.right.size()
  //en caso de tener los 2
  return 1+ this.left.size() + this.right.size();
}







// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
