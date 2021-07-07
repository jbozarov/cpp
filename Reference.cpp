#include <iostream>
using namespace std; 

int main() {
    string food = "Pizza"; 
    string foodTwo = food; 
    string &refFood = food; 
    cout << food << endl; // Pizza
    cout << foodTwo << endl; // Pizza 
    cout << refFood << endl; // Pizza 

    food = "No food"; 
    cout << food << endl; // No food
    cout << foodTwo << endl; // Pizza 
    cout << refFood << endl; // No food 

    return 0; 
}