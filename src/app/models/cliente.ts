export class Cliente {

  constructor(
    public nome: string,
    public rg: number,
    public orgaoEx: string,
    public cadastro: string,
    public telefone: string,
    public tipo: string,
    public id?: number) {
  }
}
