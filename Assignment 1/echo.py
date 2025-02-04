def echo(text: str, repetitions: int = 3) -> str:
    """Imitate a real-world echo."""
    for i in range(repetitions):
        print(text[len(text) - (repetitions - i) :])

    return "."


if __name__ == "__main__":
    text = input("Yell something at a mountain: ")
    print(echo(text))
