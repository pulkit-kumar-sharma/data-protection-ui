import axios from "axios";

const DETOKENIZE_API_BASE_URL = "http://localhost:8082/api/v1/deTokenize";

class DeTokenizationService {

    deTokenize(input){
        return axios.get(DETOKENIZE_API_BASE_URL + "/" + input);
    }
}

export default new DeTokenizationService();