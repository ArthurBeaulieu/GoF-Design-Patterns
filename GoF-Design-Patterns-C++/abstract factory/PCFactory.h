#ifndef __PCFACTORY_H__
#define __PCFACTORY_H__

class Ecran{
public:
	virtual void afficher()=0;
};
class Clavier{
public:
	virtual void afficher()=0;
};

class UniteCentrale{
public:
	virtual void afficher()=0;
};

class PCFactory{
public:
	virtual Ecran* creerEcran()=0;
	virtual Clavier* creerClavier()=0;
	virtual UniteCentrale* creerUC()=0;
};

#endif