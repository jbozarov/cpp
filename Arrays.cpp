#include <iostream>
#include <string>
using namespace std;

int main() {
  string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
  int size = sizeof(cars); 
  int arrSize = *(&cars + 1) - cars; 
  for (int i = 0; i < arrSize; i++ ) {
      cout << cars[i] + "\n";
  }
  return 0; 
}
