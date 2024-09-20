const validateValue = require("./validateValue")

describe("Тестирование значения функции", () => {
    test("Если вызвать функцию с переменной равной 50, то вернется true", () => {
        const result= validateValue(50)
        expect(result).toBe(true)
    }),
    test("Если вызвать функцию с переменной равной пограничному значению 0, то вернется false", () => {
        const result= validateValue(0)
        expect(result).toBe(true)
    }),
    test("Если вызвать функцию с переменной равной пограничному значению 100, то вернется false", () => {
        const result= validateValue(100)
        expect(result).toBe(true)
    }),
    test("Если вызвать функцию с переменной равной -10, то вернется false", () => {
        const result= validateValue(-10)
        expect(result).toBe(false)
    })
    test("Если вызвать функцию с переменной равной 101, то вернется false", () => {
        const result= validateValue(101)
        expect(result).toBe(false)
    })
})