export const isString = (string: string): boolean => {
    return typeof string === "string";
}

export const isNumber = (number: number) => {
    return typeof number === "number"
}

export const valueParser = (type: string, errorDescription: string, value: any) => {
    if (type === "string") {
        if (!isString(value)) {
            throw new Error(`${errorDescription}`)
        }
        return value
    }
    if (type === "number") {
        if (!isNumber(value)) {
            throw new Error(`${errorDescription}`)
        }
        return value
    }
}