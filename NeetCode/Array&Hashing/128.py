nums = [0,0]

if not nums:
    max_streak = 0
else:
    nums.sort()

    max_streak = 1
    current_streak = 1

    for i in range(1, len(nums)):
        if nums[i] == nums[i-1] + 1:
            current_streak += 1
        elif nums[i] == nums[i-1]:
            continue
        else:
            current_streak = 1  # Reset to 1 for a new potential streak
        max_streak = max(max_streak, current_streak)
print(max_streak)
