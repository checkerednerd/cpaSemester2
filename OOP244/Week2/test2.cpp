#include<iostream>
#include<cstring>
using namespace std;

namespace earth {
	bool water = true;
	bool flora = true;
	bool fauna = true;
	bool fascism = true;
	char name[] = "Earth";
}

namespace moon {
	bool water = false;
	bool flora = false;
	bool fauna = false;
	bool fascism = false;
	char name[] = "Moon";
}

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