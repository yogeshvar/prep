def smallestNumber(range):
    number = 1
    for i in range:
        if number % i > 0:
            for j in range:
                if (number * j) % i == 0:
                    number *= j
                    break
    return number

print(smallestNumber(range(1, 20)))
