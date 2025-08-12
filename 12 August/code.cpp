class Solution {
    public:
        static const int MOD = 1000000007;
        int numberOfWays(int n, int x) {
            // generate powers i^x <= n (as integers)
            vector<int> powers;
            for (long long base = 1;; ++base) {
                long long p = 1;
                for (int i = 0; i < x; ++i) p *= base;  // safe since n<=300 and x<=5
                if (p > n) break;
                powers.push_back((int)p);
            }
    
            // 0/1 knapsack counting combinations (each power used at most once).
            vector<int> dp(n + 1, 0);
            dp[0] = 1;
            for (int val : powers) {
                for (int s = n; s >= val; --s) {
                    dp[s] = (dp[s] + dp[s - val]) % MOD;
                }
            }
            return dp[n];
        }
    };