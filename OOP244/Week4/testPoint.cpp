#include<iostream>
#include<cstring>
using namespace std;
int main() {
	char name[] = "JackyJack";
	cout << name << endl;
	for (int i = 0; i < sizeof(name);i++) {
		name[i]=' ';
	}
	cout << "New name is: " << name << endl;
}

