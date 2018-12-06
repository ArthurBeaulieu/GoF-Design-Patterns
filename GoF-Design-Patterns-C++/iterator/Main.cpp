#include <iostream>
#include "TableauCollection.h"
#include "Iterator.h"




using namespace std;
int main()
{
	TableauCollection<int> t;
	Collection<int>* c = new TableauCollection<int>();
	for(int i=0 ; i<5 ; i++){
		c->push(10+i);
		t.push(i);
	}

	for(Collection<int>::iterator it = t.getIterator() ; !it->isDone() ; it->next())
		cout << it->currentItem() << " ";
	cout << endl;
	for(Collection<int>::iterator it = c->getIterator() ; !it->isDone() ; it->next())
		cout << it->currentItem() << " ";
	cout << endl;
}
