class Solution {
    public:
        int n, m;
        
        // Compute bounding rectangle area for 1s inside given subgrid
        int getArea(vector<vector<int>>& grid, int r1, int r2, int c1, int c2) {
            int minR = n, maxR = -1, minC = m, maxC = -1;
            for (int i = r1; i <= r2; i++) {
                for (int j = c1; j <= c2; j++) {
                    if (grid[i][j] == 1) {
                        minR = min(minR, i);
                        maxR = max(maxR, i);
                        minC = min(minC, j);
                        maxC = max(maxC, j);
                    }
                }
            }
            if (maxR == -1) return -1; // no ones in this region
            return (maxR - minR + 1) * (maxC - minC + 1);
        }
        
        int minimumSum(vector<vector<int>>& grid) {
            n = grid.size();
            m = grid[0].size();
            int ans = INT_MAX;
    
            // Case 1: 3 vertical cuts
            for (int c1 = 0; c1 < m-2; c1++) {
                for (int c2 = c1+1; c2 < m-1; c2++) {
                    int a1 = getArea(grid, 0, n-1, 0, c1);
                    int a2 = getArea(grid, 0, n-1, c1+1, c2);
                    int a3 = getArea(grid, 0, n-1, c2+1, m-1);
                    if (a1 != -1 && a2 != -1 && a3 != -1)
                        ans = min(ans, a1 + a2 + a3);
                }
            }
    
            // Case 2: 3 horizontal cuts
            for (int r1 = 0; r1 < n-2; r1++) {
                for (int r2 = r1+1; r2 < n-1; r2++) {
                    int a1 = getArea(grid, 0, r1, 0, m-1);
                    int a2 = getArea(grid, r1+1, r2, 0, m-1);
                    int a3 = getArea(grid, r2+1, n-1, 0, m-1);
                    if (a1 != -1 && a2 != -1 && a3 != -1)
                        ans = min(ans, a1 + a2 + a3);
                }
            }
    
            // Case 3: vertical then horizontal split
            for (int c = 0; c < m-1; c++) {
                for (int r = 0; r < n-1; r++) {
                    // left block + top-right + bottom-right
                    int a1 = getArea(grid, 0, n-1, 0, c);
                    int a2 = getArea(grid, 0, r, c+1, m-1);
                    int a3 = getArea(grid, r+1, n-1, c+1, m-1);
                    if (a1 != -1 && a2 != -1 && a3 != -1)
                        ans = min(ans, a1 + a2 + a3);
    
                    // top block + bottom-left + bottom-right
                    a1 = getArea(grid, 0, r, 0, m-1);
                    a2 = getArea(grid, r+1, n-1, 0, c);
                    a3 = getArea(grid, r+1, n-1, c+1, m-1);
                    if (a1 != -1 && a2 != -1 && a3 != -1)
                        ans = min(ans, a1 + a2 + a3);
    
                    // bottom block + top-left + top-right
                    a1 = getArea(grid, r+1, n-1, 0, m-1);
                    a2 = getArea(grid, 0, r, 0, c);
                    a3 = getArea(grid, 0, r, c+1, m-1);
                    if (a1 != -1 && a2 != -1 && a3 != -1)
                        ans = min(ans, a1 + a2 + a3);
    
                    // right block + top-left + bottom-left
                    a1 = getArea(grid, 0, n-1, c+1, m-1);
                    a2 = getArea(grid, 0, r, 0, c);
                    a3 = getArea(grid, r+1, n-1, 0, c);
                    if (a1 != -1 && a2 != -1 && a3 != -1)
                        ans = min(ans, a1 + a2 + a3);
                }
            }
    
            return ans;
        }
    };