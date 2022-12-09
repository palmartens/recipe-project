
export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.loggedIn)
            }, 8)
        });
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}