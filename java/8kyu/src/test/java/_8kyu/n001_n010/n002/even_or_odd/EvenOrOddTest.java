package _8kyu.n001_n010.n002.even_or_odd;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

@DisplayName("EvenOrOddClass")
public class EvenOrOddTest {
    @DisplayName("#evenOrOdd")
    @Nested
    class Describe_evenOrOdd {
        @DisplayName("With (1)")
        @Nested
        class Context_with_1 {
            @DisplayName("Return Odd")
            @Test
            void It_return_odd() {
                final String expected = "Odd";
                final String actual = EvenOrOdd.evenOrOdd(1);

                Assertions.assertEquals(expected, actual);
            }
        }

        @DisplayName("With (2)")
        @Nested
        class Context_with_2 {
            @DisplayName("Return Even")
            @Test
            void It_return_odd() {
                final String expected = "Even";
                final String actual = EvenOrOdd.evenOrOdd(2);

                Assertions.assertEquals(expected, actual);
            }
        }

        @DisplayName("With (3)")
        @Nested
        class Context_with_3 {
            @DisplayName("Return Odd")
            @Test
            void It_return_odd() {
                final String expected = "Odd";
                final String actual = EvenOrOdd.evenOrOdd(3);

                Assertions.assertEquals(expected, actual);
            }
        }

        @DisplayName("With (4)")
        @Nested
        class Context_with_4 {
            @DisplayName("Return Even")
            @Test
            void It_return_odd() {
                final String expected = "Even";
                final String actual = EvenOrOdd.evenOrOdd(4);

                Assertions.assertEquals(expected, actual);
            }
        }
    }
}
