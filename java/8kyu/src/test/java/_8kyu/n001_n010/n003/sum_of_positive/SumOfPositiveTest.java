package _8kyu.n001_n010.n003.sum_of_positive;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

@DisplayName("SumOfPositiveClass")
public class SumOfPositiveTest {
    @DisplayName("#sumPositive")
    @Nested
    class Describe_sumPositive {
        @DisplayName("With (new int[]{1, 2})")
        @Nested
        class Context_with_1_2 {
            @DisplayName("Return 3")
            @Test
            void It_return_3() {
                final int expected = 3;
                final int actual = SumOfPositive.sumPositive(new int[]{1, 2});

                Assertions.assertEquals(expected, actual);
            }
        }

        @DisplayName("With (new int[]{100, 2, -10})")
        @Nested
        class Context_with_100_2_m10 {
            @DisplayName("Return 102")
            @Test
            void It_return_102() {
                final int expected = 102;
                final int actual = SumOfPositive.sumPositive(new int[]{100, 2, -10});

                Assertions.assertEquals(expected, actual);
            }
        }

        @DisplayName("With (new int[]{})")
        @Nested
        class Context_with_ {
            @DisplayName("Return 0")
            @Test
            void It_return_102() {
                final int expected = 0;
                final int actual = SumOfPositive.sumPositive(new int[]{});

                Assertions.assertEquals(expected, actual);
            }
        }
    }
}
