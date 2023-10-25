def fib():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a+b

def even_fib_sum():
    sum = 0
    for i in fib():
        if i > 4000000:
            break
        if i % 2 == 0:
            sum += i
    return sum

print(even_fib_sum())