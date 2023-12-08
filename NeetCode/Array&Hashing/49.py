class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hash_table = {}
        for s in strs:
            key = ''.join(sorted(s))
            if key in hash_table:
                hash_table[key].append(s)
            else:
                hash_table[key] = [s]
        return list(hash_table.values())
