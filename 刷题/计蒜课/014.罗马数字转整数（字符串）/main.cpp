#include <stdio.h>
#include <string.h>
#define N 100

int valueOf(char sym) {
	switch(sym) {
		case 'M':
			return 1000;
		case 'D':
			return 500;
		case 'C':
			return 100;
		case 'L':
			return 50;
		case 'X':
			return 10;
		case 'V':
			return 5;
		case 'I':
			return 1;
		default:
			return 0;
	}
}

int main(int argc, char const *argv[]) {
	char RomanSym[7] = {'M', 'D', 'C', 'L', 'X', 'V', 'I'};
	int  RomanNum[7] = {1000, 500, 100, 50, 10, 5, 1};
	char s[N];
	int  count = 0;
	scanf("%s", s);
	// strcpy(s, argv[1]);
	int  sLength = strlen(s);
	s[sLength] = ' ';
	if (sLength < 2) {
		count = valueOf(s[0]);
	} else {
		int prev = 0;
		int back = 0;
		for (int i = 0; i < sLength; i++) {
			prev = valueOf(s[i]);
			back = valueOf(s[i+1]);
			if (prev < back) {
				count += (back - prev);
				i++;
			} else {
				count += prev;
			}
		}
	}
	printf("%d\n", count);
	return 0;
}
