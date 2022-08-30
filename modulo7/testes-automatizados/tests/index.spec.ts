import { performPurchase } from "../src/"
import { User } from "../src/type"

describe('Testing balance greater than value', () => {

    test('Testing balance greater than value', () => {

        const user: User = {
            name: 'Patrícia',
            balance: 1500
        }

        const result = performPurchase(user, 800)
        expect(result).toEqual({
            name: 'Patrícia',
            balance: 1500
        })
    })
})

