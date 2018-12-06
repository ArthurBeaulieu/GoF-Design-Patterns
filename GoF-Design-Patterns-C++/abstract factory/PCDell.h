#ifndef __PCDELL_H__
#define __PCDELL_H__

#include "PCFactory.h"
#include <iostream>

class EcranDell : public Ecran{
public:
	void afficher(){std::cout << "ECRAN DELL\n";}
};
class ClavierDell : public Clavier{
public:
	void afficher(){std::cout << "CLAVIER DELL\n";}
};

class UCDell : public UniteCentrale {
public:
	void afficher(){std::cout << "UC DELL\n";}
};

class DellFactory : public PCFactory{
public:
	Ecran* creerEcran(){return new EcranDell();}
	Clavier* creerClavier(){return new ClavierDell();}
	UniteCentrale* creerUC(){return new UCDell();}
};

#endif