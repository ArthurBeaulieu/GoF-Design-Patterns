#ifndef __TABLEAUCOLLECTION_H__
#define __TABLEAUCOLLECTION_H__
#include "Collection.h"
#include "Iterator.h"

template <typename T>class TableauCollection:public Collection<T>{
	
	class TableauCollectionIterator:public Iterator<T>{
		TableauCollection<T> *collection;
		int indice;
	public:
		TableauCollectionIterator(TableauCollection<T> *t):collection(t),indice(0){};
		void first(){indice=1;}
		void next(){indice++;}
		bool isDone(){ return indice>= this->collection->nbElements;}
		T & currentItem(){ return collection->tab[indice];}
	};

	T* tab;
	int nbElements;
	int taille;
public:
	TableauCollection(size_t nb=10)
	{
		taille = nb;
		nbElements=0;
		tab = new int[nb];
	}
	~TableauCollection(){ delete [] tab; }
	void push(int element){
		if(nbElements < taille+1)
			tab[nbElements++] = element;
	}
	Iterator<T>* getIterator(){
		return new TableauCollectionIterator(this);
	}
};
#endif