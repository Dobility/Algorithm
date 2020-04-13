#include <stdio.h>
int n;
int a1[11], a2[11], e1[11], e2[11], x1, x2, f1[11], f2[11], l1[11], l2[11], $f, $l;

void getValue() {
	scanf("%d", &n);
	for (int i = 1; i <= n; i++) {
		scanf("%d", &a1[i]);
		scanf("%d", &e1[i]);
		scanf("%d", &a2[i]);
		scanf("%d", &e2[i]);
	}
	scanf("%d", &x1);
	scanf("%d", &x2);
}

void _TEST_copyArray(int dest[], int source[], int length) {
	for (int i = 1; i <= length; i++) {
		dest[i] = source[i];
	}
}
void _TEST_exampleValue() {
	n = 6;
	int _a1[] = {0, 7, 9, 3, 4, 8, 4};
	int _a2[] = {0, 8, 5, 6, 4, 5, 7};
	int _e1[] = {0, 2, 2, 3, 1, 3, 4};
	int _e2[] = {0, 4, 2, 1, 2, 2, 1};
	_TEST_copyArray(a1, _a1, n);
	_TEST_copyArray(a2, _a2, n);
	_TEST_copyArray(e1, _e1, n);
	_TEST_copyArray(e2, _e2, n);
	x1 = 3;
	x2 = 2;
}
void _TEST_traverse(int a[], int n) {
	for (int i = 1; i <= n; i++) {
		printf("%d ", a[i]);
	}
	printf("\n");
}

int min(int a, int b, int &c) {
	if (a <= b) {
		c = 1;
		return a;
	} else {
		c = 2;
		return b;
	}
}

void DPFFastestWay() {
	f1[1] = e1[1] + a1[1];
	f2[1] = e2[1] + a2[1];
	for (int i = 1; i <= n; i++) {
		f1[i+1] = min(f1[i] + a1[i+1], f2[i] + e2[i+1] + a1[i+1], l1[i]);
		f2[i+1] = min(f1[i] + e1[i+1] + a2[i+1], f2[i] + a2[i+1], l2[i]);
	}
	$f = min(f1[n]+x1, f2[n]+x2, $l);
}

void printStations(int l, int index) {
	if (index == 1) {
		printf("line %d, station %d\n", l, index);
	} else {
		if (l == 1) {
			printStations(l1[index-1], index-1);
		} else {
			printStations(l2[index-1], index-1);
		}
		printf("line %d, station %d\n", l, index);
	}
}

void _TEST_printStations(int l, int index) {
	if (index > 0) {
		if (l == 1) {
			printStations(l1[index-1], index-1);
		} else {
			printStations(l2[index-1], index-1);
		}
		printf("line %d, station %d\n", l, index);
	}
}

int main() {
	// getValue();
	_TEST_exampleValue();
	DPFFastestWay();
	// printStations($l, n);
	_TEST_printStations($l, n);
	// _TEST_traverse(f1, n);
	// _TEST_traverse(f2, n);
	printf("cost: %d\n", $f);
	return 0;
}
