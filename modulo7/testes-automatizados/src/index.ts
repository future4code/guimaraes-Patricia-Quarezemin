import { User } from "./type";

//Exercício 1

export function performPurchase(user: User, value: number): User | undefined {
    if (user.balance >= value) {
        return {
            ...user,
            balance: user.balance - value
        }
    }

    return undefined
}
