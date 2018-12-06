#include <iostream>

using namespace std;

class Expression{
public:
	virtual int evaluer()=0;
	virtual ~Expression(){};
};

class Operande : public Expression{
	int valeur;
public:
	Operande(int val):valeur(val){}
	int evaluer(){return valeur;}
};

class OperateurBinaire : public Expression{
protected:
	Expression* gauche;
	Expression* droite;
public:
	OperateurBinaire(Expression* expGauche, Expression* expDroite):gauche(expGauche),droite(expDroite){};
	virtual  int evaluer()=0;
};

class Plus : public OperateurBinaire{
public:
	Plus(Expression* expGauche, Expression* expDroite):OperateurBinaire(expGauche,expDroite){};
	int evaluer(){return gauche->evaluer() + droite->evaluer();}
};

class Mul : public OperateurBinaire{
public:
	Mul(Expression* expGauche, Expression* expDroite):OperateurBinaire(expGauche,expDroite){};
	int evaluer(){return gauche->evaluer() * droite->evaluer();}
};

int main()
{
	Expression *mul =new Mul(new Operande(5),new Operande(6));
	Expression *plus= new Plus(mul,new Operande(3));
	cout << plus->evaluer() << endl;
}
