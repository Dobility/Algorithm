#include <stdio.h>
#include <queue>

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

using namespace std;

// 广度优先访问
void BFS(int s, char vertex[], int edge[][N]);
// 广度优先访问结点时的操作
void visitVertex(char vertex);

/**
 * [BFS 图的广度优先遍历]
 * @param s      [从结点s开始]
 * @param vertex [图的结点集合]
 * @param edge   [图的边权值集合]
 */
void BFS(int s, char vertex[], int edge[][N]) {
	int color[N];
	int d[N];
	int pi[N];
	queue<int> Q;
	for (int i = 0; i < N; i++) {
		color[i] = WHITE;		// 初始化每个结点颜色为未访问的白色
		d[i] = INF;				// 初始化s到每个结点的距离为无穷大
		pi[i] = NIL;			// 初始化每个结点的直接父节点为空
	}
	color[s] = GRAY;
	d[s] = 0;
	pi[s] = NIL;
	Q.push(s);
	while (!Q.empty()) {
		int u = Q.front();
		Q.pop();
		for (int v = 0; v < N; v++) {
			if (edge[u][v] != INF && u != v) {
				// for each v∈adj[u]
				if (color[v] == WHITE) {
					color[v] = GRAY;
					d[v] = d[u] + 1;
					pi[v] = u;
					Q.push(v);
				}
			}
		}
		color[u] = DARKGRAY;
		visitVertex(vertex[u]);
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
	int s = 0;
	if (argc > 1) {
		s = atoi(argv[1]);
	}
	BFS(s, vertex, edge);
	printf("\n");
	return 0;
}
