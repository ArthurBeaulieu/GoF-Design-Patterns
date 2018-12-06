#include <iostream>

using namespace std;

template <typename T> class Memento {
private:
    T  state;
public:
   Memento( T val ) { state = val; }
private:
   friend class Nombre;
};

class Nombre {
private:
   int value;

public:
   Nombre(int val ) {value = val; }
   void setValue(int val) { value = val; }
   int getValue(){ return value; }
   Memento<int>* createMemento(){ return new Memento<int>( value ); }
   void  restore( Memento<int>* mem ) { value = mem->state ; }
};

int main(){
	Nombre n(6);
	cout << n.getValue() << endl;
	Memento<int>* m = n.createMemento();
	n.setValue(8);
	cout << n.getValue() << endl;
	n.restore(m);
	cout << n.getValue() << endl;
}
