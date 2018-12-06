#ifndef __SONYDELL_H__
#define __SONYDELL_H__

#include "PCFactory.h"
#include <iostream>

class EcranSony : public Ecran{
public:
	void afficher(){std::cout << "ECRAN SONY\n";}
};
class ClavierSony : public Clavier{
public:
	void afficher(){std::cout << "CLAVIER SONY\n";}
};

class UCSony : public UniteCentrale {
public:
	void afficher(){std::cout << "UC SONY\n";}
};

class SonyFactory : public PCFactory{
public:
	Ecran* creerEcran(){return new EcranSony();}
	Clavier* creerClavier(){return new ClavierSony();}
	UniteCentrale* creerUC(){return new UCSony();}
};

#endif