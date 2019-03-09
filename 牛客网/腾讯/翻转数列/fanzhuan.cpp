#include <iostream>
using namespace std;
int main() {
    int n, m;
    cin >> n >> m;
    long long s = (n / m) / 2;
    cout << s * (m * m) << endl;
    return 0;
}
