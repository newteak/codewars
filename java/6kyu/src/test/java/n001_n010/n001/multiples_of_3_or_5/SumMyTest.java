package n001_n010.n001.multiples_of_3_or_5;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

@DisplayName("SumMyClass")
public class SumMyTest {
    @DisplayName("#sumMultiples3Or5")
    @Nested
    class Describe_multiples3Or5 {
        @DisplayName("With (-10)")
        @Nested
        class Context_with_m10 {
            @DisplayName("Return 0")
            @Test
            void It_return_0() {
                final int expected = 0;
                final int actual = SumMy.sumMultiples3Or5(-10);

                Assertions.assertEquals(expected, actual);
            }
        }

        @DisplayName("With (0)")
        @Nested
        class Context_with_0 {
            @DisplayName("Return 0")
            @Test
            void It_return_0() {
                final int expected = 0;
                final int actual = SumMy.sumMultiples3Or5(0);

                Assertions.assertEquals(expected, actual);
            }
        }

        @DisplayName("With (5)")
        @Nested
        class Context_with_5 {
            @DisplayName("Return 3")
            @Test
            void It_return_3() {
                final int expected = 3;
                final int actual = SumMy.sumMultiples3Or5(5);

                Assertions.assertEquals(expected, actual);
            }
        }

        @DisplayName("With (6)")
        @Nested
        class Context_with_6 {
            @DisplayName("Return 8")
            @Test
            void It_return_8() {
                final int expected = 3 + 5;
                final int actual = SumMy.sumMultiples3Or5(6);

                Assertions.assertEquals(expected, actual);
            }
        }

        @DisplayName("With (15)")
        @Nested
        class Context_with_15 {
            @DisplayName("Return 45")
            @Test
            void It_return_45() {
                final int expected = 3 + 5 + 6 + 9 + 10 + 12 ;
                final int actual = SumMy.sumMultiples3Or5(15);

                Assertions.assertEquals(expected, actual);
            }
        }

        @DisplayName("With (16)")
        @Nested
        class Context_with_16 {
            @DisplayName("Return 60")
            @Test
            void It_return_60() {
                final int expected = 3 + 5 + 6 + 9 + 10 + 12 + 15;
                final int actual = SumMy.sumMultiples3Or5(16);

                Assertions.assertEquals(expected, actual);
            }
        }
    }
}
