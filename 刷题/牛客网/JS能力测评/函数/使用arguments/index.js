function useArguments() {
    return Array.from(arguments).reduce((a, b) => a + b)
}
