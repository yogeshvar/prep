def isValid(s): 
    stack = []
    for i in s:
        if i in '(':
            stack.append(i)
        if i in '{':
            stack.append(i)
        elif i in ']})':
            if stack.pop() in '({[':
                return True
    return False
        

        
    
    
isValid("()[]{}")
