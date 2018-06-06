#include<iostream>
#include<cstring>
using namespace std;
int main() {
	char name[20] = "JackyJack";
	char name2[20] = " ";
	cout << name << endl;
	name[0] = '\0';
	cout << "New name is: " << name << endl;
	strcpy(name2, "YUPYUPYUP");
	cout << "NEW NEW name is: " << name2 << endl;
	strcpy(name, name2);
	cout << "NEWEST name is: " << name << endl;
}

