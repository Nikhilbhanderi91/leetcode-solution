class Solution {
public:
    int maximum69Number (int num) {
        string s = to_string(num);  // Convert number to string
        for (char &c : s) {
            if (c == '6') {        // Change the first '6' to '9'
                c = '9';
                break;             // Only one change allowed
            }
        }
        return stoi(s);            // Convert back to integer
    }
};
