#include <stdio.h>
#include <string.h>
#define N 51
int main(int argc, char const *argv[]) {
	char a[N], b[N];
	gets(a);
	gets(b);
	for (int i = 0; i < strlen(a); i++) {
		printf("%d", !(a[i] ^ b[i]));
	}
	putchar('\n');
	return 0;
}
