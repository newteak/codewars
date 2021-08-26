package n001_n010.n001.multiples_of_3_or_5;

import java.util.stream.IntStream;

public class Sum {
    public static int sumMultiples3Or5(int num) {
        return IntStream
                .range(0, num)
                .filter(n -> (n % 3 == 0) || (n % 5 == 0))
                .sum();
    }
}
