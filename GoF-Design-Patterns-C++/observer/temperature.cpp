#include <iostream>
#include <vector>

using namespace std;

template <typename T> class Observable;

template <typename T> class Observateur{
public:
	virtual void actualiser(Observable<T> *o)=0;
	virtual ~Observateur(){};
};

template <typename T> class Observable{
	vector<Observateur<T> *> observateurs;
public:
	void inscrire(Observateur<T> *o){observateurs.push_back(o);}
	void notifier(){
		for(unsigned i=0 ; i<observateurs.size() ; i++){
			observateurs[i]->actualiser(this);
		}
	}
	virtual T getValue()=0;
	virtual ~Observable(){}
	
};

class Sonde : public Observable<double>{
	double valeur;
public:
	Sonde():valeur(10){}
	void setTemperature(double temperature){
		valeur=temperature;
		notifier();
	}
	double getValue(){return valeur;}
};

template <typename T> class Sonde2 : public Observable<T>{
	T valeur;
public:
	Sonde2():valeur(10){}
	void setTemperature(double temperature){
		valeur=temperature;
		//notifier();
	}
	T getValue(){return valeur;}
};

class Chaudiere : public Observateur<double>{
	double consigne;
public:
	Chaudiere():consigne(19){}
	void actualiser(Observable<double> *o){
		if(o->getValue()< consigne)
			cout << "CHAUDIERE : MARCHE" << endl;
		else
			cout << "CHAUDIERE : ARRET" << endl;
	}
};


int main(){
	Observable<int>* s2 = new Sonde2<int>();
	Sonde *s = new Sonde();
	Chaudiere *ch =  new Chaudiere();
	s->inscrire(ch);
	s->setTemperature(12);
	s->setTemperature(25);

	delete s;
	delete ch;
}
