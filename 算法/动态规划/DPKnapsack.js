// 测试数据
var goods = [{}, {}, {}, {}, {}];
goods[1].weight = 2;
goods[2].weight = 1;
goods[3].weight = 3;
goods[4].weight = 2;
goods[1].value = 12;
goods[2].value = 10;
goods[3].value = 20;
goods[4].value = 15;

// 二维矩阵
var V = [5];	// 记录价值总和
var b = [5];	// 记录路径
for (var i = 0; i <= 4; i++) {
	V[i] = [0,0,0,0,0,0];
	b[i] = ["0","0","0","0","0","0"];
}

// 初始化第“1”行
for (var w = 0; w <= 5; w++) {
	if (w < goods[1].weight) {
		V[1][w] = 0;
		b[1][w] = "^";
	} else {
		V[1][w] = goods[1].value;
		b[1][w] = "<";
	}
}

// 从第二列，算法开始
for (var i = 2; i <= 4; i++) {
	for (var w = 0; w <= 5; w++) {
		if (goods[i].weight > w) {
			// goods[i]超重，一定放不下，和放之前一样
			V[i][w] = V[i-1][w];
			b[i][w] = "^";
		} else {
			// 未超重，要看看怎么和其他东西搭配
			var v1 = V[i-1][w-goods[i].weight] + goods[i].value;
			var v2 = V[i-1][w];
			if (v1 > v2){
				V[i][w] = v1;
				b[i][w] = "<";
			} else {
				V[i][w] = v2;
				b[i][w] = "^";
			}
		}
	}
}

// 根据 b 打印出最佳方案的算法
function PrintKnapsackItem(i, w) {
	if (i == 0 || w == 0) {
		return 0;
	}
	if (b[i][w] == "<") {
		PrintKnapsackItem(i-1, w - goods[i].weight);	// 和上面算法过程是相反的
		console.log(i);
	} else {
		PrintKnapsackItem(i-1, w);
	}
}
PrintKnapsackItem(4, 5);
