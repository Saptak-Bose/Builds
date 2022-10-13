import java.util.*;

public class bonus
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Welcome to the office bonus counter");
        System.out.println("Enter your salary in ₹");
        long sal = sc.nextLong();
        System.out.println("Enter your grade. A/B/C");
        char g = sc.next().charAt(0);
        double bo = 0.0;
        switch(g)
        {
        case 'A':
        case 'a':
            bo = (double) 0.03 * sal;
            break;
        case 'B':
        case 'b':
            bo = (double) 0.07 * sal;
            if (sal > 2500) 
            {
                bo = 2500;
            }
            break;
        case 'C':
        case 'c':
            if (sal <= 10000) 
            {
                bo = (double) 0.05 * sal;
            }
            else if (sal >= 10001 && sal <= 20000)
            {
                bo = (double) 0.10 * sal;
            }
            else if (sal > 20000)
            {
                bo = (double) 0.15 * sal;
            }
        default :
            System.out.println("Invalid Choice");
            break;
        }
        System.out.println("Total Bonus in ₹ is "+bo);
    }
}