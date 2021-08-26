package _8kyu.n001_n010.n003.sum_of_positive;

import java.util.Arrays;

public class SumOfPositive {
    public static int sumPositive(int[] arr) {
        return Arrays.stream(arr).filter(e -> e > 0).sum();
    }
}
