#include <iostream>
using namespace std; 

int main() {
  string food = "Pizza";  // A string variable
  string* ptr = &food;  // A pointer variable that stores the address of food

  // Output the value of food
  cout << food + "\n";

  // Output the memory address of food
  cout << &food << endl;

  // Output the memory address of food with the pointer
  cout << ptr << endl;

  // Let's get the value of the variable using pointer
  cout << *ptr << endl; // Pizza
  return 0;
}