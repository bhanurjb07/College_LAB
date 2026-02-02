//https://leetcode.com/problems/palindrome-number/
#include <iostream>
using namespace std;
class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0)return false;
        int original= x;   
        int rev = 0;
        while (x > 0) {
            rev = rev *10 +(x % 10);
            x /=10;
        }
        return rev ==original;
    }
};
int main() {
    Solution sol;
    int x = 121;
    if (sol.isPalindrome(x))cout<<"true"<<endl;
    else cout<<"false"<<endl;
}
