#include <iostream>
#include <map>
#include <string>

using namespace std;

class Construction{
	string nom;
public:
	Construction(string name):nom(name){}
	virtual ~Construction(){}
	virtual string& getNom(){
		return nom;
	}
};

class Maison : public Construction{
public:
	Maison(string nom):Construction(nom){}
};

class Hotel : public Construction{
public:
	Hotel(string nom):Construction(nom){}
};

enum Key{
	MAISON, HOTEL
};

class ConstructionFactory{
private :
	map<Key,Construction*> constructions;
	ConstructionFactory(){
		constructions[MAISON] = new Maison("maison");
		constructions[HOTEL] = new Hotel("hotel");
	};
	~ConstructionFactory(){
		delete constructions[MAISON];
		delete constructions[HOTEL];
	}
	static ConstructionFactory* instance;

public:
	static ConstructionFactory* getInstance(){
		if(instance==nullptr){
			instance = new ConstructionFactory();
		}
		return instance;
	}

	Construction* getConstruction(Key key){
		return constructions[key];
	}

};

ConstructionFactory* ConstructionFactory::instance = nullptr;

int main(){
	ConstructionFactory* factory = ConstructionFactory::getInstance();
	Construction* m1 = factory->getConstruction(MAISON);
	Construction* m2 = factory->getConstruction(MAISON);
	cout << hex << m1 << endl << m2 << endl;
}
