#include <iostream>
#include <cstdio>
#include <map>
#include <string>
#include <cmath>
#include <cstring>
using namespace std;
int main() {
    int n;
    cin>>n;
    int p[35];
    memset(p, 0, sizeof(p));
    for(int i = 1; i <= n; i++) {
        int num;
        cin>>num;
        for(int j = 0; j < 32; j++) {       // 32：int字长
            p[j] += ((num>>j) & 1);         // 把 num 转成十进制放在 p 中，并每次都累加在一起
        }                                   // 比如：123 变成 p数组： 00000000 00000000 00000000 01111011
    }                                       // 下一个数也转成 32bit 长的二进制，和上一步的二进制每一位数学累加
                                            // 比如再来一个 123，则 p数组变成：00000000 00000000 00000000 02222022
    int k = 1;
    int ans = 0;
    for(int i = 0; i < 32; i++) {           // 如果只是3个相同的数累加，二进制上每一位的数字肯定能被 3 整除
        ans += k * (p[i] % 3);              // 如果3个相同的数有其他数，那么有一些位就不能被 3 整除，求余后，刚好就是那个不同的数！
        k *= 2;                             // 这里是对 p 这个“32bit二进制数”每一位进行余3运算，最后产生一个二进制数（余3后每一位是 0 或 1）
    }                                       // 最后把二进制数转成十进制就可以了
    cout<<ans<<endl;
    return 0;
}
