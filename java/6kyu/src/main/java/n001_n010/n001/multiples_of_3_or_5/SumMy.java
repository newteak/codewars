package n001_n010.n001.multiples_of_3_or_5;

import java.util.ArrayList;
import java.util.List;

public class SumMy {
    public static int sumMultiples3Or5(int num) {
        return getMultiples3Or5(num).stream().mapToInt(Integer::intValue).sum();
    }

    private static List<Integer> getMultiples3Or5(int num) {
        ArrayList<Integer> multiples3Or5 = new ArrayList<>();

        if (num < 0) {
            return multiples3Or5;
        }

        for (int i = 1; i < num; i++) {
            if (i % 3 == 0) {
                multiples3Or5.add(i);
                continue;
            }

            if (i % 5 == 0) {
                multiples3Or5.add(i);
            }
        }

        return multiples3Or5;
    }
}
