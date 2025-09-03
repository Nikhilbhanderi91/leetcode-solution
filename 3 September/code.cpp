class Solution {
public:
    int numberOfPairs(vector<vector<int>>& points) {
        int n = points.size();
        
        // sort by x ascending, y descending
        sort(points.begin(), points.end(), [](const vector<int>& a, const vector<int>& b){
            if (a[0] != b[0]) return a[0] < b[0];
            return a[1] > b[1];
        });

        int ans = 0;
        // for each possible Alice at i
        for (int i = 0; i < n; i++) {
            int maxY = INT_MIN;
            // iterate Bob as j > i
            for (int j = i + 1; j < n; j++) {
                // Alice must be upper-left of Bob
                if (points[i][1] >= points[j][1]) {
                    // valid if no point between had y in [points[j][1], points[i][1]]
                    if (maxY < points[j][1]) {
                        ans++;
                    }
                }
                // update maxY for next iteration
                if (points[j][1] <= points[i][1]) {
                    maxY = max(maxY, points[j][1]);
                }
            }
        }
        return ans;
    }
};
