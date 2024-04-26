import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {

    signIn() {
        return "sign in"
    }

    signup() {
        return "sign up"
    }
}
