#include <iostream>
using namespace std; 

int main () {
    string name = "Jahongir"; 
    int num = 23; 
    char myChar = 'C'; 
    double myDouble = 23.343; 
    bool myBool = true; 

    std::cout << &name << endl; 
    std::cout << &num << endl; 
    std::cout << &myChar << endl; 
    std::cout << &myDouble << endl; 
    std::cout << &myBool << endl; 
    cout << "Finish"; 
    return 0; 
}