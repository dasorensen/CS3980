# Assignment 1

## Part 1 (echo.py)

To simulate a real world echo, the code in echo.py uses a loop to print out substrings of decreasing length that is dependent on the amount of repetitions that are desired (default is 3). Screenshots of the code and sample outputs are provided below. [Please click here to view the source code](https://github.com/dasorensen/CS3980/blob/main/Assignment%201/echo.py)


![Screenshot of echo code](https://github.com/user-attachments/assets/24eff7c1-bed6-4e08-b0a1-38b19ab2e5e1)

![Screenshot of echo output](https://github.com/user-attachments/assets/4a11f9eb-3ebb-4625-b68b-b20fa86864b1)


## Part 2 (fib.py)

This part of the assignment asked for a program that recursively calculates the number in the Fibonacci sequence from 0 to 100 and show how long it takes for the program to complete each calculation. To improve the running time of the program, the lru_cache decorator from functools was used. Additionally, a timer decorator was implemented for the timing requirement of the assignment. Screenshots of the code and the output are provided below. [Please click here to view the source code](https://github.com/dasorensen/CS3980/blob/main/Assignment%201/fib.py)


![Screenshot of fib code](https://github.com/user-attachments/assets/19dc23d5-df70-46a9-8873-9dfa5bdf1edf)

![First Screenshot of fib output](https://github.com/user-attachments/assets/fa6a546b-951a-4c40-a371-6f4b908d238b)

![Second Screenshot of fib output](https://github.com/user-attachments/assets/115cdba3-a7b3-47c5-9a5b-6678de32e6c5)

The image below is the plot that was created from the output of the program. The n in the Fibonacci number calculation is shown on the x-asis, while the time for each execution is shown on the y-axis in seconds. As the graph shows, the time it takes for the program to complete the calculation grows fairly linearly. This is due to the lru_cache decorator as without it the runtime for a recursive Fibonacci program grows exponentially. The lru_cache uses memoization (storing previous values of the function call) to improve the speed of the calculations. This means that for each recursive call, the function only needs to add the previous two results as opposed to running the complete recursion every time. 

![Fibonacci plot](https://github.com/dasorensen/CS3980/blob/main/Assignment%201/Fibonacci%20Plot.png)
