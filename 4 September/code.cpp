class Solution {
    public:
        int findClosest(int x, int y, int z) {
            // Calculate distance of Person 1 and Person 2 from Person 3
            int dist1 = abs(x - z);
            int dist2 = abs(y - z);
    
            if (dist1 < dist2) {
                return 1;   // Person 1 reaches first
            } else if (dist2 < dist1) {
                return 2;   // Person 2 reaches first
            } else {
                return 0;   // Both reach at the same time
            }
        }
    };
    