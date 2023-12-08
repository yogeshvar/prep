class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counter = Counter(nums)
        heap = [(-value, key) for key, value in counter.items()]
        heapify(heap)

        result = []
        while k > 0:
            result.append(heappop(heap)[1])
            k -= 1

        return result
