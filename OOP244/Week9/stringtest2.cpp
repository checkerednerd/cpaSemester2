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

	int years[] = {20, 2018, 1989};
	int months[] = {2, 12, 7};
	int days[] = {4, 11, 25};

	string date1 = to_string(years[0]);
	string date2 = to_string(years[1]);
	
	date1.append(to_string(months[0]));
	date1.append(to_string(days[0]));
	date2.append(to_string(months[1]));
	date2.append(to_string(days[1]));

	cout << date1 << endl << date2 << endl;
	
	int year1 = (stoi(date1.substr(0, 4)));
	cout << "Year1: " << year1 << endl;

	string dateFull = "2018/03/10";
	int dyear = (stoi(dateFull.substr(0,4)));
	//int dMon = (stoi(dateFull.substr(5,2)));
	//int dDay = (stoi(dateFull.substr(8,2)));
	
	cout << dateFull << endl << dyear << "|" << dateFull.substr(5,2) << "|" << dateFull.substr(8,2) << endl;
	
	
	char outstring[20];
	sprintf(outstring, "%02d/%02d/%04d", days[0], months[0], years[0]);
	cout << outstring << endl;
}
