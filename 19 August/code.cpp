class Solution {
public:
    long long zeroFilledSubarray(vector<int>& nums) {
        long long count = 0;      // Total zero-filled subarrays
        long long zeros = 0;      // Current consecutive zeros

        for (int num : nums) {
            if (num == 0) {
                zeros++;           // Extend the current zero sequence
                count += zeros;    // Add all subarrays ending at this zero
            } else {
                zeros = 0;         // Reset if not zero
            }
        }

        return count;
    }
};
