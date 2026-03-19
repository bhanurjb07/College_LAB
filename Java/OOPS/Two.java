import java.util.*;
public class Two{
    public static void main(String args[]){
        int oddSum = 0, count=0;
        for(int i=1; i<100; i += 2){
            oddSum += i;
            count++;
        }    
        System.out.println("Odd sum till 100 = " + oddSum);
        System.out.println("Total number of odsd values: " + count);
    }
}