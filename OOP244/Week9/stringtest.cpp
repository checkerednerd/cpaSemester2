#include <iostream>
#include <cstring>
#include <cstdlib>
#include <iomanip>

using namespace std;

int main() {
	string ugmo = "Hey ugly!";
	string jokes = ", just kidding!";
	cout << ugmo << endl;
	cout << "Testing string.append()..." << endl;
	ugmo.append(jokes);
	cout << ugmo << endl;

	int years[] = {2018, 2018, 1989};
	int months[] = {24, 12, 7};
	int days[] = {20, 11, 25};

	string date1 = to_string(years[0]);
	string date2 = to_string(years[1]);
	
	date1.append(to_string(months[0]));
	date1.append(to_string(days[0]));
	date2.append(to_string(months[1]));
	date2.append(to_string(days[1]));

	cout << date1 << endl << date2 << endl;
	
	int year1 = (stoi(date1.substr(0, 4)));
	cout << year1 << endl;
}
