import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String s = sc.nextLine().trim();
		String[] ss = s.split(" ");
		System.out.println(ss[ss.length - 1].length());
	}
}