#include <iostream>

using namespace std;

class Rectangle;
class Cercle;

class Operation{
public:
	virtual double calculer(Rectangle *r)=0;
	virtual double calculer(Cercle *r)=0;
	virtual ~Operation(){};
};

class Forme{
public:
	virtual double doOperation(Operation *op)=0;
	virtual ~Forme(){}
};

class Rectangle:public Forme{
	double largeur, longueur;
public:
	Rectangle(double la, double lg):largeur(la),longueur(lg){}
	double getLargeur(){return largeur;}
	double getLongueur(){return longueur;}
	double doOperation(Operation *op){return op->calculer(this);}
};

class Cercle : public Forme{
	double rayon;
public:
	Cercle(double r):rayon(r){}
	double getRayon(){return rayon;}
	double doOperation(Operation *op){return op->calculer(this);}
};


class Perimetre : public Operation{
public:
	double calculer(Rectangle *r){
		return (r->getLargeur()+r->getLongueur())*2;}
	double calculer(Cercle *c){
		return 2*c->getRayon()*3.14;}
};

class Surface : public Operation{
public:
	double calculer(Rectangle *r){
		return r->getLargeur()*r->getLongueur();}
	double calculer(Cercle *c){
		return c->getRayon()*c->getRayon()*3.14;}
};





int main(){
	Rectangle r(1,2);
	Cercle c(3);
	cout << "Perimetre du rectangle : " << r.doOperation(new Perimetre())<<endl;
	cout << "Perimetre du cercle : " << c.doOperation(new Perimetre())<<endl;
}
