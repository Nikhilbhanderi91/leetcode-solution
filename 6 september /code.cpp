class Solution {
public:
    long long minOperations(vector<vector<int>>& queries) {
        // Precompute powers of 4 up to > 1e9
        vector<long long> pow4;
        pow4.push_back(1);
        while (pow4.back() <= 1000000000LL) {
            pow4.push_back(pow4.back() * 4LL);
        }
        long long total = 0;
        for (auto &q : queries) {
            long long l = q[0], r = q[1];
            // find s = largest index such that pow4[s] <= r
            int s = int(upper_bound(pow4.begin(), pow4.end(), r) - pow4.begin()) - 1;
            int max_t = s + 1; // t(r) = floor_log4(r) + 1

            long long sum_t = 0;
            // k = 1..max_t where numbers with t=k are in [4^(k-1), 4^k - 1]
            for (int k = 1; k <= max_t; ++k) {
                long long low = pow4[k-1];
                long long high = pow4[k] - 1;
                if (high < l || low > r) continue;
                long long overlap = min(r, high) - max(l, low) + 1;
                if (overlap > 0) sum_t += overlap * 1LL * k;
            }

            long long ops_needed = max<long long>(max_t, (sum_t + 1) / 2);
            total += ops_needed;
        }
        return total;
    }
};