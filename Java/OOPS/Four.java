import java.util.*;
public class Fout{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter String:");
        String str = sc.next();
        System.out.println("Size of String is : " + str.length());
        String temp = new StringBuilder(str).reverse().toString();
        System.out.println("Reversed String is: " + temp);
        if(str.equals(temp))System.out.println("Palindrome");
        else System.out.println("Not a Palindrome String");
            
        sc.close();
    }
}