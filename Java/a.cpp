// #include<iostream>
// using namespace std;
// int main(){
//     int oddsum = 0;
//     for(int i=1; i<100; i += 2){
//         oddsum += i;
//     }
//     cout<<"Odd sum till 100 = "<<oddsum<<endl;
//     return 0;
// }


// #include <bits/stdc++.h>
// using namespace std;
// int main() {
//     int arr[10] = {1,2,3,5,4,9,8,6,7,10};
//     int high = INT_MIN, lowest = INT_MAX;
//     for(int i=0; i<10; i++){
//         high = max(high, arr[i]);
//         lowest = min(lowest, arr[i]);
//     }
//     cout<<"Highest= "<<high<<endl;
//     cout<<"Smallest= "<<lowest<<endl;
//     return 0;
// }

#include <bits/stdc++.h>
using namespace std;
int main() {
    cout<<"Enter String: "<<endl;
    string str;
    cin>>str;
    cout<<"Size of String is : "<<str.length()<<endl;
    string temp =str;
    reverse(temp.begin(),temp.end());
    cout<<"Reversed String is: "<<temp<<endl;
    if(str == temp)cout<<"Pallindrome";
    else cout<<"Not a Pallindrome Stirng";
    return 0;
}