import java.util.Scanner;

/**
 * @Author: Dobility
 */
public class Main {

    static final int U = 1, D = 2, L = 3, R = 4;
    static boolean[][] visit;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        String[][] map = new String[n][m];
        for(int i = 0; i< n ; i++){
            map[i] = sc.next().split("");
        }
        visit = new boolean[n][m];
        int x = sc.nextInt();
        int y = sc.nextInt();
        char dirChar = sc.next().charAt(0);
        int dir = U;
        int weight = sc.nextInt();
        if (dirChar == 'D') {
            dir = D;
        } else if (dirChar == 'L') {
            dir = L;
        } else if (dirChar == 'R') {
            dir = R;
        }
        char[] steps = sc.next().toCharArray();
        traverse(map, steps, dir, x, y, weight, n, m);
    }

    /**
     * 遍历
     * @param map      地图
     * @param steps    路径（转化为字符数组）
     * @param dir      初始方向
     * @param x        初始横坐标
     * @param y        初始纵坐标
     * @param weight   背包重量
     */
    public static void traverse(String[][] map, char[] steps, int dir, int x, int y, int weight, int n, int m) {
        int currentWeight = 0;
        for (int i = 0; i < steps.length; i++) {
            if (steps[i] == 'F') {
                int[] position = getNextPosition(dir, x, y, n, m);
                x = position[0];
                y = position[1];
                currentWeight = pickUp(map, x, y, weight, currentWeight);
            } else {
                dir = getTurnDir(dir, steps[i]);
            }
        }
        System.out.println(currentWeight);
    }

    /**
     * 捡内容
     * @param  map           地图
     * @param  x             x坐标
     * @param  y             y坐标
     * @param  weight        总重量
     * @param  currentWeight 当前重量
     */
    public static int pickUp(String[][] map, int x, int y, int weight, int currentWeight) {
        if (!map[x][y].equals(".") && !visit[x][y]) {
            int n = Integer.valueOf(map[x][y]);
            if (currentWeight + n <= weight) {
                return currentWeight + n;
            }
        }
        return currentWeight;
    }

    /**
     * 向左向右转后，最终面朝哪里
     * @param  dir  初始方向
     * @param  turn 要转哪边
     */
    public static int getTurnDir(int dir, char turn) {
        boolean left = (turn == 'L');
        switch (dir) {
            case U:
                return left ? 'L' : 'R';
            case D:
                return left ? 'R' : 'L';
            case L:
                return left ? 'D' : 'U';
            case R:
                return left ? 'U' : 'D';
        }
        return U;
    }

    /**
     * 获取前进的下一个坐标
     * @param  dir 当前方向
     * @param  i   当前x坐标
     * @param  j   当前y坐标
     */
    public static int[] getNextPosition(int dir, int i, int j, int n, int m) {
        // 不需考虑边界，因为路径已经是能走的
        int[] res = new int[2];
        switch (dir) {
            case U:
                res[0]= i - 1;
                res[1] = j;
                break;
            case D:
                res[0]= i + 1;
                res[1] = j;
                break;
            case L:
                res[0]= i;
                res[1] = j - 1;
                break;
            case R:
                res[0]= i ;
                res[1] = j + 1;
                break;
        }
        if (res[0] < 0) {
            res[0] = 0;
        } else if (res[0] >= m) {
            res[0] = m - 1;
        }
        if (res[1] < 0) {
            res[1] = 0;
        } else if (res[1] >= n) {
            res[1] = n - 1;
        }
        return res;
    }




}
