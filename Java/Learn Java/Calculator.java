import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        System.out.println("This is a CBSE board percentage calculator");
        Scanner sc = new Scanner(System.in);
        float total = 500;
        System.out.println("Marks of English");
        float eng = sc.nextFloat();
        System.out.println("Marks of Mathematics");
        float maths = sc.nextFloat();
        System.out.println("Marks of Social Science");
        float ssci = sc.nextFloat();
        System.out.println("Marks of Hindi/Bengali");
        float lan2 = sc.nextFloat();
        System.out.println("Marks of Science");
        float sci = sc.nextFloat();
        float sum = eng + maths + ssci + lan2 + sci;
        System.out.println("Total Marks out of "+total+" is "+sum);
        float percent = (sum / total) * 100;
        System.out.println("Your Percentage is "+percent+"%");
    }
}