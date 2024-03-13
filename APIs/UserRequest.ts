import { APIRequestContext } from "@playwright/test";
import User from "../Models/UserInit";


export default class UserAPI{
    async signup (request: APIRequestContext, user: User){
        return await request.post('/api/v1/users/register', {
        data: {
            email: user.getEmail(),
            password:  user.getPassword(),
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
        }
        })
    }
}