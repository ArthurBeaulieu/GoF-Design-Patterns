#include <iostream>

using namespace std;

class VolStrategie;

class Canard{
	VolStrategie* volStrategie;

public:
	Canard();
	~Canard();
	void voler();
	void applyVolStrategie(VolStrategie* volStrategie);
};

class VolStrategie{
public:
	virtual void voler()=0;
	virtual ~VolStrategie(){};
};

class VolRapide:public VolStrategie{
	void voler(){
		cout << "Vol rapide" << endl;
	}
};

class VolNormal:public VolStrategie{
	void voler(){
		cout << "Vol normal" << endl;
	}
};

Canard::Canard(){
	volStrategie = new VolNormal();
}
Canard::~Canard(){
	delete this->volStrategie;
}
void Canard::voler(){
	this->volStrategie->voler();
}

void Canard::applyVolStrategie(VolStrategie* volStrategie){
	delete this->volStrategie;
	this->volStrategie = volStrategie;
}

int main(){
	Canard canard;
	canard.voler();
	canard.applyVolStrategie(new VolRapide());
	canard.voler();
}


