import GenericService from "./GenericServices";

class CheckerService extends GenericService {
  check = (text) => this.post("check", { text });
}
let checkerService = new CheckerService();
export default checkerService;
