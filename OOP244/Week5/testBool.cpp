#include<iostream>
using namespace std;

int main() {
	int tester[5] = {0};

	bool notFull = tester[4] != 0;
	while(notFull)	{
	if (notFull) {
		cin >> tester[4];
	} else {
		cout << "No room!" << endl;
	}
	}
}
