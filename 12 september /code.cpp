class Solution {
    public:
        bool doesAliceWin(string s) {
            int vowels = 0;
            for (char c : s) {
                if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                    vowels++;
                }
            }
            // Alice wins if number of vowels is odd
            return vowels % 2 == 1;
        }
    };
    