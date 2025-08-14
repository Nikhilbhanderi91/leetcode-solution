class Solution {
public:
    string largestGoodInteger(string num) {
        string ans = "";
        for (int i = 0; i <= (int)num.size() - 3; i++) {
            // check substring of length 3
            if (num[i] == num[i + 1] && num[i] == num[i + 2]) {
                string candidate = num.substr(i, 3);
                if (candidate > ans) {
                    ans = candidate;
                }
            }
        }
        return ans;
    }
};