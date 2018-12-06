#include <iostream>

using namespace std;

class Imprimante{
public:
	static Imprimante* getInstance(){
		if(instance==NULL)
			instance = new Imprimante();
		return instance;}
	void imprimer(){ cout << "impression\n";}
private:
	Imprimante(){}
	static Imprimante* instance;
};

Imprimante* Imprimante::instance = NULL;

int main(){

	Imprimante * imp = Imprimante::getInstance();
	imp->imprimer();
}

