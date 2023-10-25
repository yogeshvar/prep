def largestPrime(n):
    i = 2
    while i * i <= n:
        if n % i == 0:
            n //= i
        else:
            i += 1
    return n

print(largestPrime(600851475143)) 