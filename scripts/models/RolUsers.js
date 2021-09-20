export class RolUsers {

    constructor(RolUserId,Type,IdUser) {

      this.RolUserId = RolUserId;
      this.Type = Type;
      this.IdUser = IdUser;
    }

    getRolUserId() {
      return this.RolUserId;
    }

    setRolUserId(RolUserId) {
      this.RolUserId = RolUserId
    }

    getType() {
      return this.Type;
    }

    setType(Type) {
      this.Type = Type
    }

    getIdUser() {
      return this.IdUser;
    }

    setIdUser(IdUser) {
      this.IdUser = IdUser
    }

}