#include <stdio.h>
#define N 1001
#define S -9999

int getDistinctLength(int A[], int n) {
	int _n = n;
	for (int i = 0; i < n - 1; i++) {
		if (A[i] == S) {
			continue;
		}
		for (int j = i + 1; j < n; j++) {
			if (A[j] == A[i]) {
				_n--;
				A[j] = S;
			}
		}
	}
	return _n;
}

int main(int argc, char const *argv[]) {
	int n = 0;
	int A[N];
	scanf("%d", &n);
	for (int i = 0; i < n; i++) {
		scanf("%d", &A[i]);
	}
	printf("%d\n", getDistinctLength(A, n));
	return 0;
}
