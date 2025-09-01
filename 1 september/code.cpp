class Solution {
public:
    double maxAverageRatio(vector<vector<int>>& classes, int extraStudents) {
        // Custom comparator for max heap based on gain
        auto gain = [](int pass, int total) {
            return (double)(pass + 1) / (total + 1) - (double)pass / total;
        };

        // Max heap: store {gain, pass, total}
        priority_queue<array<double, 3>> pq;
        
        for (auto &c : classes) {
            int pass = c[0], total = c[1];
            pq.push({gain(pass, total), (double)pass, (double)total});
        }

        // Assign extra students
        while (extraStudents--) {
            auto top = pq.top(); pq.pop();
            double pass = top[1], total = top[2];
            pass += 1;
            total += 1;
            pq.push({gain(pass, total), pass, total});
        }

        // Calculate final average ratio
        double sum = 0.0;
        while (!pq.empty()) {
            auto top = pq.top(); pq.pop();
            double pass = top[1], total = top[2];
            sum += pass / total;
        }
        return sum / classes.size();
    }
};