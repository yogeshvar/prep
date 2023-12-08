from collections import Counter


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        else:
            sCounter = Counter(s)
            tCounter = Counter(t)
            return sCounter == tCounter
