#include <iostream>
#include <map>

using namespace std;

class Commande{
public:
	virtual void execute()=0;
	virtual ~Commande(){};
};

class Telecommande{
	map<int,Commande*> touches;
public:
	void add(int position,Commande& commande){
		touches[position] = &commande;
	}

	void action(int position){
		touches[position]->execute();
	}
};

class Lampe{
public:
	void allumer(){
		cout << "Lampe allumée" << endl;
	}
	void eteindre(){
		cout << "Lampe éteinte" << endl;
	}
};

class LampeOnCommande : public Commande{
	Lampe& lampe;
public:
	LampeOnCommande(Lampe& lampe):lampe(lampe){}
	void execute(){
		lampe.allumer();
	}
};

class LampeOffCommande : public Commande{
	Lampe& lampe;
public:
	LampeOffCommande(Lampe& lampe):lampe(lampe){}
	void execute(){
		lampe.eteindre();
	}
};


int main(){
	// configuration (client de l'UML)
	Telecommande telecommande;
	Lampe lampe;
	LampeOnCommande on(lampe);
	LampeOffCommande off(lampe);
	telecommande.add(1,on);
	telecommande.add(2,off);

	// utilisation
	telecommande.action(1);
	telecommande.action(2);


}
