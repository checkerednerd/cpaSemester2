#include<iostream>
using namespace std;

struct Kingdom {
	char name[20];
	int pop;
};

int main () {
	char a[] = "My name is Jonas";
	cout << a << endl;
	cout << "Size of A: " << sizeof(a) << endl;

	const char* b = new char[sizeof(a)]; //this needed to be made a const to take the String literal
	cout << "Size of B: " << sizeof(b) << endl;
	b = "Deal with it";
	cout << b << endl;
	cout << "Size of B: " << sizeof(b) << endl;
	
	//because const only prevents run-time users from altering values, we can
	//reassign b in the code without problem (I think...)
	
	b = "Change";
	cout << b << endl;
	cout << "Size of B: " << sizeof(b) << endl;
	
	const char* c = new char[sizeof(a)];
	cout << sizeof(a) << ":A, B:" << sizeof(b) << endl;
	
	c = a; //array of c takes the values of array a 
	cout << c << endl;
	cout << "Size of C: " << sizeof(c) << endl;
	cout << endl << endl;
	
	struct Kingdom one = {"Marx", 40};
	cout << one.name << endl;
	
	struct Kingdom two = {"Samsom", 22};
	cout << two.name << endl;
	
	two = one; //the values at Kingdom two were over written by the values at one
	cout << two.name << " " << two.pop << endl;
	
	int size = 0;
	cout << "How many? ";
	cin >> size;
	struct Kingdom kList[size]; //an array of structs Kingdom
	struct Kingdom kListCopied[size]; //an array of structs to try and take the values of the first (copied)
	
	//populate array of structs 
	for (int i = 0; i < size; i++) {
		cout << "Name: ";
		cin >> kList[i].name;
		cout << "Population: ";
		cin >> kList[i].pop;
	}
	
	//display array of structs
	for (int i = 0; i < size; i++) {
		cout << kList[i].name << " " << kList[i].pop << endl;
	}
	
	//copy array of structs to another array of structs
	for (int i = 0; i < size; i++) {
		kListCopied[i] = kList[i];
	}
	
	//display copied array of structs
	for (int i = 0; i < size; i++) {
		cout << kListCopied[i].name << " " << kListCopied[i].pop << endl;
	}
	
	cout << kList << endl << kListCopied << endl; //prints the address of the arrays of Kingdoms
	
	char addr[] = &kListCopied;
}