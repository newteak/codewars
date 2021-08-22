package _8kyu.n001_n010.n001.multiply;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

@DisplayName("Multiply Class")
public class MultiplyTest {
    @DisplayName("#multiply")
    @Nested
    class Describe_multiply {
        @DisplayName("With (1, 5)")
        @Nested
        class Context_with_1_5 {
            @DisplayName("Return 5")
            @Test
            void It_return_5() {
                final int expected = 5;
                final int actual = Multiply.multiply(1, 5);

                Assertions.assertEquals(expected, actual);
            }
        }

        @DisplayName("With (10, 5)")
        @Nested
        class Context_with_10_5 {
            @DisplayName("Return 50")
            @Test
            void It_return_50() {
                final int expected = 50;
                final int actual = Multiply.multiply(10, 5);

                Assertions.assertEquals(expected, actual);
            }
        }

        @DisplayName("With (10, -5)")
        @Nested
        class Context_with_10_m5 {
            @DisplayName("Return -50")
            @Test
            void It_return_m50() {
                final int expected = -50;
                final int actual = Multiply.multiply(10, -5);

                Assertions.assertEquals(expected, actual);
            }
        }
    }
}
