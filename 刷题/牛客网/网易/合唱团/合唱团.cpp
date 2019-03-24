#define N 51
#include <iostream>
typedef long long ll;
using namespace std;

int n;
int skill[N];
int k, d;

ll INF_MAX = 0xffffffff;

void readParam() {
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> skill[i];
    }
    cin >> k >> d;
}

ll max(ll a, ll b) {
    return (a > b) ? a : b;
}

ll min(ll a, ll b) {
    return (a < b) ? a : b;
}

ll hct() {
    ll f[N][k], g[N][k];
    // 初始化 f, g
    for (int last = 0; last < N; last++) {
        f[last][0] = g[last][0] = skill[last];
        for (int j = 1; j < k; j++) {
            f[last][j] = g[last][j] = 0;
        }
    }
    // 自底向上递推
    for (int _k = 1; _k < k; _k++) {
        for (int last = _k; last < n; last++) {
            ll _max = -INF_MAX, _min = INF_MAX;
            for (int left = max(_k - 1, last - d); left < last; left++) {
                ll cur_max = max(f[left][_k - 1] * skill[last], g[left][_k - 1] * skill[last]);
                ll cur_min = min(f[left][_k - 1] * skill[last], g[left][_k - 1] * skill[last]);
                _max = (_max > cur_max) ? _max : cur_max;
                _min = (_min < cur_min) ? _min : cur_min;
            }
            f[last][_k] = _max;
            g[last][_k] = _min;
        }
    }
    // 获取最大值
    ll _max = -INF_MAX;
    for (int i = n - 1; i >= 0; i--) {
        _max = max(_max, f[i][k - 1]);
    }
    return _max;
}

int main() {
    readParam();
    cout << hct() << endl;
    return 0;
}
