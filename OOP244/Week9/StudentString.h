 // Student.h

#include <iostream> // for std::ostream, std::istream
#include <cstring>
#include <string>

const int NG = 20;

 class Student {
	std::string name;
     int no;
     float grade[NG];
     int ng;
 public:
     Student();
     Student(int);
     Student(std::string, int, const float*, int);
     void read(std::istream&);
     void display(std::ostream& os) const;
 };

 std::istream& operator>>(std::istream& is, Student& s);
 std::ostream& operator<<(std::ostream& os, const Student& s); 
