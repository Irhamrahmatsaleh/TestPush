#include <iostream>
#include <string>
#include <vector>

// Function to display a welcome message
void displayWelcomeMessage() {
  std::cout << "Welcome to the Radiant Program!" << std::endl;
}

// Function to get user input
std::string getUserInput(const std::string& prompt) {
  std::string input;
  std::cout << prompt;
  std::getline(std::cin, input);
  return input;
}

// Function to process user input
void processInput(const std::string& input) {
  std::cout << "You entered: " << input << std::endl;
}

// Function to display a list of options
void displayOptions() {
  std::cout << "Options:" << std::endl;
  std::cout << "1. Enter a new input" << std::endl;
  std::cout << "2. Exit" << std::endl;
}

// Main function
int main() {
  displayWelcomeMessage();

  bool running = true;
  while (running) {
    displayOptions();
    std::string choice = getUserInput("Please choose an option: ");

    if (choice == "1") {
      std::string input = getUserInput("Enter your input: ");
      processInput(input);
    } else if (choice == "2") {
      running = false;
    } else {
      std::cout << "Invalid option. Please try again." << std::endl;
    }
  }

  std::cout << "Thank you for using the Radiant Program. Goodbye!" << std::endl;
  return 0;
}
