import java.util.Scanner;
import java.util.List;
import java.util.ArrayList;

class Student {
	String	name;		// 名字
	int		total;		// 泥塑体积
	public Student(int length, int width, int height, String name) {
		this.total = length * width * height;
		this.name = name;
	}
}

public class Main {
    public static void main(String []args) {
    	Scanner sc = new Scanner(System.in);
    	int n = sc.nextInt();
    	while (n > 0) {
    		List<Student> stuList = new ArrayList<Student>();
    		for (int i = 0; i < n; i++) {
    			stuList.add(new Student(sc.nextInt(), sc.nextInt(), sc.nextInt(), sc.next()));
    		}
    		int minIndex = 0, maxIndex = 0;
    		for (int i = 1; i < stuList.size(); i++) {
    			if (stuList.get(i).total < stuList.get(minIndex).total) {
    				minIndex = i;
    			}
    			if (stuList.get(i).total > stuList.get(maxIndex).total) {
    				maxIndex = i;
    			}
    		}
            System.out.println(stuList.get(maxIndex).name + " took clay from " + stuList.get(minIndex).name + ".");
    		n = sc.nextInt();
    	}
    }
}