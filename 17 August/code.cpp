class Solution {
public:
    double new21Game(int n, int k, int maxPts) {
        if (k == 0 || n >= k - 1 + maxPts) return 1.0;

        vector<double> dp(n + 1, 0.0);
        dp[0] = 1.0;
        double Wsum = 1.0, res = 0.0;

        for (int i = 1; i <= n; i++) {
            dp[i] = Wsum / maxPts;

            if (i < k) {
                Wsum += dp[i];   // add into window only if < k
            } else {
                res += dp[i];    // stop condition: accumulate result
            }

            if (i - maxPts >= 0) {
                Wsum -= dp[i - maxPts]; // maintain sliding window
            }
        }
        return res;
    }
};
