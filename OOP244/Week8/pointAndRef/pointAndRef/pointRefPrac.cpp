#include <iostream>

void Increment(int* param) {
	//Order of operations means increment will happen before dereference, we don't want that
	(*param)++;	//dereference the value at the memory address before incrementing
}

void Increment2(int& param) {
	param++;
}

int main() {
	int var = 16;
	void* ptr = &var; //remember, the type of pointer is almost superfluous
	//type is mostly for us, so we know what is expected of the data at the address
	//a pointer will ALWAYS only have an address on the road (memory)

	std::cout << "-------------\nPointers...\n-------------" << std::endl;
	std::cout << "ptr: " << ptr << std::endl; //print the memory address

	int a = 10;
	int b = 20;
	int * cPtr = nullptr;

	cPtr = &a; //points the c pointer to the address of a
	//remember, this does not mean c contains 10, only that it
	//is pointing at the address of a now

	std::cout << "&a: " << &a << std::endl; //outputs the address of a
	std::cout << "cPtr: " << cPtr << std::endl; //outputs the address of a
	std::cout << "a: " << a << std::endl; //outputs the data stored at the address of a
	std::cout << "*cPtr: " << *cPtr << std::endl; //DEREFERENCE THE POINTER - outputs the data stored at the address of a
	//THIS is where types come in, if we try and dereference the void pointer ptr...
	//std::cout << *ptr << std::endl; THIS FAILED

	std::cout << "a: " << a << std::endl; //outputs the address of a
	std::cout << "b: " << b << std::endl; //outputs the address of a

	int var2 = 32;
	int* ptr2 = &var2; //create pointer, point to address of var2
	std::cout << "*ptr2: " << *ptr2 << std::endl; //DEREFERENCED the pointer to get the data at ptr2, which points to the address of var2
	//references are just pointers in disguise
	//references are syntax sugar on top of pointers for easier read/usibility
	//references are not new variables, they need to reference existing variables

	std::cout << "-------------\nPointers and Functions...\n-------------" << std::endl;

	int var3 = 5;
	int* ptr3 = &var3; //
	int& varRef = var3;

	std::cout << "var3: " << var3 << std::endl;
	std::cout << "varRef: " << varRef << std::endl;
	varRef--;
	std::cout << "varRef--" << std::endl;
	std::cout << "var3: " << var3 << std::endl;
	//when you decremented the reference to var3, it decremented var3

	//this is useful when we want to pass a memory address to a function, just like a pointer
	Increment(ptr3); //can run increment with the pointer, as it contains the memory address of 
	std::cout << "After running Increment on ptr3: " << *ptr3 << std::endl;
	Increment(&var3);
	std::cout << "After running Increment on &var3: " << var3 << std::endl;


	//if we wanted to save ourselves some syntax, can use references instead of pointers
	std::cout << "-------------\nReferences...\n-------------" << std::endl;
	Increment2(var3);
	std::cout << "After running Increment2 on var3: " << var3 << std::endl;
	//this did the exact same thing as the pointers, only the parameter
	//being a reference, it will handle the derefencing for you
	//REMEMBER: a reference can't do what a pointer can't do, it's just sugar coating
	//REMEMBER: a reference is just an alias, it's not a real variable

	int& refVar3 = var3; //this is just an alias for var3
	std::cout << "refVar3: " << refVar3 << std::endl;
	refVar3 *= 2;
	std::cout << "refVar3 * 2..." << std::endl;
	std::cout << "var3: " << refVar3 << std::endl;
	//when we alter the reference of var3, it alters var3

	Increment2(refVar3);
	std::cout << "After running Increment2 on refVar3: " << var3 << std::endl;
	//THEREFORE: it looks like our compiler will let us pass a variable or a reference variable to a reference parameter

	//a reference, like a pointer, must reference something when created
	//we cannot change this reference unless through pointer...
	int var4 = var3;
	int* varRef4 = &var4; //pointers point to addresses, not data
	std::cout << "var4: " << var4 << std::endl;
	*varRef4 = 2; //set the data at address of varRef4 (var4) to 2...
	std::cout << "var4: " << var4 << std::endl;
	
	varRef4 = &var3;
	std::cout << "var3: " << var3 << std::endl;
	*varRef4 = 1;
	std::cout << "var3: " << var3 << std::endl;
	//NOTICE: in the above example, we used one pointer to change
	//two values, just by changing the address the pointer points to
}