import java.util.Scanner;

public class if_else
{
    public static void main()
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your name");
        String n = sc.nextLine();
        System.out.println("Enter your age");
        int age = sc.nextInt();
        System.out.println("Enter your gender (M/F)");
        char g = sc.next().charAt(0);
        System.out.println("Name "+n);
        if (age == 0) 
        {
            System.out.println("Wrong age!!!!!");
        }
        else if (age <= 10) 
        {
            System.out.println("You are a kid and your age is "+age);
        }
        else if (age <= 17) 
        {
            System.out.println("You are a teenager and your age is "+age);
        }
        else if (age <= 60)
        {
            System.out.println("You are an adult and your age is "+age);
        }
        else if (age <= 99)
        {
            System.out.println("You are old aged and your age is "+age);
        }
        else if (age >= 100)
        {
            System.out.println("Congratulations on hitting a century. Your age is "+age);
        }
    }
}