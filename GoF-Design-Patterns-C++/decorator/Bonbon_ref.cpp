#include <iostream>

using namespace std;

class Bonbon {

public:
	virtual void getGout() const=0;
	virtual double getPrix() const=0;
	Bonbon() {
		cout << "+++" << endl;
	}
	virtual ~Bonbon() {
		cout << "---" << endl;
	}
};

class Sucre: public Bonbon {
public:
	void getGout() const {
		cout << " Sucre";
	}
	double getPrix() const {
		return 0.30;
	}
};

class Decorateur: public Bonbon {
private:

protected:
	const Bonbon &composant;
public:
	Decorateur(const Bonbon &b) :
			composant(b) {
	}
	;
};

class Citron: public Decorateur {
private:

public:
	Citron(const Bonbon &b) :
			Decorateur(b) {
	}
	;
	void getGout() const {
		cout << " Citron";
		composant.getGout();
	}
	double getPrix() const {
		return 0.10 + composant.getPrix();
	}
};

class Orange: public Decorateur {
public:
	Orange(const Orange& b) :
			Decorateur(b) {
		cout << "constructeur par copie\n";
	}
	Orange(const Bonbon &b) :
			Decorateur(b) {
	}
	;
	double getPrix() const {
		return 0.10 + composant.getPrix();
	}
	void getGout() const {
		cout << " Orange";
		composant.getGout();
	}
};

class Miel: public Decorateur {
public:
	Miel(Bonbon &b) :
			Decorateur(b) {
	}
	;
	double getPrix() const {
		return 0.10 + composant.getPrix();
	}
	void getGout() const {
		cout << " Miel";
		composant.getGout();
	}
};

int main() {
	Sucre n;
	Citron c(n);
	Orange o1(c);
	Orange o2(o1);
	o2.getGout();
	cout << endl;
	cout << "Prix : " << o2.getPrix() << endl;
}
