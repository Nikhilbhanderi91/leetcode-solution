#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    string sortVowels(string s) {
        auto isVowel = [](char c) {
            c = tolower(c);
            return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
        };
        
        // Collect vowels
        vector<char> vowels;
        for (char c : s) {
            if (isVowel(c)) vowels.push_back(c);
        }
        
        // Sort vowels by ASCII value
        sort(vowels.begin(), vowels.end());
        
        // Replace vowels in the original string with sorted ones
        int idx = 0;
        for (char &c : s) {
            if (isVowel(c)) {
                c = vowels[idx++];
            }
        }
        
        return s;
    }
};