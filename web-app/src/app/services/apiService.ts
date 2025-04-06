import { BASE_URL, FunctionKey, FunctionEndpoints } from "../constants/api";

export function getApiEndpoint(apiFunction: FunctionKey) {
    return `${BASE_URL}${FunctionEndpoints[apiFunction]}`;
}
