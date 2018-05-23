#include<iostream>
#include"namespacePrac.h"

using namespace std;

int main() {
	cout << "Hello, ugly" << endl;
	cout << "Enter a player name: ";
	cin >> player::name; //notice we did not have to include the player namespace (it is already included with the header file directive)
	
	cout << "So your name is: " << player::name << "?" << endl;
	return 0;
}