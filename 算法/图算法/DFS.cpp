#include <stdio.h>
#include <stdlib.h>
#include <stack>

// 结点个数
#define	N	7
// 无穷大
#define	INF	100000000
// 父节点为空
#define	NIL	-1

// 结点颜色状态
#define	WHITE		0
#define	GRAY		1
#define	DARKGRAY	2

// 递归深度优先访问
void DFS(int u, char vertex[], int edge[][N]);
// 用栈消除递归进行深度优先访问
void DFS_Stack(int u, char vertex[], int edge[][N]);
// 深度优先访问结点时的操作
void visitVertex(char vertex);

int color[N];		// 结点颜色
int d[N];			// s到这个结点的距离
int pi[N];			// 直接父节点

using namespace std;

/**
 * [DFS 对u进行深度优先递归访问]
 * @param u      [从结点u开始]
 * @param vertex [图的结点集合]
 * @param edge   [图的边权值集合]
 */
void DFS(int u, char vertex[], int edge[][N]) {
	color[u] = GRAY;
	visitVertex(vertex[u]);
	for (int v = 0; v < N; v++) {
		if (edge[u][v] != INF && u != v) {
			// for each v∈adj[u]
			if (color[v] == WHITE) {
				pi[v] = u;
				DFS(v, vertex, edge);
			}
		}
	}
	color[u] = DARKGRAY;
}

/**
 * [DFS_Stack 用栈消除递归进行深度优先递归访问]
 * @param u      [从结点u开始]
 * @param vertex [图的结点集合]
 * @param edge   [图的边权值集合]
 */
void DFS_Stack(int u, char vertex[], int edge[][N]) {
	stack<int> S;
	color[u] = GRAY;
	S.push(u);
	while (!S.empty()) {
		int v = S.top();
		S.pop();
		color[v] = DARKGRAY;
		visitVertex(vertex[v]);
		for (int k = 0; k < N; k++) {
			if (edge[v][k] != INF && v != k) {
				// for each k∈adj[v]
				if (color[k] == WHITE) {
					color[k] = GRAY;
					S.push(k);
					break;
				}
			}
		}
	}
	for (int u = 0; u < N; u++) {
		if (color[u] == WHITE) {
			color[u] = GRAY;
			S.push(u);
			while (!S.empty()) {
				int v = S.top();
				S.pop();
				color[v] = DARKGRAY;
				visitVertex(vertex[v]);
				for (int k = 0; k < N; k++) {
					if (edge[v][k] != INF && v != k) {
						// for each k∈adj[v]
						if (color[k] == WHITE) {
							color[k] = GRAY;
							S.push(k);
							break;
						}
					}
				}
			}
		}
	}
}

/**
 * [visitVertex 访问结点时的操作]
 * @param vertex [访问到的结点]
 */
void visitVertex(char vertex) {
	printf("%c ", vertex);
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

	for (int i = 0; i < N; i++) {
		color[i] = WHITE;		// 初始化每个结点颜色为未访问的白色
		pi[i] = NIL;			// 初始化每个结点的直接父节点为空
	}

	int s = 0;
	if (argc > 1) {
		s = atoi(argv[1]);
	}
	// DFS(s, vertex, edge);
	DFS_Stack(s, vertex, edge);
	printf("\n");
	return 0;
}
