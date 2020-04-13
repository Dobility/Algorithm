#include <stdio.h>

// 结点个数
#define	N	7
// 无穷大
#define	INF	100000000

void KruskalMST(char vertex[], int edge[][N]);
void sortAsc(int arr[][3], int length);
void swap(int &a, int &b);

/**
 * [KruskalMST 最小生成树贪心算法：每次挑权值最小边]
 * @param vertex [图的结点集合]
 * @param edge   [图的边权值集合]
 */
void KruskalMST(char vertex[], int edge[][N]) {
	int set[N*(N+1)/2+1][4];
	int graph[N][N] = {0};
	int length = 0;
	for (int i = 0; i < N; i++) {
		for (int j = i + 1; j < N; j++) {
			graph[i][j] = INF;
			if (edge[i][j] != INF) {
				set[length][0] = i;				// 存储i
				set[length][1] = j;				// 存储j
				set[length][2] = edge[i][j];		// 存储权值
				set[length][3] = 0;				// 存储是否加入到集合中
				length++;
			}
		}
	}
	sortAsc(set, length);
	for (int i = 0; i < length; i++) {
		if (addNoCircle(set[i], graph)) {
			set[i][3] = 1;
			graph[set[i][0]][set[i][1]] = set[i][2];
		}
	}
}

/**
 * [sortAsc 对数组进行递增排序，这里使用简单的冒泡排序]
 * @param arr [数组]
 * @param length [数组长度]
 */
void sortAsc(int arr[][3], int length) {
	for (int i = 0; i < length - 1; i++) {
		int index = i;
		int small = arr[i][2];
		for (int j = i + 1; j < length; j++) {
			if (arr[j][2] < small) {
				small = arr[j][2];
				index = j;
			}
		}
		if (index != i) {
			swap(arr[i][0], arr[index][0]);
			swap(arr[i][1], arr[index][1]);
			swap(arr[i][2], arr[index][2]);
		}
	}
}

/**
 * [swap 交换两个数]
 */
void swap(int &a, int &b) {
	a ^= b ^= a ^= b;
}

void addNoCircle(int edge[], int graph[][N]) {
	for (int i = 0; i < N; i++) {
		for (int j = i+1; j < N; j++) {
			
		}
	}
}

int main(int argc, char const *argv[]) {
	// 结点集
	char vertex[N] = {'a', 'b', 'c', 'd', 'e', 'f', 'g'};
	// 边权值集
	int edge[N][N]= {{0,2,INF,8,14,INF,INF},
					{2,0,19,INF,25,INF,INF},
					{INF,19,0,INF,17,5,9},
					{8,INF,INF,0,21,INF,INF},
					{14,25,17,21,0,13,INF},
					{INF,INF,5,INF,13,0,1},
					{INF,INF,9,INF,INF,1,0}};
	KruskalMST(vertex, edge);
	return 0;
}
