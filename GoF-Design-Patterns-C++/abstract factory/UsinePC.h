#ifndef __USINEPC_H__
#define __USINEPC_H__

#include "PCFactory.h"

class UsinePC{
private:
	PCFactory * factory;
public:
	void setFactory(PCFactory * factory){this->factory = factory;}
	void creerPC(){
		Ecran * ecran = factory->creerEcran();
		ecran->afficher();
	}
};

#endif