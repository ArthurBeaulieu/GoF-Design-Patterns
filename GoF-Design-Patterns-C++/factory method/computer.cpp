#include <iostream>
#include <string>
using namespace std;

struct Computer{
	string board;
	string screen;

	void show(){
		cout<<"Computer : "<<board<<" - "<<screen<<endl;
	}
};

class ComputerFactory{
public:
	Computer* create(){
		Computer* c = new Computer();
		c->board = this->createBoard();
		c->screen = this->createScreen();
		return c;
	}
	virtual ~ComputerFactory(){}

private:
	virtual string createBoard()=0;
	virtual string createScreen()=0;
};

class DellComputerFactory : public ComputerFactory{
	string createBoard(){
		return "Dell board";
	}

	string createScreen(){
		return "Dell screen";
	}
};

class SonyComputerFactory : public ComputerFactory{
	string createBoard(){
		return "Sony board";
	}

	string createScreen(){
		return "Sony screen";
	}
};

int main(){
	ComputerFactory* factory = new DellComputerFactory();


	Computer* c = factory->create();
	c->show();

	delete c;
	delete factory;
}




