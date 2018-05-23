#include<iostream>
#include<cstring>
#include"earthMoon.h"
using namespace std;
using namespace earth;
using namespace moon;


int main() {
	cout << "The " << earth::name << ": " << endl;
	cout << "Water: " << earth::water << endl;
	cout << "Flora: " << earth::flora << endl;
	cout << "Fauna: " << earth::fauna << endl;
	cout << "Fascism: " << earth::fascism << endl << endl;
	
	cout << "The " << moon::name << ": " << endl;
	cout << "Water: " << moon::water << endl;
	cout << "Flora: " << moon::flora << endl;
	cout << "Fauna: " << moon::fauna << endl;
	cout << "Fascism: " << moon::fascism << endl;
	
	return 0;
}
