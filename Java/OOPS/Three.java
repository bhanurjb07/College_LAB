import java.util.*;
public class Three{
    public static void main(String args[]){
        int arr[] = {1,2,3,5,4,9,8,6,7,10};
        int high = Integer.MIN_VALUE, lowest = Integer.MAX_VALUE;
        for(int i=0; i<10; i++){
            high = Math.max(high, arr[i]);
            lowest = Math.min(lowest, arr[i]);
        }
        System.out.println("Highest= " + high);
        System.out.println("Smallest= " + lowest);
    }
}
