import java.util.*;
public class One{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a: ");
        int a = sc.nextInt();
        System.out.println("Enter b: ");
        int b = sc.nextInt();
        System.out.println("Enter c: ");
        int c = sc.nextInt();
        int greatest = (a > b ? (a>c ? a : c) : (b>c ? b : c));
        System.out.println("Greatest number is :  "+ greatest);
        sc.close();
    }
}