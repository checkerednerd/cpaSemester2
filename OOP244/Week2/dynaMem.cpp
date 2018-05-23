#include<iostream>
using namespace std;

struct Player{
	char name[20];
	char city[20];
	int number;
};

int main(void) {
	int size;
	Player* players = nullptr;
	cout << "How big is the team, son?" << endl;
	cin >> size;
	players = new Player[size];
	
	for (int i = 0; i < size; i++) {
		cout << "Player name: ";
		cin >> players[i].name;
		
		cout << "Team city: ";
		cin >> players[i].city;
		
		cout << "Player number: ";
		cin >> players[i].number;
	}
	
	for (int i = 0; i < size; i++) {
			cout << players[i].name << endl;
			cout << players[i].city << endl;
			cout << players[i].number << endl;
	}
	
	return 0;
}