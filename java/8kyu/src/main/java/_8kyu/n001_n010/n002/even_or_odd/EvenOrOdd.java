package _8kyu.n001_n010.n002.even_or_odd;

public class EvenOrOdd {
    /**
     * Judge param is even or odd.
     *
     *
     * @param number - judged num
     *
     * @return when param is even return "Even",and param is odd return "Odd"
     */
    public static String evenOrOdd(int number) {
        return (number % 2 == 0) ? "Even" : "Odd";
    }
}
