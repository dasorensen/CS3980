from functools import lru_cache
from time import time
import matplotlib.pyplot as plt


fib_timing = []


def timer(func):
    def wrapper(*args, **kwargs):
        start_time = time()
        x = func(*args, **kwargs)
        end_time = time()
        fib_timing.append(end_time - start_time)
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

    n_range = range(0, 101)
    plt.plot(n_range, fib_timing)
    plt.xlabel("n")
    plt.ylabel("Time [sec]")
    plt.show()
