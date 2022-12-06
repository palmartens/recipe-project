export class AccountsService {
    accounts = [
        { 
            name: 'Master account',
            status: 'active'
        },
        { 
            name: 'Testaccount',
            status: 'inactive'
        },
        { 
            name: 'Hidden account',
            status: 'unknown'
        }
        
    ]

    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status } );

    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        
    }
}