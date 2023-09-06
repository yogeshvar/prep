array = [1,2,3,4,5,6,7]
init_array = [1,2,3,4,5,6]

# Searching element in array:
def search(arr, x):
    for elem in arr:
        if elem == x:
            return True
    return False

# Test case:
print(search(array, 4)) # True
print(search(array, -1)) # False

# Searching elment in array (return index):
def search_index(arr, x):
    for i in range(len(arr)):
        if arr[i] == x:
            return i
    return -1

# Test case:
print(search_index(array, 4)) # 3
print(search_index(array, -1)) # -1

# Reverse an array
def reverse(arr):
    return arr[::-1]

def reverse_v2(arr):
    start = 0
    end = len(arr) - 1
    while start <= end:
        temp = arr[end]
        arr[end] = arr[start]
        arr[start] = temp
        start = start + 1
        end = end - 1
    return arr
    
def reverse_v3(arr, start, end):
    if start <= end:
        return arr
    arr[start], arr[end] = arr[end], arr[start]
    return reverse_v3(arr, start + 1, end - 1)
    

print(reverse(array)) # [7, 6, 5, 4, 3, 2, 1]
print(reverse_v2(array)) # [7, 6, 5, 4, 3, 2, 1]
print(reverse_v3(array, 0, len(array))) # [7, 6, 5, 4, 3, 2, 1]

# Rotations:
## Rotate one by one: 
def rotate_one_l(arr, d):
    arr[:] = arr[d:(len(arr))] + arr[0:d]
    return arr

def rotate_one_l_v2(arr, d):
    while d > 0:
        last = arr[0]
        for i in range(len(arr) - 1):
            arr[i] = arr[i + 1]
        arr[len(arr) - 1] = last
        d = d - 1
    return arr

def rotate_one_l_v3(arr, d):
    new_arr = []
    new_start = arr.index(d)
    new_arr = arr[new_start+1:] + arr[0:new_start+1]
    return new_arr

import math
def rotate_one_l_v4(arr, d):
    # juggling algo
    for i in range(math.gcd(d, len(arr))):
        temp = arr[i]
        j = i
        while 1:
            k = j + d
            if k >= len(arr):
                k = k - len(arr)
            if k == i:
                break
            arr[j] = arr[k]
            j = k
            arr[j] = temp
    return arr

def reverseArray(arr, start, end):
    while start <= end:
        temp = arr[end]
        arr[end] = arr[start]
        arr[start] = temp
        start = start + 1
        end = end - 1
    return arr

def rotate_one_l_v5(arr, d):
    # reversal algorithm
    d = d % len(arr)
    arr = reverseArray(arr, 0, d-1)
    arr = reverseArray(arr, d, len(arr) - 1)
    return reverseArray(arr, 0, len(arr) - 1)

    
        
print(rotate_one_l(array, 2)) # [5, 4, 3, 2, 1, 7, 6]
print(rotate_one_l_v2(init_array, 2)) # [3, 4, 5, 6, 1, 2]
print(rotate_one_l_v3(init_array, 2)) # [3, 4, 5, 6, 1, 2]
print(rotate_one_l_v4(init_array, 2)) # [5, 6, 1, 2, 3, 4]
print(rotate_one_l_v5(init_array, 2)) # [1, 2, 3, 4, 5, 6]

def insert_elem(arr, elem, pos):
    arr.insert(pos, elem)
    return arr
    
print(insert_elem(init_array, 7, 7)) # [1, 2, 3, 4, 5, 6, 7]

def delete_elem(arr, elem):
    arr.remove(elem)
    return arr

print(delete_elem(init_array, 7)) # [1, 2, 3, 4, 5, 6]

def binary_search(arr, low, high, key):
    if high < low:
        return -1
    mid = (low + high) // 2
    if key == arr[mid]:
        return mid
    if key > arr[mid]:
        return binary_search(arr, mid + 1, high, key)
    return binary_search(arr, low, mid - 1, key)

print(binary_search(init_array, 0, len(init_array) - 1, 9)) # -1
print(binary_search(init_array, 0, len(init_array) - 1, 3)) # 2
