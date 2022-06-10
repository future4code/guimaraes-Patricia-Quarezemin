export enum Transaction {
    PAYMENT = 'Payment',
    DEPOSIT = 'Deposit'
}

export type account = {
    name: string,
    CPF: string,
    dateOfBirth: string,
    balance: number,
    bankStatement: balance[]
}

type balance = {
    transaction: Transaction,
    value: number,
    date: string,
    description: string
}

export const usersBank: account[] = [
    {
        name: 'Patrícia',
        CPF: '005.455.852-13',
        dateOfBirth: '18/08/1986',
        balance: 5.000,
        bankStatement: [
            {
                transaction: Transaction.PAYMENT,
                value: 50,
                date: '09/06/2022',
                description: 'presente da vovó'
            },
            {
                transaction: Transaction.PAYMENT,
                value: 700,
                date: '09/06/2022',
                description: 'pagamento cartão de crédito'
            }]
    },
    {
        name: 'Rafael',
        CPF: '005.455.852-15',
        dateOfBirth: '16/05/1985',
        balance: 0,
        bankStatement: [
            {
                transaction: Transaction.PAYMENT,
                value: 80,
                date: '08/06/2022',
                description: 'cinema'
            },
            {
                transaction: Transaction.DEPOSIT,
                value: 700,
                date: '09/06/2022',
                description: 'Cartão de crédito - Paty'
            }
        ]
    },
    {
        name: 'Leandro',
        CPF: '005.455.852-17',
        dateOfBirth: '19/10/1989',
        balance: 0,
        bankStatement: [
            {
                transaction: Transaction.PAYMENT,
                value: 50,
                date: '09/06/2022',
                description: 'lanche - Malabares'
            },
            {
                transaction: Transaction.PAYMENT,
                value: 38,
                date: '08/06/2022',
                description: 'presente do Pedro'
            }
        ]
    }
]