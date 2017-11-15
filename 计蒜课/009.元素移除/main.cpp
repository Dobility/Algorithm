#include <stdio.h>
#define N 101

int removeElement(int A[], int n, int elem) {
	int _n = n;
	for (int i = 0 ; i < n; i++) {
		if (A[i] == elem) {
			_n--;
		}
	}
	return _n;
}

int main(int argc, char const *argv[]) {
	int n = 0, elem = 0;
	int A[N];
	scanf("%d", &n);
	for (int i = 0; i < n; i++) {
		scanf("%d", &A[i]);
	}
	scanf("%d", &elem);
	printf("%d\n", removeElement(A, n, elem));
	return 0;
}