export class Roles {

    constructor(RolId,Name,Status) {

      this.RolId = RolId;
      this.name = Name;
      this.Status = Status;
    }

    getRolId() {
      return this.RolId;
    }

    setRolId(RolId) {
      this.RolId = RolId
    }

    getName() {
      return this.name;
    }

    setName(name) {
      this.name = name
    }

    getStatus() {
      return this.Status;
    }

    setStatus(Status) {
      this.Status = Status
    }


}