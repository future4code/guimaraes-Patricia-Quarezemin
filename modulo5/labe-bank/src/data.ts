

type account = {
    name: string,
    CPF: number,
    dateOfBirth: string,
    balance: number,
    bankStatement: balance[]
}

type balance = {
    value: number,
    date: string,
    description: string
}

export const usersBank : account [] = [
    {
        name: 'Patrícia',
        CPF: Math.random(),
        dateOfBirth: '18/08/1986',
        balance: 5.000,
        bankStatement : []
    },
    {
        name: 'Rafael',
        CPF: Math.random(),
        dateOfBirth: '16/05/1985',
        balance: 0,
        bankStatement : []
    },
    {
        name: 'Pedro',
        CPF: Math.random(),
        dateOfBirth: '08/12/2020',
        balance: 0,
        bankStatement: []
    }
]