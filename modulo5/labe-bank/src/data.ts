

export type account = {
    name: string,
    CPF: string,
    dateOfBirth: string,
    balance: number,
    bankStatement: balance[]
}

type balance = {
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
                value: 50,
                date: '09/06/2022',
                description: 'presente da vovó'
            },
            {
                value: 50,
                date: '09/06/2022',
                description: 'presente da vovó'
            }]
    },
    {
        name: 'Rafael',
        CPF: '005.455.852-15',
        dateOfBirth: '16/05/1985',
        balance: 0,
        bankStatement: []
    },
    {
        name: 'Pedro',
        CPF: '005.455.852-18',
        dateOfBirth: '08/12/2020',
        balance: 0,
        bankStatement: []
    }
]