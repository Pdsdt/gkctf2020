#include<stdio.h>
#include<stdlib.h>
int main() {
	setgid(0);
	setuid(0);
	system("cat /flag");
	return 0;
}
