class Producto {
    constructor(nombre, precio, img, id, cantidad) {
      this.nombre = nombre
      this.precio = precio
      this.img = img
      this.id = id
      this.cantidad = cantidad
    }
  }
  
  const minibagDash = new Producto(
    'Minibag Dash',
    7400,
    './images/Impact.jpg',
    1,
    1
  )
  const minibagEssence = new Producto(
    'Minibag Essence',
    7850,
    './images/Impact.jpg',
    2,
    1
  )
  const minibagBlaze = new Producto(
    'Mnibag blaze',
    7850,
    './images/Impact.jpg',
    3,
    1
  )
  const minibagExist = new Producto(
    'Minibag exist',
    7400,
    './images/Impact.jpg',
    4,
    1
  )

  const minibagSense = new Producto(
    'Minibag Sense',
    5700,
    './images/Impact.jpg',
    5,
    1
  )
  
  const arrayProductos = [
    minibagDash,
    minibagEssence,
    minibagBlaze,
    minibagExist,
    minibagSense
  ]