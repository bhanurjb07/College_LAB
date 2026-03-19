class Pen{
    String color;
    String type;

    public void write(){             //functions defined inside class are called methods
        System.out.println("Writing something");   
    }
    public void printColor(){
        System.out.println(this.color);
    }
}
public class oops {
    public static void main(String[] args) {
        Pen pen1 = new Pen();
        pen1.color = "blue";
        pen1.type = "gel";

        pen1.write();
        pen1.printColor();
    }
}
