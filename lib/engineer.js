const employee = require("./employee");

class engineer extends employee {
   constructor(name, id, email, github) {
      super(name, is, email);
      this.github = github;
   }

   getGithub() {
      return this.github;
   }

   getRole() {
      return "engineer";
   }
}

module.exports = engineer;