#include <stdio.h>

// TODO: Learn everything
/*  wow a multi-line comment
    fun
*/

int main() {

    printf("I am learning C in \"clion\" \\ \t \n");
    int x = 50;
    char myChar = 'Y';
    float myFloat = 5.993444;
    int y = 60;

    printf("my fav number is: %d\n", x);
    printf("%c\n",myChar);
    printf("%f\n", myFloat);
    printf("i'm %d and my fav character is %c\n", x, myChar);
    x++;
    printf("%d\n", x);
    if (x < y) {
        printf("Hello, World!\n");
    }

    return 0;
}
