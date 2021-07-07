#include <iostream>
#include <string>
using namespace std;

int main() {
  string food = "Pizza";
  string* ptr = &food;

  cout << food << "\n"; // Pizza

  cout << &food << "\n"; // memory address
  
  cout << *ptr << "\n"; // Pizza
  
  *ptr = "Hamburger";
  
  cout << *ptr << "\n"; // Hamburger
  
  cout << food << "\n"; // Hamburger

  return 0;
}