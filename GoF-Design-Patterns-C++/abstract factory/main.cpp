#include "PCDell.h"
#include "PCSony.h"
#include "UsinePC.h"

int main(){
	PCFactory * factory = new SonyFactory();
	UsinePC usine;
	usine.setFactory(factory);
	usine.creerPC();
}