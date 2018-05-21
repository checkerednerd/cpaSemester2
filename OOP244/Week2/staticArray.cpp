#include<iostream>
#define STATIC_SIZE 3
using namespace std;

int main() {
	int staticArray[STATIC_SIZE];
	//char * word = nullptr;
	
	for (int i = 0; i < STATIC_SIZE; i++) {
		staticArray[i] = (i + 5);
		cout << staticArray[i] << endl;
	}
	return 0;
}