export class Users {

    constructor(UserId,Name,Address,PhoneNumber, Contrasena, Conectado) {

      this.UserId = UserId;
      this.name = Name;
      this.address = Address;
      this.phoneNumber = PhoneNumber;
      this.contrasena = Contrasena;
      this.conectado = Conectado;
    }

    getUserId() {
      return this.UserId;
    }

    setUserId(UserId) {
      this.UserId = UserId
    }

    getName() {
      return this.name;
    }

    setName(name) {
      this.name = name
    }

    getAddress() {
      return this.address;
    }

    setAddress(address) {
      this.address = address
    }

    getPhoneNumber() {
      return this.phoneNumber;
    }

    setPhoneNumber(phoneNumber) {
      this.phoneNumber = phoneNumber
    }

    getContrasena() {
      return this.contrasena;
    }

    setContrasena(contrasena) {
      this.contrasena = contrasena
    }

    getConectado() {
      return this.conectado;
    }

    setConectado(conectado) {
      this.conectado = conectado
    }

}