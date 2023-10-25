def largestPalindromeProduct():
    while True:
        biggest = 0
        for i in range(999, 99, -1):
            for j in range(999, 99, -1):
                product = i * j
                if str(product) == str(product)[::-1]:
                    biggest = max(biggest, product)
        return biggest
            
print(largestPalindromeProduct())
