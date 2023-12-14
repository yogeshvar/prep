class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:

        nums.sort()

        result = []
        for i in range(len(nums)):
            start = i + 1
            end = len(nums) - 1
            while start < end:
                if start > i + 1 and nums[start] == nums[start - 1]:
                    start += 1
                    continue
                if end < len(nums) - 1 and nums[end] == nums[end + 1]:
                    end -= 1
                    continue
                if nums[i] + nums[start] + nums[end] == 0:
                    if [nums[i], nums[start], nums[end]] not in result:
                        result.append([nums[i], nums[start], nums[end]])
                    start += 1
                    end -= 1
                elif nums[i] + nums[start] + nums[end] < 0:
                    start += 1
                else:
                    end -= 1
        return result
