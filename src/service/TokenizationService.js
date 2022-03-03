import axios from "axios";

const TOKENIZE_API_BASE_URL = "http://localhost:8082/api/v1/tokenize";

class TokenizationService {

    tokenize(input){
        return axios.get(TOKENIZE_API_BASE_URL + "/" + input);
    }
}

export default new TokenizationService();