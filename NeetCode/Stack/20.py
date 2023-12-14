def isValid(s):
    stack = []
    bracket_mapping = {')': '(', '}': '{', ']': '['}

    for i in s:
        if i == '(' or i == '{' or i == '[':
            stack.append(i)
        elif i in bracket_mapping:
            if not stack or stack.pop() != bracket_mapping[i]:
                return False

    return not stack
