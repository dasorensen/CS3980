from functools import lru_cache
from time import time


def timer(func):
    def wrapper(*args, **kwargs):
        start_time = time()
        x = func(*args, **kwargs)
        end_time = time()
        print(f"Finished in {(end_time - start_time):.8f}s: f(", *args, f") -> {x}")
        return x

    return wrapper


@lru_cache
@timer
def fib(n: int) -> int:
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)


if __name__ == "__main__":
    fib(100)
