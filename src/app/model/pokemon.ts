export class Pokemon {
  public numero: number;
  public nombre: string;
  public tipos: any[];
  public avatar: string;
  public imagen: string;

  constructor(
    numero: number,
    nombre: string,
    tipos: any[],
    avatar: string,
    imagen: string
  ) {
    this.numero = numero;
    this.nombre = nombre;
    this.tipos = tipos;
    this.avatar = avatar;
    this.imagen = imagen;
  }

}

/* Rosaura Cotos Sullon - 20/04/2023 */
