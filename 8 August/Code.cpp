class Solution {
public:
    unordered_map<int, unordered_map<int, double>> memo;

    double helper(int a, int b) {
        if (a <= 0 && b <= 0) return 0.5;  // both empty
        if (a <= 0) return 1.0;            // A empty first
        if (b <= 0) return 0.0;            // B empty first

        if (memo[a][b]) return memo[a][b];

        // 4 operations
        memo[a][b] = 0.25 * (
            helper(a - 100, b) +
            helper(a - 75, b - 25) +
            helper(a - 50, b - 50) +
            helper(a - 25, b - 75)
        );

        return memo[a][b];
    }

    double soupServings(int n) {
        // Optimization for large n, result approaches 1
        if (n >= 5000) return 1.0;

        return helper(n, n);
    }
};
