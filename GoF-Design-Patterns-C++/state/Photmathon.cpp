#include <iostream>

using namespace std;

class EtatPhotomaton;
class AttenteChoix;
class AttentePiece;
class EtatDeveloppement;
class HorsService;

class Photomaton{
	EtatPhotomaton *attentePiece;
	EtatPhotomaton *attenteChoix;
	EtatPhotomaton *etatDeveloppement;
	EtatPhotomaton *horsService;
	EtatPhotomaton *etatCourant;

public:
	Photomaton();
	~Photomaton();
	void setEtat(EtatPhotomaton * etat){etatCourant = etat;}
	EtatPhotomaton *getEtatAttentePiece(){return attentePiece;}
	EtatPhotomaton *getEtatAttenteChoix(){return attenteChoix;}
	EtatPhotomaton *getEtatDeveloppement(){return etatDeveloppement;}
	EtatPhotomaton *getEtatHorsService(){return horsService;}
	void insererPiece();
	void recupererPiece();
	void modeIdentite();
	void modePortrait();
	void recupererPhoto();
};

class EtatPhotomaton{
protected:
	Photomaton *photomaton;
public:
	EtatPhotomaton(Photomaton *photomaton):photomaton(photomaton){};
	virtual void insererPiece()=0;
	virtual void recupererPiece()=0;
	virtual void modeIdentite()=0;
	virtual void modePortrait()=0;
	virtual void recupererPhoto()=0;
	virtual ~EtatPhotomaton(){}
};
class AttentePiece : public EtatPhotomaton{
public:
	AttentePiece(Photomaton *photomaton):EtatPhotomaton(photomaton){}
	void insererPiece(){
		cout << "=> piece acceptee" << endl;
		photomaton->setEtat(photomaton->getEtatAttenteChoix());
	}
	void recupererPiece(){cout << "Inserer d'abord une piece" << endl;}
	void modeIdentite(){cout << "Inserer d'abord une piece" << endl;}
	void modePortrait(){cout << "Inserer d'abord une piece" << endl;}
	void recupererPhoto(){cout << "Inserer d'abord une piece" << endl;}
};

class AttenteChoix : public EtatPhotomaton{
public:
	AttenteChoix(Photomaton *photomaton):EtatPhotomaton(photomaton){}
	void insererPiece(){cout << "Vous avez deja paye, recuperez votre piece" << endl;}
	void recupererPiece(){
		cout  << "Recuperez votre piece" << endl;
		photomaton->setEtat(photomaton->getEtatAttentePiece());}
	void modeIdentite(){
		cout << "=> mode identite" << endl;
		photomaton->setEtat(photomaton->getEtatDeveloppement());}
	void modePortrait(){
		cout << "=> mode portrait" << endl;
		photomaton->setEtat(photomaton->getEtatDeveloppement());}
	void recupererPhoto(){cout << "Selectionnez le mode photo" << endl;}
};

class EtatDeveloppement : public EtatPhotomaton{
public:
	EtatDeveloppement(Photomaton *photomaton):EtatPhotomaton(photomaton){}
	void insererPiece(){cout << "Vous avez deja paye, recuperez votre piece" << endl;}
	void recupererPiece(){cout << "Recuperez votre photo d'abord" << endl;}
	void modeIdentite(){cout << "Recuperez votre photo d'abord" << endl;}
	void modePortrait(){cout << "Recuperez votre photo d'abord" << endl;}
	void recupererPhoto(){
		cout << "=> recuperez votre photo" <<endl;
		photomaton->setEtat(photomaton->getEtatAttentePiece());}
};

class HorsService : public EtatPhotomaton{
public:
	HorsService(Photomaton *photomaton):EtatPhotomaton(photomaton){}
	void insererPiece(){cout << "HS" << endl;}
	void recupererPiece(){cout << "HS" << endl;}
	void modeIdentite(){cout << "HS" << endl;}
	void modePortrait(){cout << "HS" << endl;}
	void recupererPhoto(){cout << "HS" << endl;}
};

Photomaton::Photomaton(){
		attentePiece = new AttentePiece(this);
		attenteChoix = new AttenteChoix(this);
		etatDeveloppement = new EtatDeveloppement(this);
		horsService = new HorsService(this);
		etatCourant = attentePiece;
	}

Photomaton::~Photomaton(){
		delete attentePiece;
		delete attenteChoix;
		delete etatDeveloppement;
		delete horsService;}

void Photomaton::insererPiece(){etatCourant->insererPiece();}
void Photomaton::modeIdentite(){etatCourant->modeIdentite();}
void Photomaton::modePortrait(){etatCourant->modePortrait();}
void Photomaton::recupererPiece(){etatCourant->recupererPiece();}
void Photomaton::recupererPhoto(){etatCourant->recupererPhoto();}

int main(){
	Photomaton photo;
	photo.insererPiece();
	photo.recupererPhoto();
}
