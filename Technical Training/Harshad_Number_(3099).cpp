//https://leetcode.com/problems/harshad-number/description/
#include <iostream>
using namespace std;
class Solution {
public:
    int sumOfTheDigitsOfHarshadNumber(int x) {
        int dSum=0, original = x;
        while(x > 0){
            dSum += x%10;
            x /= 10;
        }
        return (original % dSum==0)? dSum : -1;
    }
};
int main() {
    Solution obj;
    int x = 18;
    cout << obj.sumOfTheDigitsOfHarshadNumber(x);
    return 0;
}