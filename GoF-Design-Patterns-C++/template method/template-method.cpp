#include <iostream>

using namespace std;

class BoissonChaude{

private:
	virtual void chaufferEau()=0;
	virtual void ajouterIngredient()=0;
	virtual void melanger()=0;
public:
	void appliquerRecette(){
		chaufferEau();
		ajouterIngredient();
		melanger();
	}
	virtual ~BoissonChaude(){};
};

class CafeSoluble : public BoissonChaude{
private:
	void chaufferEau(){
		cout << "café soluble : eau à 100°" << endl;
	}
	void ajouterIngredient(){
		cout << "café soluble : ajout du café" << endl;
	}
	void melanger(){
		cout << "café soluble : mélanger" << endl;
	}
};

class TheRusse : public BoissonChaude{
private:
	void chaufferEau(){
		cout << "Thé russe : eau à 88°" << endl;
	}
	void ajouterIngredient(){
		cout << "Thé russe : mettre sachet" << endl;
		cout << "Thé russe : enlever sachet" << endl;
	}
	void melanger(){
		cout << "Thé russe : ajouter un nuage de lait" << endl;
	}
};
int main(){
	BoissonChaude* boisson = new TheRusse();
	boisson->appliquerRecette();
	delete boisson;


}
