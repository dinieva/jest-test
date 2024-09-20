const {sum, square} = require("./mathOperations")

describe("Тестируем функцию sum", () => {
    
    test('Если вызвали функцию суммирования над переменными 1 и 2, то сумма даст 3', () => {
        expect(sum(1, 2)).toBe(3);
    })
    test("Если вызвали функцию sum c переменными, где a = 2 , b = 3, то сумма даст 5", () => {
        const result = sum(2, 3)
        expect(result).toBe(5);
    })
})

describe("Тестируем функцию square", () => {
    test('Если вызвали функцию возведения числа в квадрат,передав переменную со значением 5, то получим 25', () => {
        const result = square(5)
        expect(result).toBe(25);
    })
    test('Если вызвали функцию возведения числа в квадрат,передав переменную со значением 2, то результат меньше 5,результат больше 2, результат не равен undefined', () => {
        const result = square(2)
        expect(result).toBeLessThan(5);
        expect(result).toBeGreaterThan(2);
        expect(result).not.toBeUndefined();
    })
})