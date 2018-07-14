#include <iostream>
#include <cstring>
#include <cstdlib>
#include <iomanip>

bool isBigger(int com1, int com2) {
	if (com1 > com2) {
		return true;
	}
	else {
		return false;
	}
};

int main() {
	int biggest = 1015511;
	std::cout << biggest << std::endl;

	int years[] = {2018, 2017};
	int months[] = {1, 12};
	int days[] = {1, 31};

	int comp1 = ((years[0] * 500) + (months[0] * 40) + days[0]);
	int comp2 = ((years[1] * 500) + (months[1] * 40) + days[1]);

	std::cout << "Comp1 bigger than comp2?" << std::endl;
	std::cout << comp1 << " vs " << comp2 << std::endl;
	std::cout << isBigger(comp1, comp2) << std::endl;
	
	if (isBigger(comp1, comp2)) {
		std::cout << "Comp1 is bigger than Comp2" << std::endl;
	}
	else {
		std::cout << "Comp1 is not bigger than Comp2" << std::endl;
	}
}
