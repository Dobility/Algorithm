#include <stdio.h>
#include <stdlib.h>

int str_len(char *str);

int main(){
    char *str = (char *)malloc(100*sizeof(char));
    scanf("%s",str);
    printf("%d", str_len(str));
    free(str);
    return 0;
}

int str_len(char *str){
//请在这里完成你的函数
    int i = 0;
    while (str[i++] != '\0') {}
    return i - 1;
}
