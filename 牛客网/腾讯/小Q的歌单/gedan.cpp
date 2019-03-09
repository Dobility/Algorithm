#include <stdio.h>
long long int factorial(int n){
	long long int res = 1;
	if(n == 0){
		res = 1;
	} else {
		for(int i=1; i<=n; i++){
			res *= i;
		}
	}
	return res;
}

int main(){
	int n, m, al, bl, total, tmp=0, i, j;
	long long int res = 0;
	scanf("%d", &total);
	scanf("%d %d %d %d", &al, &n, &bl, &m);
	if(total % al == 0){
		res += (factorial(n)/factorial(total / al)/factorial(n - total / al));
	}
	if(total % bl == 0){
		res += (factorial(m)/factorial(total / bl)/factorial(m - total / bl));
	}
	for(i=1; i<=n; i++) {
		for(j=1; j<=m; j++) {
			tmp = i * al + j * bl;
			if(tmp == total){
				res += (factorial(n)/factorial(i)/factorial(n-i)) * (factorial(m)/factorial(j)/factorial(m-j));
				continue;
			}
		}
	}
	printf("%d", res%1000000007);
	return 0;
}
