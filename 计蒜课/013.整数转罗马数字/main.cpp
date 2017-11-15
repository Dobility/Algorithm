#include <stdio.h>
int main(int argc, char const *argv[]) {
	char RomanSym[7] = {'M', 'D', 'C', 'L', 'X', 'V', 'I'};
	int  RomanNum[7] = {1000, 500, 100, 50, 10, 5, 1};
	int  a = 0;
	int  k[7] = {0};
	char output[100];
	scanf("%d", &a);
	for (int i = 0; i < 7; i++) {
		k[i] = a / RomanNum[i];
		a -= k[i] * RomanNum[i];
	}
	a = 0;
	for (int i = 6; i >= 0; i--) {
		// 逆序
		if (k[i] == 4 && k[i-1] == 0) {
			// "4"需要向前借位，[0, 4] -> [1, -1]
			// k[i-1]++;
			// k[i] = -1;	// 可以不要，因为用不到了
			output[a++] = RomanSym[i-1];
			output[a++] = RomanSym[i];
		} else if (k[i] == 4 && k[i-1] == 1) {
			// "9"需要前向借位，[x, 1, 4] -> [x+1, 0, -1];
			// k[i-2]++;
			k[i-1]--;
			// k[i] = -1;	// 可以不要，因为用不到了
			output[a++] = RomanSym[i-2];
			output[a++] = RomanSym[i];
		} else {
			// 其他情况循环输出即可
			for (int j = 0; j < k[i]; j++) {
				output[a++] = RomanSym[i];
			}
		}
	}
	// 逆序输出
	for (int i = a - 1; i >= 0; i--) {
		putchar(output[i]);
	}
	putchar('\n');
	return 0;
}
